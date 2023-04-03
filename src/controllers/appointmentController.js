import Appointment from "../services/Appointment.js";

const getUserAppointment = async (req, res, next) => {
  const { userId } = res.locals;
  try {
    const appointments = await Appointment.getAppointmentByUserId(userId);
    res.send({ appointments });
  } catch (error) {
    next(error);
  }
};

export default {
  getUserAppointment
};