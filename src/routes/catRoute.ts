import express from 'express';
const router = express.Router();
const catController = require('../controllers/catController.controller');

router.route('/list').get(catController.getCatBreeds);
router.route('/category').get(catController.getCatBreedsByCategory);

export default router;
