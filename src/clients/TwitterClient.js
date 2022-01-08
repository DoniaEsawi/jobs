import { Twitter } from 'twitter-node-client';
import { twitterConfig } from './config.js';

export class TwitterClient {

    constructor(twitter = Twitter, config = twitterConfig) {
        this.twitter = new twitter(config) || new Twitter(config);
    }

    postTweet(tweet) {
        this.twitter.postTweet({ status: tweet }, this._error, this._success);
    }

    _success(data) {
        console.log(data);
    }

    _error(err) {
        console.error(`ERROR: ${JSON.stringify(err)}`);
    }
}

export default new TwitterClient();
