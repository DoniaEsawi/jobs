const path = require('path');
require('dotenv').load({ path: path.resolve(__dirname, '../.env') });

console.log('hello world', process.env.EMPYRE_ENV);
