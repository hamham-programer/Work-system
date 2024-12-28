/**
 * @swagger
 * tags:
 *  name: Register
 *  description: Register Module and Routes
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Register:
 *       type: object
 *       required:
 *         - mobile
 *         - name
 *         - family
 *         - nationalCode
 *         - birthCertificateNumber
 *         - serialNumber
 *         - birthPlace
 *         - birthDate
 *         - certificateIssuanceDate
 *         - certificateIssuancePlace
 *         - fatherName
 *         - maritalStatus
 *         - degree
 *         - universityName
 *         - educationPlace
 *         - educationalStatus
 *         - gender
 *         - numberOfChildren
 *         - militaryServiceStatus
 *         - address    
 *       properties:
 *         name:
 *           type: string
 *           description: First name of the user
 *         family:
 *           type: string
 *           description: Last name of the user
 *         nationalCode:
 *           type: string
 *           pattern: "^\\d{10}$"
 *           description: National ID code (10 digits)
 *         birthCertificateNumber:
 *           type: string
 *           description: Birth certificate number
 *         serialNumber:
 *           type: string
 *           description: Serial number of the birth certificate
 *         birthPlace:
 *           type: string
 *           description: Place of birth
 *         birthDate:
 *           type: string
 *           format: date
 *           description: Date of birth (ISO format)
 *         certificateIssuanceDate:
 *           type: string
 *           format: date
 *           description: Date of birth certificate issuance (ISO format)
 *         certificateIssuancePlace:
 *           type: string
 *           description: Place where the birth certificate was issued
 *         fatherName:
 *           type: string
 *           description: Father's name
 *         maritalStatus:
 *           type: string
 *           enum:
 *             - single
 *             - married
 *           description: Marital status of the user
 *         degree:
 *           type: string
 *           enum:
 *             - illiterate
 *             - undergraduate
 *             - diploma
 *             - postgraduate diploma
 *             - bachelors
 *             - masters
 *             - phd
 *           description: Highest degree obtained by the user
 *         universityName:
 *           type: string
 *           description: Name of the university
 *         educationPlace:
 *           type: string
 *           description: Place of education
 *         educationalStatus:
 *           type: string
 *           description: Current educational status
 *         gender:
 *           type: string
 *           enum:
 *             - male
 *             - female
 *           description: Gender of the user
 *         numberOfChildren:
 *           type: integer
 *           description: Number of children the user has
 *         militaryServiceStatus:
 *           type: string
 *           enum:
 *             - Exempt
 *             - Conscription
 *             - Cardholder
 *           description: Military service status
 *         militaryServiceEndDate:
 *           type: string
 *           format: date
 *           description: End date of military service
 *         address:
 *           type: string
 *           description: Home address of the user
 *         mobile:
 *           type: string
 *           pattern: "^\\d{11}$"
 *           description: Mobile number (11 digits)
 */

/**
 * @swagger
 *
 * /register/submit:
 *   post:
 *     summary: Initial registration
 *     tags:
 *       - Register
 *     requestBody:
 *       content:
 *         application/x-www-form-urlencoded:
 *           schema:
 *             $ref: "#/components/schemas/Register"
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Register"
 *     responses:
 *       200:
 *         description: Success, user registered successfully
 *       400:
 *         description: Bad Request, validation failed or missing fields
 *       500:
 *         description: Internal Server Error
 */

