import cookie from 'cookie'
import 'dotenv/config'
import pg from 'pg'

const pool = new pg.Pool();

export async function checkSession(session_id ) {
 
    if (!session_id) {
        return {
            authentificated:false
        }
    }
    const res = await pool.query("SELECT \"sessionID\", email from session_safe WHERE \"sessionID\" = $1", [session_id]);
    if (!res || res.rowCount == 0 || !res.rows ) {
        return {
            authentificated:false
        }
    }
    //console.log(res)
    return {
        authentificated:true,
        email:res.rows[0].email
    }
    
}

export async function getSession({request}){
    if (!request.headers.get('cookie'))
        return {
            authentificated: false
        };
    const context = await checkSession(request.headers.get('cookie').split('=')[1])
    console.log( request.headers.get('cookie').split('=')[1]); // MARCHERA QU'AVEC UN COOKIE LOL , FAIS UNE BOUCLE UN JOUR BATARD STP, CKEK LA KEY-> GET VALUE || UNDIFFINED
    if (!context || !context.authentificated) {
        return {
            authentificated: false
        }
    }
    //console.log(context)
    return {
        authentificated: true,
        email:context.email
    }
}