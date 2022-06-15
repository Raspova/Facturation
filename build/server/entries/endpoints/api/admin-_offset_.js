import pg from "pg";
import "dotenv/config";
async function get({ params }) {
  const pool = new pg.Pool();
  let result = await pool.query("SELECT * FROM student_contacts ORDER BY lastname LIMIT 100 OFFSET $1", [params.offset]);
  return {
    body: {
      results: result.rows
    }
  };
}
export { get };
