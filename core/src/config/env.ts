import { config as configDotEnv } from 'dotenv';
import * as envalid from 'envalid';

configDotEnv();

const { port, url, str } = envalid;
const env = envalid.cleanEnv(process.env, {
    PROJECT_NAME: str({ default: 'Everydayer', desc: 'Project name' }),
    PORT: port({ default: 8000, desc: 'Application port' }),
    MONGO_URL: url({
        default: 'mongodb://localhost:27017/everydayer',
        desc: 'Mongo database url',
    }),
    API_DOC_PATH: str({ default: 'api/docs', desc: 'Swagger docs path' }),
});

export default env;

export const Env = typeof env;
