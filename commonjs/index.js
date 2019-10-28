'use strict'
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var consent_manager_builder_1 = __importDefault(require('./consent-manager-builder'))
var consent_manager_1 = __importDefault(require('./consent-manager'))
var container_1 = require('./consent-manager/container')
exports.openConsentManager = container_1.openDialog
var preferences_1 = require('./consent-manager-builder/preferences')
exports.loadPreferences = preferences_1.loadPreferences
exports.savePreferences = preferences_1.savePreferences
exports.onPreferencesSaved = preferences_1.onPreferencesSaved
exports.ConsentManagerBuilder = consent_manager_builder_1.default
exports.ConsentManager = consent_manager_1.default
function doNotTrack() {
  var nav = navigator
  var doNotTrackValue = nav.doNotTrack || window.doNotTrack || nav.msDoNotTrack
  // Normalise Firefox < 32
  // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/doNotTrack
  if (doNotTrackValue === 'yes') {
    doNotTrackValue = '1'
  } else if (doNotTrackValue === 'no') {
    doNotTrackValue = '0'
  }
  if (doNotTrackValue === '1') {
    return true
  }
  if (doNotTrackValue === '0') {
    return false
  }
  return null
}
exports.doNotTrack = doNotTrack
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxzRkFBMkM7QUFDM0Msc0VBQWtDO0FBRWxDLHlEQUE4RTtBQUFyRSx5Q0FBQSxVQUFVLENBQXNCO0FBQ3pDLHFFQUk4QztBQUg1Qyx3Q0FBQSxlQUFlLENBQUE7QUFDZix3Q0FBQSxlQUFlLENBQUE7QUFDZiwyQ0FBQSxrQkFBa0IsQ0FBQTtBQUdQLFFBQUEscUJBQXFCLEdBQUcsaUNBQUcsQ0FBQTtBQUMzQixRQUFBLGNBQWMsR0FBRyx5QkFBRSxDQUFBO0FBTWhDLFNBQWdCLFVBQVU7SUFDeEIsSUFBTSxHQUFHLEdBQUcsU0FBZ0IsQ0FBQTtJQUU1QixJQUFJLGVBQWUsR0FBRyxHQUFHLENBQUMsVUFBVSxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksR0FBRyxDQUFDLFlBQVksQ0FBQTtJQUU3RSx5QkFBeUI7SUFDekIsd0VBQXdFO0lBQ3hFLElBQUksZUFBZSxLQUFLLEtBQUssRUFBRTtRQUM3QixlQUFlLEdBQUcsR0FBRyxDQUFBO0tBQ3RCO1NBQU0sSUFBSSxlQUFlLEtBQUssSUFBSSxFQUFFO1FBQ25DLGVBQWUsR0FBRyxHQUFHLENBQUE7S0FDdEI7SUFFRCxJQUFJLGVBQWUsS0FBSyxHQUFHLEVBQUU7UUFDM0IsT0FBTyxJQUFJLENBQUE7S0FDWjtJQUNELElBQUksZUFBZSxLQUFLLEdBQUcsRUFBRTtRQUMzQixPQUFPLEtBQUssQ0FBQTtLQUNiO0lBRUQsT0FBTyxJQUFJLENBQUE7QUFDYixDQUFDO0FBckJELGdDQXFCQyJ9
