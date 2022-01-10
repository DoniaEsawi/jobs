import { TwitterApi } from 'twitter-api-v2';
import { twitterConfig } from './config.js';

export class TwitterClient {

    constructor(twitter = TwitterApi, config = twitterConfig) {
        this.twitter = new TwitterApi(config);
    }

    // https://github.com/PLhery/node-twitter-api-v2/blob/master/doc/v2.md#Createatweet
    tweet(statusOrPayload, payload) {
        return this.twitter.v2.tweet(statusOrPayload, payload);
    }
}

export default new TwitterClient();
