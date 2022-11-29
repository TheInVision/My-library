const router = require("express").Router();
const User = require("./../models/User");
const bcyrpt = require("bcrypt");
const AuthController = require("./../controllers/AuthController");

/**
 * @swagger
 *    definitions:
 *    Request:
 *                    type: object
 *                    properties:
 *                            username:
 *                                 type: string
 *                            email:
 *                                 type: string
 *                            password:
 *                                 type: string
 *    Response:
 *                    type: object
 *                    properties:
 *                            token:
 *                                 type: string
 *                            message:
 *                                 type: string
 */

/**
 * @swagger
 * /auth/signup:
 *   post:
 *     tags:
 *       - Auth Operations
 *     summary: Signup a new user
 *     description: It signups a new user and saves it to DB
 *     requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/definitions/Request'
 *     responses:
 *       200:
 *         description: User signup successfull
 *         content:
 *             application/json:
 *                 schema:
 *                    $ref : '#/definitions/Response'
 *       500:
 *         description: Internal server error
 */

router.route("/signup").post(AuthController.signup);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     tags:
 *       - Auth Operations
 *     summary: Login a user
 *     description: It logins an existing user and sends token.
 *     requestBody:
 *         required: true
 *         content:
 *             application/json:
 *                 schema:
 *                     $ref: '#/definitions/Request'
 *     responses:
 *       200:
 *         description: User Login successfull
 *         content:
 *             application/json:
 *                 schema:
 *                    $ref : '#/definitions/Response'
 *       500:
 *         description: Internal server error
 *       404:
 *         description: User not found!
 *       400:
 *         description: Wrong password!
 */
router.route("/login").post(AuthController.login);

module.exports = router;
