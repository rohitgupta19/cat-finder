import { Request, Response } from 'express';
const catService = require('../services/catService.service');
const log = require('loglevel');
const apiLoglevel = process.env.LOG_LEVEL;
log.setLevel(apiLoglevel);

const getBreeds = async (req: Request, res: Response) => {
  log.info('getBreeds', req.query);
  const child_friendly =
    req.query.child_friendly && req.query.child_friendly === 'true' ? true : false;
  const dog_friendly = req.query.dog_friendly && req.query.dog_friendly === 'true' ? true : false;
  const stranger_friendly =
    req.query.stranger_friendly && req.query.stranger_friendly === 'true' ? true : false;
  res.send(await catService.getBreedByPreference(child_friendly, dog_friendly, stranger_friendly));
};

module.exports = {
  getBreeds
};
