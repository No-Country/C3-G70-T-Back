import supertest from 'supertest';
import app from '../server/app';

export const api = supertest(app);



