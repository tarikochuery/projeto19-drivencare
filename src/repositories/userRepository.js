import db from '../config/db.connection.js';

const getByEmail = async (email) => {
  return await db.query(`
    SELECT * FROM users WHERE email=$1
  `,
    [email]);
};

const create = async ({ name, email, password }) => {
  await db.query(`
    INSERT INTO users (name, email, password)
    VALUES ($1, $2, $3)
  `,
    [name, email, password]);
  return;
};

export default {
  getByEmail,
  create
};