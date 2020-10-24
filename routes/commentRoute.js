const app = require('express');
const router = app.Router();
const Types = require('../common/Types') // Model types

// Post controller
//const commentController = require('../controllers/commentController');

// CRUD Service
const CRUD = require('../common/CRUD');

// Create
/**
 * @swagger
 * /api/comments:
 *   post:
 *     description: create a comment details
 *     tags:
 *      - Comment
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Responce Message
 */
router.post('/', (req, res) => CRUD.create(req.body, Types.COMMENT, res));

//get all
/**
 * @swagger
 * /api/comments:
 *   get:
 *     description: get all comment details
 *     tags:
 *      - Comment
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array of comment list
 */
router.get('/', (req, res) =>CRUD.getAll(Types.COMMENT, res));

// Get by id
/**
 * @swagger
 * /api/comments/:id:
 *   get:
 *     description: get comment details by id
 *     tags:
 *      - Comment
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A comment
 */
router.get('/:id', (req, res) => CRUD.getById(req.params.id, Types.COMMENT, res));

// Delete by id
/**
 * @swagger
 * /api/comments:
 *   delete:
 *     description: delete a comment by ID
 *     tags:
 *      - Comment
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Responce Message
 */
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id, Types.COMMENT, res));

module.exports = router;