import db from "../config/db.connection.js";

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

export default {
  getAppointmentsByUser
};