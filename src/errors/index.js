const duplicatedEmailError = () => {
  return {
    name: 'DuplicatedEmailError',
    message: 'This email is already in use'
  };
};

export default {
  duplicatedEmailError
};