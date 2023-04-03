import errors from "../errors/index.js";
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const tokenValidation = (req, res, next) => {
  const [tokenType, token] = req.headers.authorization?.split(` `);

  if (tokenType !== 'Bearer') throw errors.unauthorized();

  if (!token) throw errors.unauthorized();

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) throw errors.unauthorized();

    res.locals.userId = decoded.userId;
    next();
  });
};

export default tokenValidation;