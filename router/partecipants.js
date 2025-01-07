const express = require('express');

const router = express.Router();

const partecipantsController = require('../controllers/partecipantsController');

//index
router.get('/', partecipantsController.index);

//show
router.get('/:id', partecipantsController.show);

//store
router.post('/', partecipantsController.store);

//update
router.put('/:id', partecipantsController.update);

//modify
router.patch('/:id', partecipantsController.modify);

//destroy
router.delete('/:id', partecipantsController.destroy);

module.exports = router

