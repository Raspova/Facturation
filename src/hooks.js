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
    const group_id = await pool.query(`SELECT
    group_id
  FROM
    contact_admin
  WHERE
      email = $1`, [res.rows[0].email]);
    //console.log( (await group_id).rows)
    if (!res || res.rowCount == 0 || !res.rows ) {
        return {
            authentificated:false
        }
    }
    //console.log(res)
    return {
        authentificated:true,
        email:res.rows[0].email,
        group_id:group_id.rows[0].group_id
    }
    
}

export function getArrFromCookie(str, target) {
    str = str.split(" ").join("");
    const arr = str.split(";").map(e => e.split("="));
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i][0] === target) {
            return arr[i][1];
        }
    }
}

export async function getSession({request}){
    if (!request.headers.get('cookie'))
        return {
            authentificated: false
        };

    const context = await checkSession(getArrFromCookie(request.headers.get('cookie') ,"session_id"));
    if (!context || !context.authentificated) {
        return {
            authentificated: false
        }
    }
    //console.log(context)
    return {
        authentificated: true,
        email:context.email,
        group_id:context.group_id
    }
}