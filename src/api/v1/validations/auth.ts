export {};
const { REQUIRED } = require('../../../constants/index').ERRORS;

const LoginCredentialValidation = (req: any) => {
  const { email, password } = req.body;
  if (!email) {
    return REQUIRED.EMAIL_REQUIRED;
  } else if (!password) {
    return REQUIRED.PASSWORD_REQUIRED;
  } else {
    return true;
  }
};

const SignupCredentialValidation = (req: any) => {
  const { email, password, firstName, lastName } = req;
  if (!email) {
    return REQUIRED.EMAIL_REQUIRED;
  } else if (!password) {
    return REQUIRED.PASSWORD_REQUIRED;
  } else if (!password) {
    return REQUIRED.PASSWORD_REQUIRED;
  } else {
    return true;
  }
};

module.exports = {
  LoginCredentialValidation,
  SignupCredentialValidation,
};
