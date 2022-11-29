const router = require("express").Router();
const User = require("./../models/User");
const Book = require("./../models/Book");
const UserController = require("./../controllers/UserController");
const userAuth = require("./../middleware/Authorization");

/**
 * @swagger
 *    definitions:
 *    Response:
 *                    type: object
 *                    properties:
 *                            books:
 *                                 type: array
 *                            message:
 *                                 type: string
 */

//  *     parameters:
//  *       - name: x-access-token
//  *         in: header
//  *         description: an authentication header
//  *         required: true
//  *         type: string

/**
 * @swagger
 * /users/myBooks:
 *   get:
 *     tags:
 *       - User Operations
 *     summary: Get all books of a user
 *     description: It gets all books of a user from the database
 
 *     responses:
 *       200:
 *         description: Books loaded successfully
 *         content:
 *             application/json:
 *                 schema:
 *                    $ref : '#/definitions/Response'
 *       500:
 *         description: Internal server error
 */

router.route("/myBooks").get(userAuth.isLoggedIn, UserController.getAllBooks);

/**
 * @swagger
 * /users/issue/{bookId}:
 *    patch:
 *     tags:
 *       - User Operations
 *     summary: Issues a book
 *     description: It issues a book of given for a logged-in user
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         description: an authentication header
 *         required: true
 *         type: string
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: Valid Id required
 *         schema:
 *           type: string
 *    responses:
 *       200:
 *         description: Books loaded successfully
 *         content:
 *             application/json:
 *                 schema:
 *                    $ref : '#/definitions/Response'
 *       500:
 *         description: Internal server error
 */
router
  .route("/issue/:bookId")
  .patch(userAuth.isLoggedIn, UserController.issueBook);

/**
 * @swagger
 * /users/return/{bookId}:
 *    patch:
 *     tags:
 *       - User Operations
 *     summary: Returns a book
 *     description: It returns a book of given for a logged-in user
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         description: an authentication header
 *         required: true
 *         type: string
 *       - in: path
 *         name: bookId
 *         required: true
 *         description: Valid Id required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Books loaded successfully
 *         content:
 *             application/json:
 *                 schema:
 *                    $ref : '#/definitions/Response'
 *       500:
 *         description: Internal server error
 */
router
  .route("/return/:bookId")
  .patch(userAuth.isLoggedIn, UserController.returnBook);

// delete a user
/**
 * @swagger
 * /users/deleteMe/{id}:
 *   delete:
 *     tags:
 *       - User Operations
 *     summary: Delete user from DB
 *     description: It is used to delete a user from the database with given id
 *     parameters:
 *       - name: x-access-token
 *         in: header
 *         description: an authentication header
 *         required: true
 *         type: string
 *       - in: path
 *         name: id
 *         required: true
 *         description: Valid Id required
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       400:
 *         description: Bad input supplied
 *       401:
 *         description: Invalid token supplied
 *       500:
 *         description: Internal server error
 */
router
  .route("/deleteMe/:id")
  .delete(userAuth.isLoggedIn, UserController.deleteUser);

module.exports = router;
