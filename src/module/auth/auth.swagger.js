/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth module and Routes
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  - userName
 *                  - password
 *              properties:
 *                  userName:
 *                      type: string
 *                  password:
 *                      type: string
  *          CheckOTP:
 *              type: object
 *              required:
 *                  - code
 *              properties:
 *                  code:
 *                      type: string
 */

/**
 * @swagger
 * /auth/send-otp:
 *  post:
 *      summary: Send OTP to a mobile number
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema: 
 *                      $ref: '#/components/schemas/SendOTP'
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/SendOTP'
 *      responses:
 *          200:
 *              description: OTP sent successfully
 *          400:
 *              description: Invalid request
 *          500:
 *              description: Server error
 */

/**
 * @swagger
 * /auth/check-otp:
 *  post:
 *      summary: check OTP for login user
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema: 
 *                      $ref: '#/components/schemas/CheckOTP'
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/CheckOTP'
 *      responses:
 *          200:
 *              description: OTP sent successfully
 *          400:
 *              description: Invalid request
 *          500:
 *              description: Server error
 */


/**
 * @swagger
 * /auth/logout:
 *  get:
 *      summary: logout user
 *      tags:
 *          -   Auth
 *      responses:
 *          200:
 *              description: OTP sent successfully
 *          400:
 *              description: Invalid request
 *          500:
 *              description: Server error
 */