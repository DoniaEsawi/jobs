const path = require('path');
require('dotenv').load({ path: path.resolve(__dirname, '../../.env') });

export const twitterConfig = {
    "consumerKey": process.env.TWITTER_CONSUMER_KEY,
    "consumerSecret": process.env.TWITTER_CONSUMER_SECRET,
    "accessToken": process.env.TWITTER_ACCESS_TOKEN,
    "accessTokenSecret": process.env.TWITTER_TOKEN_SECRET
};
