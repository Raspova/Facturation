import 'dotenv/config'
import pg from 'pg'
import bcrypt  from 'bcrypt';
import { insert } from 'svelte/internal';

const insertProf = 
"Insert Into\
  contact_prof (lastname, firstname, email, phone, pass)\
values\
  ( $1, $2, $3, $4, 'NULL')"

const insertStudent = 
"Insert Into\
  student_contacts (lastname, firstname, email, phone, pass)\
values\
  ( $1, $2, $3, $4, $5)"

const insertAdmin = "Insert Into  contact_admin (\
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
    let insert;
    if (data.status == 'prof')
        insert = insertProf;
    if (data.status == 'admin')
        insert = insertAdmin;
    if (data.status == 'student')
        insert = insertStudent;
    pool.query(insert, [data.lastname, data.firstname, data.email, data.phone, psd])
    } catch (err) {
        console.log("fail");
    }
}