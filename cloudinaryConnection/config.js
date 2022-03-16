import { config } from 'dotenv';
config();

const {CLOUD_NAME,API_KEY,API_SECRET} = process.env


export const cloudConfig={
    cloud_name:CLOUD_NAME,
    api_key: API_KEY,
    api_secret: API_SECRET
}