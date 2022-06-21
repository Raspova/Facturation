import pg from 'pg'
import 'dotenv/config'

export async function get({params}) {
    const pool = new pg.Pool();
    let result;
    if (params.offset == "all")
        result =  await pool.query(`
            SELECT
              student_contacts.*,
              facturation.ref,
              facturation.formation
            FROM
              student_contacts
              INNER JOIN facturation ON student_contacts.id = facturation.id
            ORDER BY
              lastname;`);
     else
        result =  await pool.query("SELECT * FROM student_contacts ORDER BY lastname LIMIT 100 OFFSET $1" , [ params.offset]);
    return {
        body: {
            results:result.rows
        }
    }
}
