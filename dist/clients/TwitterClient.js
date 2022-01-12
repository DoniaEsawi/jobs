"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.TwitterClient = void 0;

var _twitterApiV = require("twitter-api-v2");

var _config = require("./config.js");

class TwitterClient {
  constructor(twitter = _twitterApiV.TwitterApi, config = _config.twitterConfig) {
    console.log(config);
    this.twitter = new _twitterApiV.TwitterApi(config);
  } // https://github.com/PLhery/node-twitter-api-v2/blob/master/doc/v2.md#Createatweet


  tweet(statusOrPayload, payload) {
    return this.twitter.v2.tweet(statusOrPayload, payload);
  }

}

exports.TwitterClient = TwitterClient;

var _default = new TwitterClient();

exports.default = _default;