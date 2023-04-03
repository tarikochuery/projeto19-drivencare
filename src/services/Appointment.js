import errors from "../errors/index.js";
import appointmentRepository from "../repositories/appointmentRepository.js";
import doctorRepository from "../repositories/doctorRepository.js";
import inWorkingTime from "../utils/inWorkingTime.js";

const getAppointmentByUserId = async (userId) => {
  const { rows: appointments } = await appointmentRepository
    .getAppointmentsByUser(userId);
  if (!appointments) throw errors.notFoundError();
  return appointments;
};

const create = async ({ pacientId, doctorId, date }) => {
  const doctorExists = await doctorRepository.getById(doctorId);
  if (!doctorExists) throw errors.notFoundError();

  const { rows: scheduledDates } = await appointmentRepository.getAllScheduledDates();
  const isDateInUse = scheduledDates.find(scheduledDate => scheduledDate === date);

  if (isDateInUse) throw errors.notAvailableDate();

  if (!inWorkingTime(date)) throw errors.notAvailableDate();
  await appointmentRepository.create({ date, doctorId, pacientId });
};

export default {
  getAppointmentByUserId,
  create
};