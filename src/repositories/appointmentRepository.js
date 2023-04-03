import db from "../config/db.connection.js";

const getAllScheduledDates = async () => {
  return await db.query('SELECT date FROM appointment');
};

const getAppointmentsByUser = async (userId) => {
  return await db.query(`
    SELECT appointment.id, appointment.date, appointment.confirmed, doctors.name as doctor_name, doctors.specialty, doctors.location 
    FROM appointment
    JOIN doctors
      ON doctors.id = appointment.doctor_id
    JOIN users
      ON appointment.pacient_id = users.id
    WHERE users.id = $1;
  `,
    [userId]);
};

const create = async ({ date, doctorId, pacientId }) => {
  await db.query(`
    INSERT INTO appointment (doctor_id, pacient_id, date, confirmed)
    VALUES ($1, $2, $3, false);
  `, [doctorId, pacientId, date]);
};

export default {
  getAppointmentsByUser,
  create,
  getAllScheduledDates
};