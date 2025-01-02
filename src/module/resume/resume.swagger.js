/**
 * @swagger
 * tags:
 *   name: Resume
 *   description: Resume Module and Routes
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     PersonalInfo:
 *       type: object
 *       properties:
 *         profilePicture:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Education:
 *       type: object
 *       required:
 *         - degree
 *         - fieldOfStudy
 *         - institution
 *         - startDate
 *         - endDate
 *       properties:
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
 *         fieldOfStudy:
 *           type: string
 *         institution:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date
 *         endDate:
 *           type: string
 *           format: date
 *         grade:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     WorkExperience:
 *       type: object
 *       required:
 *         - company
 *         - position
 *         - startDate
 *         - endDate
 *         - description
 *       properties:
 *         company:
 *           type: string
 *         position:
 *           type: string
 *         startDate:
 *           type: string
 *           format: date
 *         endDate:
 *           type: string
 *           format: date
 *         description:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Skills:
 *       type: array
 *       items:
 *         type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Languages:
 *       type: object
 *       required:
 *         - name
 *         - proficiency
 *       properties:
 *         name:
 *           type: string
 *         proficiency:
 *           type: string
 *           enum:
 *             - beginner
 *             - intermediate
 *             - advanced
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Certifications:
 *       type: object
 *       required:
 *         - title
 *         - issuingOrganization
 *         - issueDate
 *       properties:
 *         title:
 *           type: string
 *         issuingOrganization:
 *           type: string
 *         issueDate:
 *           type: string
 *           format: date
 *         certificateLink:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Projects:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         technologies:
 *           type: array
 *           items:
 *             type: string
 *         projectLink:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Interests:
 *       type: array
 *       items:
 *         type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Objectives:
 *       type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Attachments:
 *       type: object
 *       required:
 *         - fileName
 *         - fileType
 *         - filePath
 *       properties:
 *         fileName:
 *           type: string
 *         fileType:
 *           type: string
 *         filePath:
 *           type: string
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     VideoResume:
 *       type: object
 *       required:
 *         - videoPath
 *         - recordedAt
 *       properties:
 *         videoPath:
 *           type: string
 *         recordedAt:
 *           type: string
 */

/**
 * @swagger
 * /resume/createResume:
 *  post:
 *      summary: Create a new resume
 *      tags:
 *          - Resume
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          personalInfo:
 *                              $ref: '#/components/schemas/PersonalInfo'
 *                          education:
 *                              $ref: '#/components/schemas/Education'
 *                          workExperience:
 *                              $ref: '#/components/schemas/WorkExperience'
 *                          skills:
 *                              $ref: '#/components/schemas/Skills'
 *                          languages:
 *                              $ref: '#/components/schemas/Languages'
 *                          certifications:
 *                              $ref: '#/components/schemas/Certifications'
 *                          projects:
 *                              $ref: '#/components/schemas/Projects'
 *                          interests:
 *                              $ref: '#/components/schemas/Interests'
 *                          objectives:
 *                              $ref: '#/components/schemas/Objectives'
 *                          attachments:
 *                              $ref: '#/components/schemas/Attachments'
 *                          videoResume:
 *                              $ref: '#/components/schemas/VideoResume'
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          personalInfo:
 *                              $ref: '#/components/schemas/PersonalInfo'
 *                          education:
 *                              $ref: '#/components/schemas/Education'
 *                          workExperience:
 *                              $ref: '#/components/schemas/WorkExperience'
 *                          skills:
 *                              $ref: '#/components/schemas/Skills'
 *                          languages:
 *                              $ref: '#/components/schemas/Languages'
 *                          certifications:
 *                              $ref: '#/components/schemas/Certifications'
 *                          projects:
 *                              $ref: '#/components/schemas/Projects'
 *                          interests:
 *                              $ref: '#/components/schemas/Interests'
 *                          objectives:
 *                              $ref: '#/components/schemas/Objectives'
 *                          attachments:
 *                              $ref: '#/components/schemas/Attachments'
 *                          videoResume:
 *                              $ref: '#/components/schemas/VideoResume'
 *      responses:
 *          200:
 *              description: Resume created successfully
 *          400:
 *              description: Invalid request
 *          500:
 *              description: Server error
 */

/**
 * @swagger
 * /resume/getResume/{id}:
 *  get:
 *      summary: Get a resume by ID
 *      tags:
 *          - Resume
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: The resume ID
 *      responses:
 *          200:
 *              description: Resume fetched successfully
 *          404:
 *              description: Resume not found
 *          500:
 *              description: Server error
 */

/**
 * @swagger
 * /resume/updateResume/{id}:
 *  put:
 *      summary: Update an existing resume
 *      tags:
 *          - Resume
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: The resume ID
 *      requestBody:
 *          content:
 *              application/json:
 *                  schema: 
 *                      $ref: '#/components/schemas/Resume'
 *      responses:
 *          200:
 *              description: Resume updated successfully
 *          400:
 *              description: Invalid request
 *          500:
 *              description: Server error
 */

/**
 * @swagger
 * /resume/deleteResume/{id}:
 *  delete:
 *      summary: Delete a resume by ID
 *      tags:
 *          - Resume
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          schema:
 *            type: string
 *          description: The resume ID
 *      responses:
 *          200:
 *              description: Resume deleted successfully
 *          404:
 *              description: Resume not found
 *          500:
 *              description: Server error
 */
