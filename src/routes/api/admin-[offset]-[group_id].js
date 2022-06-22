import pg from 'pg'
import 'dotenv/config'

export async function get({params}) {
    const pool = new pg.Pool();
    let result;
    //let offset = params.info.split("-")[0];
    //let group_id = params.info.split("-")[1];
    //console.log(group_id, " ", params.info.split('-') );
    if (params.offset == "all")
        result =  await pool.query(`
            SELECT
              student_contacts.*,
              facturation.ref,
              facturation.formation
            FROM
              student_contacts
              INNER JOIN facturation ON student_contacts.id = facturation.fk_user_contact
            WHERE
              admin_id = $1
            ORDER BY
              lastname;`, [params.group_id]);
     else
        result =  await pool.query("SELECT * FROM student_contacts  WHERE admin_id = $1 ORDER BY lastname LIMIT 100 OFFSET $2" , [params.group_id ,params.offset]);
    console.log()
    return {
        body: {
            results:result.rows
        }
    }
}
