import errors from "../errors/index.js";
import appointmentRepository from "../repositories/appointmentRepository.js";

const getAppointmentByUserId = async (userId) => {
  const { rows: appointments } = await appointmentRepository
    .getAppointmentsByUser(userId);
  if (!appointments) throw errors.notFoundError();
  return appointments;
};

export default {
  getAppointmentByUserId
};