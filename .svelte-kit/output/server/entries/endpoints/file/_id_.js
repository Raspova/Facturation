import pg from "pg";
import "dotenv/config";
async function get({ params }) {
  const pool = new pg.Pool();
  resultUser = await pool.query("SELECT * FROM student_contacts WHERE id = $1;", [params.id]);
  resultFac = await pool.query("SELECT * FROM facturation WHERE fk_user_contact = $1;", [params.id]);
  let user = resultUser.rows[0];
  let fac = resultFac.rows[0];
  let formation = fac.formation;
  let ref_edof = fac.ref;
  let lastname = user.lastname;
  let firstname = user.firstname;
  let number_hours = fac.nmb_hour;
  let begin_session = fac.begin_session;
  let end_session = fac.end_seesion;
  let puht = fac.puht;
  let mht = fac.mht;
  let mttc = fac.mttc;
  return {
    body: {
      user,
      fac,
      formation,
      ref_edof,
      lastname,
      firstname,
      number_hours,
      begin_session,
      end_session,
      puht,
      mht,
      mttc
    }
  };
}
export { get };
