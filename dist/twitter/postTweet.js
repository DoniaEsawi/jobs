"use strict";

var _TwitterClient = _interopRequireDefault(require("../clients/TwitterClient"));

var _ContentClient = _interopRequireDefault(require("../clients/ContentClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function runJob() {
  console.log(`Beginning job PostTweet: ${new Date()}`);
  const response = await _ContentClient.default.getRandomQuote();
  const quote = response.content;
  console.log(`About to tweet "${quote}"`);
  await _TwitterClient.default.postTweet(`${quote} #RightAction`);
  console.log(`Finished job PostTweet: ${new Date()}`);
}

runJob();