'use strict'
var __assign =
  (this && this.__assign) ||
  function() {
    __assign =
      Object.assign ||
      function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i]
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p]
        }
        return t
      }
    return __assign.apply(this, arguments)
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
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
var react_1 = __importDefault(require('react'))
var react_dom_1 = __importDefault(require('react-dom'))
var in_eu_1 = __importDefault(require('@segment/in-eu'))
exports.inEU = in_eu_1.default
var _1 = require('.')
exports.openConsentManager = _1.openConsentManager
exports.doNotTrack = _1.doNotTrack
var preferences = __importStar(require('./consent-manager-builder/preferences'))
exports.preferences = preferences
exports.version = process.env.VERSION
var props = {}
var containerRef
var localWindow = window
if (localWindow.consentManagerConfig && typeof localWindow.consentManagerConfig === 'function') {
  props = localWindow.consentManagerConfig({
    React: react_1.default,
    version: exports.version,
    openConsentManager: _1.openConsentManager,
    doNotTrack: _1.doNotTrack,
    inEU: in_eu_1.default,
    preferences: preferences
  })
  containerRef = props.container
} else {
  throw new Error('window.consentManagerConfig should be a function')
}
if (!containerRef) {
  throw new Error('ConsentManager: container is required')
}
if (!props.writeKey) {
  throw new Error('ConsentManager: writeKey is required')
}
if (!props.bannerContent) {
  throw new Error('ConsentManager: bannerContent is required')
}
if (!props.preferencesDialogContent) {
  throw new Error('ConsentManager: preferencesDialogContent is required')
}
if (!props.cancelDialogContent) {
  throw new Error('ConsentManager: cancelDialogContent is required')
}
if (typeof props.implyConsentOnInteraction === 'string') {
  props.implyConsentOnInteraction = props.implyConsentOnInteraction === 'true'
}
if (props.closeBehavior !== undefined && typeof props.closeBehavior === 'string') {
  var options = [
    'accept' /* ACCEPT */
      .toString(),
    'deny' /* DENY */
      .toString(),
    'dismiss' /* DISMISS */
      .toString()
  ]
  if (!options.includes(props.closeBehavior)) {
    throw new Error('ConsentManager: closeBehavior should be one of ' + options)
  }
}
var container = document.querySelector(containerRef)
if (!container) {
  throw new Error('ConsentManager: container not found')
}
react_dom_1.default.render(
  react_1.default.createElement(_1.ConsentManager, __assign({}, props)),
  container
)
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmRhbG9uZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9zdGFuZGFsb25lLnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUF5QjtBQUN6Qix3REFBZ0M7QUFDaEMseURBQWlDO0FBT1EsZUFQbEMsZUFBSSxDQU9rQztBQU43QyxzQkFBa0U7QUFNekQsNkJBTmdCLHFCQUFrQixDQU1oQjtBQUFFLHFCQU5nQixhQUFVLENBTWhCO0FBSHZDLGlGQUFvRTtBQUdyQixrQ0FBVztBQUQ3QyxRQUFBLE9BQU8sR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQTtBQUcxQyxJQUFJLEtBQUssR0FBaUMsRUFBRSxDQUFBO0FBQzVDLElBQUksWUFBZ0MsQ0FBQTtBQUVwQyxJQUFNLFdBQVcsR0FBRyxNQUF3QyxDQUFBO0FBRTVELElBQUksV0FBVyxDQUFDLG9CQUFvQixJQUFJLE9BQU8sV0FBVyxDQUFDLG9CQUFvQixLQUFLLFVBQVUsRUFBRTtJQUM5RixLQUFLLEdBQUcsV0FBVyxDQUFDLG9CQUFvQixDQUFDO1FBQ3ZDLEtBQUssaUJBQUE7UUFDTCxPQUFPLGlCQUFBO1FBQ1Asa0JBQWtCLHVCQUFBO1FBQ2xCLFVBQVUsZUFBQTtRQUNWLElBQUksaUJBQUE7UUFDSixXQUFXLGFBQUE7S0FDWixDQUFDLENBQUE7SUFDRixZQUFZLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQTtDQUMvQjtLQUFNO0lBQ0wsTUFBTSxJQUFJLEtBQUssQ0FBQyxrREFBa0QsQ0FBQyxDQUFBO0NBQ3BFO0FBRUQsSUFBSSxDQUFDLFlBQVksRUFBRTtJQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUE7Q0FDekQ7QUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRTtJQUNuQixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUE7Q0FDeEQ7QUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRTtJQUN4QixNQUFNLElBQUksS0FBSyxDQUFDLDJDQUEyQyxDQUFDLENBQUE7Q0FDN0Q7QUFFRCxJQUFJLENBQUMsS0FBSyxDQUFDLHdCQUF3QixFQUFFO0lBQ25DLE1BQU0sSUFBSSxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQTtDQUN4RTtBQUVELElBQUksQ0FBQyxLQUFLLENBQUMsbUJBQW1CLEVBQUU7SUFDOUIsTUFBTSxJQUFJLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFBO0NBQ25FO0FBRUQsSUFBSSxPQUFPLEtBQUssQ0FBQyx5QkFBeUIsS0FBSyxRQUFRLEVBQUU7SUFDdkQsS0FBSyxDQUFDLHlCQUF5QixHQUFHLEtBQUssQ0FBQyx5QkFBeUIsS0FBSyxNQUFNLENBQUE7Q0FDN0U7QUFFRCxJQUFJLEtBQUssQ0FBQyxhQUFhLEtBQUssU0FBUyxJQUFJLE9BQU8sS0FBSyxDQUFDLGFBQWEsS0FBSyxRQUFRLEVBQUU7SUFDaEYsSUFBTSxPQUFPLEdBQUc7UUFDZCxzQkFBcUIsUUFBUSxFQUFFO1FBQy9CLGtCQUFtQixRQUFRLEVBQUU7UUFDN0Isd0JBQXNCLFFBQVEsRUFBRTtLQUNqQyxDQUFBO0lBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1FBQzFDLE1BQU0sSUFBSSxLQUFLLENBQUMsb0RBQWtELE9BQVMsQ0FBQyxDQUFBO0tBQzdFO0NBQ0Y7QUFFRCxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFBO0FBQ3RELElBQUksQ0FBQyxTQUFTLEVBQUU7SUFDZCxNQUFNLElBQUksS0FBSyxDQUFDLHFDQUFxQyxDQUFDLENBQUE7Q0FDdkQ7QUFFRCxtQkFBUSxDQUFDLE1BQU0sQ0FBQyw4QkFBQyxpQkFBYyxlQUFNLEtBQTZCLEVBQUksRUFBRSxTQUFTLENBQUMsQ0FBQSJ9
