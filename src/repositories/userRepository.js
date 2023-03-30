import db from '../config/db.connection.js';

const getByEmail = async (email) => {
  return await db.query(`
    SELECT * FROM users WHERE email=$1
  `,
    [email]);
};

const create = async ({ name, email, password, type }) => {
  await db.query(`
    INSERT INTO users (name, email, password, type)
    VALUES ($1, $2, $3, $4)
  `,
    [name, email, password, type]);
  return;
};

export default {
  getByEmail,
  create
};