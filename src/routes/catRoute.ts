import express from 'express';
const router = express.Router();
const catController = require('../controllers/catController.controller');

router.route('/list').get(catController.getBreeds);

export default router;
