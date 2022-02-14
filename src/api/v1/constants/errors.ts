exports.UNAUTHORIZED = {
  NOT_LOGGED_IN: `You are not logged in please login to get Access`,
  INVALID_JWT: `Invalid token! Please Login Again`,
  EXPIRED_JWT: `Your token has expired! please login again`,
  NOT_VERIFIED: `Your Account is not verified, Please Verify First`,
  INVALID_EXPIRED: `Token is invalid or has been Expired`,
  PASSWORD_CHANGED: 'You have recently changed password! Please login again.',
  UNAUTHORIZE: 'You are not authorize to perform this action',
  UNABLE: 'You are unable to perform this action',
  BANNED:
    'You have violated our Privacy Policy & Terms. For Further Information please contact our Customer Support Center.',
};

exports.PROGRAMMING = {
  SOME_ERROR: `Something went wrong`,
};

exports.RUNTIME = {
  SENDING_TOKEN: `There was error sending Token. Please try again later`,
};

exports.REQUIRED = {
  EMAIL_REQUIRED: `Email is required`,
  FIRSTNAME_REQUIRED: `FirstName is required`,
  LASTNAME_REQUIRED: `LastName is required`,
  USERNAME_REQUIRED: 'Username is Required',
  PASSWORD_REQUIRED: `Password is required`,
  PHONE_REQUIRED: `Phone Number is required`,
  IMAGE_REQUIRED: `Image is required`,
  START_DATE: 'Start Date is Required',
  END_DATE: 'End Date is Required',
};

exports.UNIQUE = {
  UNIQUE_TITLE: 'Email must be unique',
};

exports.INVALID = {
  INVALID_RESET_LINK: 'Password reset code is invalid or has been expired',
  INVALID_LOGIN_CREDENTIALS: 'Email or Password is Incorrect',
  INVALID_FORGOT_PASSWORD_CREDENTIALS:
    'Email or Phone Number is Incorrect or does not exist',
  WRONG_CREDENTIAL_ERROR_EMAIL: `Email or password is incorrect`,
  WRONG_CREDENTIAL_ERROR_PHONE: `Phone or password is incorrect`,
  NO_CREDENTIALS_EMAIL: `Please provide email and password`,
  NO_CREDENTIALS_PHONE: `Please provide Phone Number and password`,
  INVALID_EMAIL: `Please Enter Valid Email`,
  INVALID_PHONE: `Please Enter Valid Phone`,
  INVALID_FIRSTNAME: `FirstName must only contain characters between A-Z`,
  INVALID_LASTNAME: `lastName must only contain characters between A-Z`,
  INVALID_PHONE_NUM: `Please Enter Valid Phone Number`,
  PASSWORD_LENGTH: `Enter Password with 8 or more characters`,
  PASSWORD_MISMATCH: `Password and ConfirmPassword are not equal`,
  INVALID_PASSWORD: 'Invalid Password',
  NOT_FOUND: 'Not Found',
  INVALID_VERIFICATION_TOKEN:
    'Verification Code is invalid or has been expired',
  VERIFY_EMAIL: 'Please verify your email address first',
  NOT_ACTIVATED: 'Your account Not activated yet',
  INVALID_CODE: 'Invalid Code',
  EXPIRED_CODE: 'Expired Code',
};
