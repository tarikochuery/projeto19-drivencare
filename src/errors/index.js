const duplicatedEmailError = () => {
  return {
    name: 'DuplicatedEmailError',
    message: 'This email is already in use'
  };
};

const forbiddenError = () => {
  return {
    name: 'ForbiddenError',
    message: "You don't have permission."
  };
};

const invalidCredentialsError = () => {
  return {
    name: 'InvalidCredentialsError',
    message: 'Email or/and password are incorrect.'
  };
};

const notFoundError = () => {
  return {
    name: 'NotFoundError',
    message: 'No result for this research'
  };
};

export default {
  duplicatedEmailError,
  forbiddenError,
  invalidCredentialsError,
  notFoundError
};