'use strict'
var __extends =
  (this && this.__extends) ||
  (function() {
    var extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b
          }) ||
        function(d, b) {
          for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]
        }
      return extendStatics(d, b)
    }
    return function(d, b) {
      extendStatics(d, b)
      function __() {
        this.constructor = d
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __())
    }
  })()
var __importStar =
  (this && this.__importStar) ||
  function(mod) {
    if (mod && mod.__esModule) return mod
    var result = {}
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k]
    result['default'] = mod
    return result
  }
var __importDefault =
  (this && this.__importDefault) ||
  function(mod) {
    return mod && mod.__esModule ? mod : { default: mod }
  }
Object.defineProperty(exports, '__esModule', { value: true })
var react_1 = __importStar(require('react'))
var consent_manager_builder_1 = __importDefault(require('../consent-manager-builder'))
var container_1 = __importDefault(require('./container'))
var categories_1 = require('./categories')
var zeroValuePreferences = {
  marketingAndAnalytics: null,
  advertising: null,
  functional: null
}
var ConsentManager = /** @class */ (function(_super) {
  __extends(ConsentManager, _super)
  function ConsentManager() {
    var _this = (_super !== null && _super.apply(this, arguments)) || this
    _this.handleMapCustomPreferences = function(destinations, preferences) {
      var destinationPreferences = {}
      var customPreferences = {}
      // Default unset preferences to true (for implicit consent)
      for (var _i = 0, _a = Object.keys(preferences); _i < _a.length; _i++) {
        var preferenceName = _a[_i]
        var value = preferences[preferenceName]
        if (typeof value === 'boolean') {
          customPreferences[preferenceName] = value
        } else {
          customPreferences[preferenceName] = true
        }
      }
      var customPrefs = customPreferences
      var _loop_1 = function(destination) {
        if (
          categories_1.ADVERTISING_CATEGORIES.find(function(c) {
            return c === destination.category
          })
        ) {
          destinationPreferences[destination.id] = customPrefs.advertising
        } else if (
          categories_1.FUNCTIONAL_CATEGORIES.find(function(c) {
            return c === destination.category
          })
        ) {
          destinationPreferences[destination.id] = customPrefs.functional
        } else {
          // Fallback to marketing
          destinationPreferences[destination.id] = customPrefs.marketingAndAnalytics
        }
      }
      for (var _b = 0, destinations_1 = destinations; _b < destinations_1.length; _b++) {
        var destination = destinations_1[_b]
        _loop_1(destination)
      }
      return {
        destinationPreferences: destinationPreferences,
        customPreferences: customPreferences
      }
    }
    return _this
  }
  ConsentManager.prototype.render = function() {
    var _this = this
    var _a = this.props,
      writeKey = _a.writeKey,
      otherWriteKeys = _a.otherWriteKeys,
      shouldRequireConsent = _a.shouldRequireConsent,
      implyConsentOnInteraction = _a.implyConsentOnInteraction,
      cookieDomain = _a.cookieDomain,
      bannerContent = _a.bannerContent,
      bannerSubContent = _a.bannerSubContent,
      bannerTextColor = _a.bannerTextColor,
      bannerBackgroundColor = _a.bannerBackgroundColor,
      preferencesDialogTitle = _a.preferencesDialogTitle,
      preferencesDialogContent = _a.preferencesDialogContent,
      cancelDialogTitle = _a.cancelDialogTitle,
      cancelDialogContent = _a.cancelDialogContent,
      initialPreferences = _a.initialPreferences,
      onError = _a.onError,
      onConsent = _a.onConsent
    return react_1.default.createElement(
      consent_manager_builder_1.default,
      {
        onError: onError,
        onConsent: onConsent,
        writeKey: writeKey,
        otherWriteKeys: otherWriteKeys,
        shouldRequireConsent: shouldRequireConsent,
        cookieDomain: cookieDomain,
        initialPreferences: initialPreferences || zeroValuePreferences,
        mapCustomPreferences: this.handleMapCustomPreferences
      },
      function(_a) {
        var destinations = _a.destinations,
          newDestinations = _a.newDestinations,
          preferences = _a.preferences,
          isConsentRequired = _a.isConsentRequired,
          setPreferences = _a.setPreferences,
          resetPreferences = _a.resetPreferences,
          saveConsent = _a.saveConsent
        return react_1.default.createElement(container_1.default, {
          destinations: destinations,
          newDestinations: newDestinations,
          preferences: preferences,
          isConsentRequired: isConsentRequired,
          setPreferences: setPreferences,
          resetPreferences: resetPreferences,
          saveConsent: saveConsent,
          closeBehavior: _this.props.closeBehavior,
          implyConsentOnInteraction:
            implyConsentOnInteraction || ConsentManager.defaultProps.implyConsentOnInteraction,
          bannerContent: bannerContent,
          bannerSubContent: bannerSubContent,
          bannerTextColor: bannerTextColor || ConsentManager.defaultProps.bannerTextColor,
          bannerBackgroundColor:
            bannerBackgroundColor || ConsentManager.defaultProps.bannerBackgroundColor,
          preferencesDialogTitle: preferencesDialogTitle,
          preferencesDialogContent: preferencesDialogContent,
          cancelDialogTitle: cancelDialogTitle,
          cancelDialogContent: cancelDialogContent
        })
      }
    )
  }
  ConsentManager.displayName = 'ConsentManager'
  ConsentManager.defaultProps = {
    otherWriteKeys: [],
    shouldRequireConsent: function() {
      return true
    },
    implyConsentOnInteraction: false,
    onError: undefined,
    cookieDomain: undefined,
    bannerTextColor: '#fff',
    bannerSubContent: 'You can change your preferences at any time.',
    bannerBackgroundColor: '#1f4160',
    preferencesDialogTitle: 'Website Data Collection Preferences',
    cancelDialogTitle: 'Are you sure you want to cancel?'
  }
  return ConsentManager
})(react_1.PureComponent)
exports.default = ConsentManager
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29uc2VudC1tYW5hZ2VyL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTRDO0FBQzVDLHVGQUE4RDtBQUM5RCwwREFBbUM7QUFDbkMsMkNBQTRFO0FBRzVFLElBQU0sb0JBQW9CLEdBQXdCO0lBQ2hELHFCQUFxQixFQUFFLElBQUk7SUFDM0IsV0FBVyxFQUFFLElBQUk7SUFDakIsVUFBVSxFQUFFLElBQUk7Q0FDakIsQ0FBQTtBQUVEO0lBQTRDLGtDQUFzQztJQUFsRjtRQUFBLHFFQW1IQztRQTdCQyxnQ0FBMEIsR0FBRyxVQUFDLFlBQTJCLEVBQUUsV0FBZ0M7WUFDekYsSUFBTSxzQkFBc0IsR0FBRyxFQUFFLENBQUE7WUFDakMsSUFBTSxpQkFBaUIsR0FBRyxFQUFFLENBQUE7WUFFNUIsMkRBQTJEO1lBQzNELEtBQTZCLFVBQXdCLEVBQXhCLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBeEIsY0FBd0IsRUFBeEIsSUFBd0IsRUFBRTtnQkFBbEQsSUFBTSxjQUFjLFNBQUE7Z0JBQ3ZCLElBQU0sS0FBSyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUMsQ0FBQTtnQkFDekMsSUFBSSxPQUFPLEtBQUssS0FBSyxTQUFTLEVBQUU7b0JBQzlCLGlCQUFpQixDQUFDLGNBQWMsQ0FBQyxHQUFHLEtBQUssQ0FBQTtpQkFDMUM7cUJBQU07b0JBQ0wsaUJBQWlCLENBQUMsY0FBYyxDQUFDLEdBQUcsSUFBSSxDQUFBO2lCQUN6QzthQUNGO1lBRUQsSUFBTSxXQUFXLEdBQUcsaUJBQXdDLENBQUE7b0NBRWpELFdBQVc7Z0JBQ3BCLElBQUksbUNBQXNCLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxRQUFRLEVBQTFCLENBQTBCLENBQUMsRUFB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
