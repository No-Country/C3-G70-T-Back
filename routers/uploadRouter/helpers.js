import supertest from 'supertest';
import app from '../../server/app';

export const api = supertest(app);


// upload images local
export const uploadFileHandler = async (file) => {

  const bodyFormData = new FormData();
  bodyFormData.append('imagen', file);

  return bodyFormData
};