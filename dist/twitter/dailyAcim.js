"use strict";

var _dateFns = require("date-fns");

var _AcimClient = _interopRequireDefault(require("../clients/AcimClient"));

var _TwitterClient = _interopRequireDefault(require("../clients/TwitterClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function dailyAcim() {
  console.log(`Beginning job PostTweet: ${new Date()}`);
  let dayNumber = (0, _dateFns.getDayOfYear)(Date.now());

  if (dayNumber == 366) {
    dayNumber = 95;
  }

  const lesson = _AcimClient.default.getLessonByNumber(dayNumber);

  const tweet = `${lesson.title}\n#acim W-${lesson.number}`;
  const {
    data: createdTweet
  } = await _TwitterClient.default.tweet(tweet);
  console.log(`Just tweeted ${tweet}. Tweet ID: ${createdTweet.id}`);
}

dailyAcim();