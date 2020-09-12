const app = require('express');
const router = app.Router();
const Types = require('../common/Types') // Model types

// Post controller
//const commentController = require('../controllers/commentController');

// CRUD Service
const CRUD = require('../common/CRUD');

// Create
router.post('/', (req, res) => CRUD.create(req.body, Types.COMMENT, res));

//get all
router.get('/', (req, res) =>CRUD.getAll(Types.COMMENT, res));

// Get by id
router.get('/:id', (req, res) => CRUD.getById(req.params.id, Types.COMMENT, res));

// Delete by id
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id, Types.COMMENT, res));

module.exports = router;