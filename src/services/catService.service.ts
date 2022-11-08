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
  child_friendly: string;
  dog_friendly: string;
  stranger_friendly: string;
};

const getBreedByPreference = async (
  child_friendly: boolean,
  dog_friendly: boolean,
  stranger_friendly: boolean
) => {
  let params = '';
  if (child_friendly) {
    params = `&child_friendly=${process.env.CHILD_FRIENDlY}`;
  } else if (dog_friendly) {
    params = `&dog_friendly=${process.env.DOG_FRIENDlY}`;
  } else if (stranger_friendly) {
    params = `&stranger_friendly=${process.env.STRANGER_FRIENDlY}`;
  } else {
    params = `&child_friendly=${process.env.CHILD_FRIENDlY}&dog_friendly=${process.env.DOG_FRIENDlY}&stranger_friendly=${process.env.STRANGER_FRIENDlY}`;
  }

  try {
    const url = `${process.env.API_BASE_URL}/breeds?limit=${process.env.LIMIT}${params}`;
    log.info('url', url);
    let { data } = await axios.get(url, {
      headers: {
        Accept: 'application/json'
      }
    });

    return data = data.map((res: Cat) => {
      return {
        id: res.id,
        name: res.name,
        description: res.description,
        child_friendly: res.child_friendly,
        stranger_friendly: res.stranger_friendly,
        dog_friendly: res.dog_friendly
      };
    });
    
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
  getBreedByPreference
};
