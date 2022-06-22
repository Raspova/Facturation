import 'dotenv/config'
import pg from 'pg'
import bcrypt  from 'bcrypt';
import { insert } from 'svelte/internal';
//2022-204

const insertProf = 
"Insert Into\
  contact_prof (lastname, firstname, email, phone, pass, admin_id)\
values\
  ( $1, $2, $3, $4, $5, $6);"
const insertStudent = 
"Insert Into\
  student_contacts (lastname, firstname, email, phone, pass, admin_id)\
values\
  ( $1, $2, $3, $4, 'NULL', $5)"

const insertAdmin = "Insert Into  contact_admin (\
    lastname,\
    firstname,\
    email ,\
    phone,\
    pass , group_id)values ($1, $2, $3, $4, $5, $6) returning id"

const updateAdminToRealAdmin = `
UPDATE contact_admin
SET 
	group_id = $1
WHERE id = $1;
`
        
export async function post({request}) {
    try {
    const pool = new pg.Pool();
    const data = await request.json();
    const psd = await bcrypt.hash(data.password, 10);
    let insert;
    if (data.status == 'prof')
        insert = insertProf;
    if (data.status == 'admin' || data.status == 'real_admin')
        insert = insertAdmin;
    if (data.status == 'student')
        insert = insertStudent;
    let res = await pool.query(insert, [data.lastname, data.firstname, data.email, data.phone, psd, data.group_id]);
    if (data.status == 'real_admin')
        pool.query(updateAdminToRealAdmin, [res.rows[0].id]);;
    //console.log(res.rows[0].id);
  } catch (err) {
        console.log("fail : ", err);
    }
}