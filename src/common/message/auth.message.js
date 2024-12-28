const AuthorizationMessage = Object.freeze({
    Login:"ورود با موفقیت انجام شد",
    LoginAgain:"مجددا وارد سیستم شوید",
    Unauthorized: "احراز هویت انجام نشد لطفا مجدد وارد سیستم شوید",
    NotFoundAccount: "حساب کاربری وجود ندارد",
    InvalidToken: "توکن معتبر نیست"
})
module.exports = {
    AuthorizationMessage
}