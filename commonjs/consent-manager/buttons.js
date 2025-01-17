'use strict'
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function(cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw })
    } else {
      cooked.raw = raw
    }
    return cooked
  }
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_emotion_1 = __importStar(require('react-emotion'))
var baseStyles = react_emotion_1.css(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  height: 32px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 4px;\n  color: inherit;\n  font: inherit;\n  font-size: 12px;\n  line-height: 1;\n  cursor: pointer;\n  outline: none;\n  transition: box-shadow 80ms ease-in-out;\n'
      ],
      [
        '\n  height: 32px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 4px;\n  color: inherit;\n  font: inherit;\n  font-size: 12px;\n  line-height: 1;\n  cursor: pointer;\n  outline: none;\n  transition: box-shadow 80ms ease-in-out;\n'
      ]
    ))
)
exports.DefaultButton = react_emotion_1.default('button')(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  margin-right: 8px;\n  background-color: #fff;\n  background-image: linear-gradient(to top, rgba(67, 90, 111, 0.041), rgba(255, 255, 255, 0.041));\n  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.146), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.079);\n  &:hover {\n    background-image: linear-gradient(to top, rgba(67, 90, 111, 0.057), rgba(67, 90, 111, 0.025));\n    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.255),\n      inset 0 -1px 1px 0 rgba(67, 90, 111, 0.114);\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(1, 108, 209, 0.146), inset 0 0 0 1px rgba(67, 90, 111, 0.38),\n      inset 0 -1px 1px 0 rgba(67, 90, 111, 0.079);\n  }\n  &:active {\n    background: rgba(1, 108, 209, 0.079);\n    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.146),\n      inset 0 -1px 1px 0 rgba(67, 90, 111, 0.079);\n  }\n'
      ],
      [
        '\n  ',
        ';\n  margin-right: 8px;\n  background-color: #fff;\n  background-image: linear-gradient(to top, rgba(67, 90, 111, 0.041), rgba(255, 255, 255, 0.041));\n  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.146), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.079);\n  &:hover {\n    background-image: linear-gradient(to top, rgba(67, 90, 111, 0.057), rgba(67, 90, 111, 0.025));\n    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.255),\n      inset 0 -1px 1px 0 rgba(67, 90, 111, 0.114);\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(1, 108, 209, 0.146), inset 0 0 0 1px rgba(67, 90, 111, 0.38),\n      inset 0 -1px 1px 0 rgba(67, 90, 111, 0.079);\n  }\n  &:active {\n    background: rgba(1, 108, 209, 0.079);\n    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.146),\n      inset 0 -1px 1px 0 rgba(67, 90, 111, 0.079);\n  }\n'
      ]
    )),
  baseStyles
)
exports.GreenButton = react_emotion_1.default('button')(
  templateObject_3 ||
    (templateObject_3 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  background-color: #47b881;\n  background-image: linear-gradient(to top, #3faf77, #47b881);\n  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.204), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.204);\n  color: #fff;\n  &:hover {\n    background-image: linear-gradient(to top, #37a56d, #3faf77);\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(71, 184, 129, 0.477), inset 0 0 0 1px rgba(71, 184, 129, 0.204),\n      inset 0 -1px 1px 0 rgba(71, 184, 129, 0.204);\n  }\n  &:active {\n    background-image: linear-gradient(to top, #2d9760, #248953);\n    box-shadow: inset 0 0 0 1px rgba(71, 184, 129, 0.204),\n      inset 0 -1px 1px 0 rgba(71, 184, 129, 0.204);\n  }\n'
      ],
      [
        '\n  ',
        ';\n  background-color: #47b881;\n  background-image: linear-gradient(to top, #3faf77, #47b881);\n  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.204), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.204);\n  color: #fff;\n  &:hover {\n    background-image: linear-gradient(to top, #37a56d, #3faf77);\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(71, 184, 129, 0.477), inset 0 0 0 1px rgba(71, 184, 129, 0.204),\n      inset 0 -1px 1px 0 rgba(71, 184, 129, 0.204);\n  }\n  &:active {\n    background-image: linear-gradient(to top, #2d9760, #248953);\n    box-shadow: inset 0 0 0 1px rgba(71, 184, 129, 0.204),\n      inset 0 -1px 1px 0 rgba(71, 184, 129, 0.204);\n  }\n'
      ]
    )),
  baseStyles
)
exports.RedButton = react_emotion_1.default('button')(
  templateObject_4 ||
    (templateObject_4 = __makeTemplateObject(
      [
        '\n  ',
        ';\n  background-color: #f36331;\n  background-image: linear-gradient(to top, #f4541d, #f36331);\n  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.204), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.204);\n  color: #fff;\n  &:hover {\n    background-image: linear-gradient(to top, #f4450a, #f4541d);\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(243, 99, 49, 0.477), inset 0 0 0 1px rgba(243, 99, 49, 0.204),\n      inset 0 -1px 1px 0 rgba(243, 99, 49, 0.204);\n  }\n  &:active {\n    background-image: linear-gradient(to top, #dd3c06, #c63403);\n    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.204),\n      inset 0 -1px 1px 0 rgba(67, 90, 111, 0.204);\n  }\n'
      ],
      [
        '\n  ',
        ';\n  background-color: #f36331;\n  background-image: linear-gradient(to top, #f4541d, #f36331);\n  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.204), inset 0 -1px 1px 0 rgba(67, 90, 111, 0.204);\n  color: #fff;\n  &:hover {\n    background-image: linear-gradient(to top, #f4450a, #f4541d);\n  }\n  &:focus {\n    box-shadow: 0 0 0 3px rgba(243, 99, 49, 0.477), inset 0 0 0 1px rgba(243, 99, 49, 0.204),\n      inset 0 -1px 1px 0 rgba(243, 99, 49, 0.204);\n  }\n  &:active {\n    background-image: linear-gradient(to top, #dd3c06, #c63403);\n    box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.204),\n      inset 0 -1px 1px 0 rgba(67, 90, 111, 0.204);\n  }\n'
      ]
    )),
  baseStyles
)
var templateObject_1, templateObject_2, templateObject_3, templateObject_4
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnV0dG9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb25zZW50LW1hbmFnZXIvYnV0dG9ucy50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLDZEQUEyQztBQUUzQyxJQUFNLFVBQVUsR0FBRyxtQkFBRyxrVEFBQSwrT0FZckIsSUFBQSxDQUFBO0FBRVksUUFBQSxhQUFhLEdBQUcsdUJBQU0sQ0FBQyxRQUFRLENBQUMsaTRCQUFBLE1BQ3pDLEVBQVUsc3pCQW1CYixLQW5CRyxVQUFVLEVBbUJiO0FBRVksUUFBQSxXQUFXLEdBQUcsdUJBQU0sQ0FBQyxRQUFRLENBQUMsc3VCQUFBLE1BQ3ZDLEVBQVUsMnBCQWlCYixLQWpCRyxVQUFVLEVBaUJiO0FBRVksUUFBQSxTQUFTLEdBQUcsdUJBQU0sQ0FBQyxRQUFRLENBQUMsaXVCQUFBLE1BQ3JDLEVBQVUsc3BCQWlCYixLQWpCRyxVQUFVLEVBaUJiIn0=
