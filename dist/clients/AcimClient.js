"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const acimWorkbook = require('../data/wb_lessons.json'); // acimWorkbook = [{
//   "slug": "lesson-1",
//   "title": "Nothing I see in this room (on this street, from this window, in this place) means anything.",
//   "section_type": "lesson",
//   "number": "1",
//   "url": "https://acim.house/lesson-1/",
//   "sort_order": 1
// }, ...]


class AcimClient {
  constructor() {
    this.workbook = acimWorkbook;
  }

  getLessonByNumber(num) {
    return this._lessonsOnly().find(x => x.number == `${num}`);
  }

  getRandomLesson() {
    const lessonNumber = Math.ceil(Math.random() * this._lessonsOnly().length);
    return this.lessonByNumber(lessonNumber);
  }

  _lessonsOnly() {
    return this.workbook.filter(x => x.section_type === 'lesson');
  }

}

var _default = new AcimClient();

exports.default = _default;