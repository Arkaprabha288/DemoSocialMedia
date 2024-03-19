import crypto from 'crypto';
import fs from 'fs'

/**
 * create the jwt secrect & import it on .env file
 */
const secret = crypto.randomBytes(64).toString('hex');
console.log(secret);
fs.appendFileSync('.env', `\nJWT_SECRET=${secret}`);

