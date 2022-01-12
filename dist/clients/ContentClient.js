"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _requestPromise = _interopRequireDefault(require("request-promise"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const CONTENT_URL = 'http://content.empyrehq.com';

class EmpyreContentClient {
  constructor(http = _requestPromise.default, baseUrl = CONTENT_URL) {
    this.http = http;
    this.baseUrl = baseUrl;
    this.options = {
      json: true
    };
  }

  getRandomQuote() {
    return this.http.get(`${this.baseUrl}/quotes/random`, this.options);
  }

}

var _default = new EmpyreContentClient(_requestPromise.default, process.env.CONTENT_URL);

exports.default = _default;