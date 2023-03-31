import httpStatus from "http-status";
const handleAplicationError = (err, req, res, next) => {
  if (err.name === 'DuplicatedEmailError') {
    return res
      .status(httpStatus.CONFLICT)
      .send(err.message);
  }
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Sorry about that...');
};

export default handleAplicationError;