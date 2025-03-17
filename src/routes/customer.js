const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/', customerController.listHTML)

router.get('/api/records', customerController.list);

router.post('/api/records', customerController.save);

router.delete('/api/records/:id', customerController.delete);

router.get('/api/records/:id', customerController.edit);

router.post('/api/records/:id', customerController.update);

module.exports = router;