import { config as configDotEnv } from 'dotenv';
import * as envalid from 'envalid';

configDotEnv();

const { port } = envalid;
const env = envalid.cleanEnv(process.env, {
    PORT: port({ default: 8000, desc: 'Application port' }),
});

export default env;
