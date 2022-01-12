"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.twitterConfig = void 0;

const path = require('path');

require('dotenv').load({
  path: path.resolve(__dirname, '../../.env')
});

const twitterConfig = {
  appKey: process.env.TWITTER_API_KEY,
  appSecret: process.env.TWITTER_API_KEY_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET
};
exports.twitterConfig = twitterConfig;