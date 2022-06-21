import bcrypt  from 'bcrypt';
import 'dotenv/config'
import pg from 'pg'
import {v4 as uuidv4} from 'uuid'
import cookie from 'cookie'
import {getArrFromCookie} from '../../../hooks.js'

export async function post({request}) {
    try {
        const pool = new pg.Pool();
        const data = await request.json();
        const mdp =  (await pool.query("Select pass  from contact_admin where email = $1" , [data.email])).rows[0].pass;
        
        if (!bcrypt.compare(data.password, mdp))
            return{ 
            status:401
            ,body: {
                message:"KO"
            }
        }    
        
        const cookieId = uuidv4();
        //console.log( cookieId)
        // DROP SESSION 
        try {
            await pool.query("DELETE FROM session_safe WHERE email = $1",  [data.email])
        } catch (err){};
        pool.query("Insert INTO session_safe (\"sessionID\", email  ) VALUES ($1 , $2);", [cookieId, data.email])
        return {
            status:200,
            headers: {
                'Set-Cookie':cookie.serialize('session_id', cookieId, {
                    httpOnly: true,
                    maxAge: 60*60*24,
                    sameSite: 'lax',
                    path:'/'
                })
            },body: {
                message:"OK"
            }
        
        }
    
    } catch (err) {
        return {
            status:401
            ,body: {
                message:"KO"
            }
        }
    }
}

export async function del({request}) {
    try {
        const pool = new pg.Pool();

        if (!request.headers.get('cookie'))
            return {
                status:401,
                body: {
                    message:"No cookie"
                }
                ,authentificated: false
            };
        const id = await getArrFromCookie(request.headers.get('cookie') ,"session_id");
        await pool.query('DELETE FROM session_safe WHERE "sessionID" = $1',  [id])
        return {
            status: 200,
            body: {
                message: "OK"
            }
            ,authentificated: false
        }
    } catch(err) {
        console.log(err);
        return {
            status:401
            ,body: {
                message:"KO"
            }
        }
    }
}