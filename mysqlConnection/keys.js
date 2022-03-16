import { config } from 'dotenv';
config();

const {
    HOST_DB_R,
    USER_DB_R,
    PASSWORD_DB_R,
    NAME_DB_R,
    HOST_DB,
    USER_DB,
    PASSWORD_DB,
    NAME_DB
} = process.env

export const databaseProduction = {
    host: HOST_DB_R,
    user: USER_DB_R,
    password: PASSWORD_DB_R,
    database: NAME_DB_R
};

export const databaseTest = {
    host: HOST_DB,
    user: USER_DB,
    password: PASSWORD_DB,
    database: NAME_DB
};
