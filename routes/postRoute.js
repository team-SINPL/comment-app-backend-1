const app = require('express');
const router = app.Router();
const Types = require('../common/Types') // Model types

// Post controller
//const postController = require('../controllers/postController');

// CRUD Service
const CRUD = require('../common/CRUD');

// Create
router.post('/', (req, res) => CRUD.create(req.body, Types.POST, res));

//get all
router.get('/', (req, res) =>CRUD.getAll(Types.POST, res));

// Get by id
router.get('/:id', (req, res) => CRUD.getById(req.params.id, Types.POST, res));

// Delete by id
router.delete('/:id', (req, res) => CRUD.deleteById(req.params.id, Types.POST, res));

module.exports = router;