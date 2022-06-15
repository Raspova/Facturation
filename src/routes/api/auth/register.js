import 'dotenv/config'
import pg from 'pg'
import bcrypt  from 'bcrypt';
const str = "Insert Into  contact_admin (\
    lastname,\
    firstname,\
    email ,\
    phone,\
    pass )values ($1, $2, $3, $4, $5)"


    
        
export async function post({request}) {
    try {
    const pool = new pg.Pool();
    const data = await request.json();
    const psd = await bcrypt.hash(data.password, 10);
    pool.query(str, [data.lastname, data.firstname, data.email, data.phone, psd])
    } catch (err) {
        console.log("fail");
    }
}