import { Request, Response } from 'express';
const catService = require('../services/catService.service');
const log = require('loglevel');
const apiLoglevel = process.env.LOG_LEVEL;
log.setLevel(apiLoglevel);

const getCatBreeds = async (req: Request, res: Response) => {
  log.info('req.query', req.query);
  const categoryId = req.query.id;
  const catListByPreference = await catService.getBreedByPreference(categoryId);
  res.send({ status: 'success', data: catListByPreference });
};

const getCatBreedsByCategory = async (req: Request, res: Response) => {
  log.info('req.query', req.query);
  const categoryId = req.query.id;
  const catBreedByCategory = await catService.getCatBreedsByCategory(categoryId);
  res.send({ status: 'success', data: catBreedByCategory });
};

module.exports = {
  getCatBreeds,
  getCatBreedsByCategory
};
