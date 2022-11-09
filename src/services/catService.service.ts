import * as dotenv from 'dotenv';
dotenv.config();
import axios from 'axios';
const log = require('loglevel');
const apiLoglevel = process.env.LOG_LEVEL;
log.setLevel(apiLoglevel);

type Cat = {
  id: number;
  name: string;
  description: string;
  child_friendly?: number;
  dog_friendly?: number;
  stranger_friendly?: number;
};

const getBreedByPreference = async (categoryId: string) => {
  let params = `&${categoryId}=${process.env.PREFERRED_RATING}`;
  try {
    const url = `${process.env.API_BASE_URL}/breeds?limit=${process.env.LIMIT}${params}`;
    log.info('url', url);
    let { data } = await axios.get(url, {
      headers: {
        Accept: 'application/json'
      }
    });

    return (data = data.map((res: Cat) => {
      return {
        id: res.id,
        name: res.name,
        description: res.description
      };
    }));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      log.error('error message: ', error.message);
      return error.message;
    } else {
      log.error('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
};

const getCatBreedsByCategory = async (categoryId: string) => {
  try {
    log.info('categoryId', categoryId);
    const url = `${process.env.API_BASE_URL}/breeds`;
    log.info('url', url);
    const { data } = await axios.get(url, {
      headers: {
        Accept: 'application/json'
      }
    });

    let catBreedByCategory;
    if (categoryId === 'child_friendly') {
      catBreedByCategory = data.filter((cat: Cat) => cat.child_friendly === 5);
    } else if (categoryId === 'stranger_friendly') {
      catBreedByCategory = data.filter((cat: Cat) => cat.stranger_friendly === 5);
    } else if (categoryId === 'dog_friendly') {
      catBreedByCategory = data.filter((cat: Cat) => cat.dog_friendly === 5);
    }

    catBreedByCategory = catBreedByCategory.map((res: Cat) => {
      return {
        id: res.id,
        name: res.name,
        description: res.description,
        child_friendly: res.child_friendly,
        stranger_friendly: res.stranger_friendly,
        dog_friendly: res.dog_friendly
      };
    });
    // Split the breeds array by limit (5 currently can change in .env)
    return catBreedByCategory.slice(0, process.env.LIMIT);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      log.error('error message: ', error.message);
      return error.message;
    } else {
      log.error('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
};

module.exports = {
  getBreedByPreference,
  getCatBreedsByCategory
};
