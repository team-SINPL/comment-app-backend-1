const app = require('express');
const router = app.Router();
const Types = require('../common/Types') // Model types

// Post controller
//const replyController = require('../controllers/replyController');

// CRUD Service
const CRUD = require('../common/CRUD');

// Create
/**
 * @swagger
 * /api/replies:
 *   post:
 *     description: create a reply details
 *     tags:
 *      - Reply
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Responce Message
 */
router.post('/', (req, res) => CRUD.create(req.body, Types.REPLY, res));

//get all
/**
 * @swagger
 * /api/replies:
 *   get:
 *     description: get all reply details
 *     tags:
 *      - Reply
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Array of reply list
 */
router.get('/', (req, res) =>CRUD.getAll(Types.REPLY, res));

// Get by id
/**
 * @swagger
 * /api/replies/:id:
 *   get:
 *     description: get reply details by id
 *     tags:
 *      - Reply
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A reply
 */
router.get('/:id', (req, res) => CRUD.getById(req.params.id, Types.REPLY, res));

// Delete by id
/**
 * @swagger
 * /api/replies:
 *   delete:
 *     description: delete a reply by ID
 *     tags:
 *      - Reply
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Responce Message
 */
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id, Types.REPLY, res));

module.exports = router;