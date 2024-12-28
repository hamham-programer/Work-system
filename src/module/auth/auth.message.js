const AuthMessage = Object.freeze({
  SendOtoSuccessfully: "ارسال با موفقیت انجام شد",
  SendOtoFaild: "ارسال کد صورت نگرفت",
  InvalidCredentials: "خطایی رخ داده است لطفا موارد وارد شده کنترل شوند",
  NotFound: "کاربر موردنظر یافت نشد",
  OtpCodeNotExpired: "زمان کد قبلی هنوز منقضی نشده است",
  OtpCodeExpired: "کد ارسالی منقضی شده است",
  otpCodeIsIncorrect: " کد وارد شده با کد ارسالی یکسان نیست ",
  LoginSuccessfully: "با موفقیت وارد حساب کاربری شدید",
  LogoutSuccessfuly: "با موفقیت از حساب خارج شدید",
});
module.exports = AuthMessage;
