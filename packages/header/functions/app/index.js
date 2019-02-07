"use strict";

var _react = _interopRequireWildcard(require("react"));

var _reactDom = require("react-dom");

var _exenv = _interopRequireDefault(require("exenv"));

var _Header = _interopRequireDefault(require("./Header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

if (_exenv.default.canUseDOM) {
  (0, _reactDom.hydrate)(_react.default.createElement(_Header.default, null), document.getElementById("header"));
}