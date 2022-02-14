export {};
const bcryptjs = require('bcryptjs');
const crypto = require('crypto-js');
const User = require('../../models/users/userModel');

exports.correctPassword = async function (
  candidatePassword: string,
  userpassword: string
) {
  // Check Password Is Correct??
  return await bcryptjs.compare(candidatePassword, userpassword);
};

exports.createPasswordResetToken = async function () {
  let resetToken;
  do {
    resetToken = Math.floor(
      Math.random() * (1000 - 9999 + 1) + 9999
    ).toString();
  } while (
    await User.findOne({
      passwordResetToken: crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex'),
    })
  );
  this.passwordResetToken = crypto
    .createHash('sha256')
    .update(resetToken)
    .digest('hex');
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;
  return resetToken;
};
