import httpStatus from "http-status";
const handleAplicationError = (err, req, res, next) => {
  if (err.name === 'DuplicatedEmailError') {
    return res
      .status(httpStatus.CONFLICT)
      .send(err.message);
  }

  if (err.name === 'ForbiddenError') {
    return res
      .status(httpStatus.FORBIDDEN)
      .send(err.message);
  }

  if (err.name === 'InvalidCredentialsError') {
    return res
      .status(httpStatus.UNAUTHORIZED)
      .send(err.message);
  }

  if (err.name === 'NotFoundError') {
    return res
      .status(httpStatus.NOT_FOUND)
      .send(err.message);
  }
  return res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Sorry about that...');
};

export default handleAplicationError;