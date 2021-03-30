import { config as configDotEnv } from 'dotenv';
import * as envalid from 'envalid';

configDotEnv();

const { port, url } = envalid;
const env = envalid.cleanEnv(process.env, {
    PORT: port({ default: 8000, desc: 'Application port' }),
    MONGO_URL: url({ default: 'mongodb://localhost:27017/everydayer' }),
});

export default env;
