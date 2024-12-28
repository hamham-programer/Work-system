const createHttpError = require("http-errors");
const api = require("../../src/common/services/kavenegarService");

const sendOtpMessage = async (mobile, code) => {
    try {
        await api.VerifyLookup(
            {
                receptor: mobile,
                token: code,
                template: "verify", // نام الگو در پنل کاوه‌نگار
            },
            (response, status) => {
              /*  console.log("Response:", response);
                console.log("Status:", status);*/
            }
        );
    } catch (error) {
/*         console.error('Error sending OTP:', error);
 */        throw new createHttpError.InternalServerError('Failed to send OTP');
    }
};

module.exports = sendOtpMessage;
