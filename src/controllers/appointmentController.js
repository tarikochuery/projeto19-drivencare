import httpStatus from "http-status";
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

const create = async (req, res, next) => {
  const { date, doctorId } = req.body;
  const { userId } = res.locals;
  try {
    await Appointment.create({ pacientId: userId, doctorId, date });
    res.sendStatus(httpStatus.CREATED);
  } catch (error) {
    next(error);
  }
};

export default {
  getUserAppointment,
  create
};