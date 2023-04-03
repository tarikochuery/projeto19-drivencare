import db from "../config/db.connection";

const getAll = async () => {
  return await db.query(`SELECT * FROM doctors`);
};

const getById = async (id) => {
  return await db.query(`
      SELECT * FROM doctors
      WHERE id = $1;
    `,
    [id]);
};

export default {
  getAll,
  getById
};