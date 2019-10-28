'use strict'
var __awaiter =
  (this && this.__awaiter) ||
  function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function(resolve) {
            resolve(value)
          })
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value))
        } catch (e) {
          reject(e)
        }
      }
      function rejected(value) {
        try {
          step(generator['throw'](value))
        } catch (e) {
          reject(e)
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected)
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next())
    })
  }
var __generator =
  (this && this.__generator) ||
  function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
          if (t[0] & 1) throw t[1]
          return t[1]
        },
        trys: [],
        ops: []
      },
      f,
      y,
      t,
      g
    return (
      (g = { next: verb(0), throw: verb(1), return: verb(2) }),
      typeof Symbol === 'function' &&
        (g[Symbol.iterator] = function() {
          return this
        }),
      g
    )
    function verb(n) {
      return function(v) {
        return step([n, v])
      }
    }
    function step(op) {
      if (f) throw new TypeError('Generator is already executing.')
      while (_)
        try {
          if (
            ((f = 1),
            y &&
              (t =
                op[0] & 2
                  ? y['return']
                  : op[0]
                  ? y['throw'] || ((t = y['return']) && t.call(y), 0)
                  : y.next) &&
              !(t = t.call(y, op[1])).done)
          )
            return t
          if (((y = 0), t)) op = [op[0] & 2, t.value]
          switch (op[0]) {
            case 0:
            case 1:
              t = op
              break
            case 4:
              _.label++
              return { value: op[1], done: false }
            case 5:
              _.label++
              y = op[1]
              op = [0]
              continue
            case 7:
              op = _.ops.pop()
              _.trys.pop()
              continue
            default:
              if (
                !((t = _.trys), (t = t.length > 0 && t[t.length - 1])) &&
                (op[0] === 6 || op[0] === 2)
              ) {
                _ = 0
                continue
              }
              if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                _.label = op[1]
                break
              }
              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1]
                t = op
                break
              }
              if (t && _.label < t[2]) {
                _.label = t[2]
                _.ops.push(op)
                break
              }
              if (t[2]) _.ops.pop()
              _.trys.pop()
              continue
          }
          op = body.call(thisArg, _)
        } catch (e) {
          op = [6, e]
          y = 0
        } finally {
          f = t = 0
        }
      if (op[0] & 5) throw op[1]
      return { value: op[0] ? op[1] : void 0, done: true }
    }
  }
Object.defineProperty(exports, '__esModule', { value: true })
function conditionallyLoadAnalytics(_a) {
  var writeKey = _a.writeKey,
    destinations = _a.destinations,
    destinationPreferences = _a.destinationPreferences,
    isConsentRequired = _a.isConsentRequired,
    _b = _a.shouldReload,
    shouldReload = _b === void 0 ? true : _b,
    _c = _a.onConsent,
    onConsent = _c === void 0 ? function() {} : _c
  return __awaiter(this, void 0, void 0, function() {
    var wd, integrations, isAnythingEnabled, _i, destinations_1, destination, isEnabled
    return __generator(this, function(_d) {
      switch (_d.label) {
        case 0:
          wd = window
          integrations = { All: false, 'Segment.io': true }
          isAnythingEnabled = false
          if (!destinationPreferences) {
            if (isConsentRequired) {
              return [2 /*return*/]
            }
            // Load a.js normally when consent isn't required and there's no preferences
            if (!wd.analytics.initialized) {
              wd.analytics.load(writeKey)
            }
            return [2 /*return*/]
          }
          for (_i = 0, destinations_1 = destinations; _i < destinations_1.length; _i++) {
            destination = destinations_1[_i]
            isEnabled = Boolean(destinationPreferences[destination.id])
            if (isEnabled) {
              isAnythingEnabled = true
            }
            integrations[destination.id] = isEnabled
          }
          // Reload the page if the trackers have already been initialised so that
          // the user's new preferences can take affect
          if (wd.analytics && wd.analytics.initialized) {
            if (shouldReload) {
              window.location.reload()
            }
            return [2 /*return*/]
          }
          if (!isAnythingEnabled) return [3 /*break*/, 2]
          wd.analytics.load(writeKey, { integrations: integrations })
          return [4 /*yield*/, onConsent()]
        case 1:
          _d.sent()
          _d.label = 2
        case 2:
          return [2 /*return*/]
      }
    })
  })
}
exports.default = conditionallyLoadAnalytics
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl0aWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnNlbnQtbWFuYWdlci1idWlsZGVyL2FuYWx5dGljcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVdBLFNBQThCLDBCQUEwQixDQUFDLEVBT3ZDO1FBTmhCLHNCQUFRLEVBQ1IsOEJBQVksRUFDWixrREFBc0IsRUFDdEIsd0NBQWlCLEVBQ2pCLG9CQUFtQixFQUFuQix3Q0FBbUIsRUFDbkIsaUJBQW9CLEVBQXBCLGdEQUFvQjs7Ozs7O29CQUVkLEVBQUUsR0FBRyxNQUF1QixDQUFBO29CQUM1QixZQUFZLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsQ0FBQTtvQkFDbkQsaUJBQWlCLEdBQUcsS0FBSyxDQUFBO29CQUU3QixJQUFJLENBQUMsc0JBQXNCLEVBQUU7d0JBQzNCLElBQUksaUJBQWlCLEVBQUU7NEJBQ3JCLHNCQUFNO3lCQUNQO3dCQUVELDRFQUE0RTt3QkFDNUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFOzRCQUM3QixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTt5QkFDNUI7d0JBQ0Qsc0JBQU07cUJBQ1A7b0JBRUQsV0FBc0MsRUFBWiw2QkFBWSxFQUFaLDBCQUFZLEVBQVosSUFBWSxFQUFFO3dCQUE3QixXQUFXO3dCQUNkLFNBQVMsR0FBRyxPQUFPLENBQUMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUE7d0JBQ2pFLElBQUksU0FBUyxFQUFFOzRCQUNiLGlCQUFpQixHQUFHLElBQUksQ0FBQTt5QkFDekI7d0JBQ0QsWUFBWSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxTQUFTLENBQUE7cUJBQ3pDO29CQUVELHdFQUF3RTtvQkFDeEUsNkNBQTZDO29CQUM3QyxJQUFJLEVBQUUsQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7d0JBQzVDLElBQUksWUFBWSxFQUFFOzRCQUNoQixNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFBO3lCQUN6Qjt3QkFDRCxzQkFBTTtxQkFDUDt5QkFHRyxpQkFBaUIsRUFBakIsd0JBQWlCO29CQUNuQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxZQUFZLGNBQUEsRUFBRSxDQUFDLENBQUE7b0JBQzdDLHFCQUFNLFNBQVMsRUFBRSxFQUFBOztvQkFBakIsU0FBaUIsQ0FBQTs7Ozs7O0NBRXBCO0FBOUNELDZDQThDQyJ9
