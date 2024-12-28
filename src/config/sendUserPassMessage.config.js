const createHttpError = require("http-errors");
const api = require("../../src/common/services/kavenegarService");

const sendUserPassMessage = async (mobile, userName, password) => {
    try {
        await api.VerifyLookup(
            {
                receptor: mobile,
                token: userName,
                token2: password,
                template: "verify2", // نام الگو در پنل کاوه‌نگار
            },
            (response, status) => {
               /* console.log("Response:", response);
                console.log("Status:", status);*/
            }
        );
    } catch (error) {
/*         console.error('Error sending OTP:', error);
 */        throw new createHttpError.InternalServerError('Failed to send OTP');
    }
};

module.exports = sendUserPassMessage;
