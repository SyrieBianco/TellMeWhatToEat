webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(14);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(59);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  FindByLocation: {\n    displayName: 'FindByLocation'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Landing_page/auto_complete_search.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Landing_page/auto_complete_search.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar FindByLocation = _wrapComponent('FindByLocation')(function (_get__$Component) {\n  _inherits(FindByLocation, _get__$Component);\n\n  function FindByLocation() {\n    _classCallCheck(this, FindByLocation);\n\n    return _possibleConstructorReturn(this, (FindByLocation.__proto__ || Object.getPrototypeOf(FindByLocation)).apply(this, arguments));\n  }\n\n  _createClass(FindByLocation, [{\n    key: 'componentWillUpdate',\n    value: function componentWillUpdate(nextrops) {\n      this.props;\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var searchLocation = document.getElementById('searchLocation');\n      var options = {\n        types: ['address']\n      };\n      var autoComplete = new google.maps.places.Autocomplete(searchLocation, options);\n      // console.log(\"YUP\");\n      this.listeners(autoComplete);\n    }\n    //bonus: attempt to get browser history\n\n  }, {\n    key: 'listeners',\n    value: function listeners(autoComplete) {\n      var self = this;\n      autoComplete.addListener('place_changed', function () {\n        console.log(\"YUPppp\");\n        var place = autoComplete.getPlace();\n        console.log(place.geometry.location.lat);\n        // autoComplete.bindTo('bounds', this.refs.map);\n        return place;\n        //return address of place here, use this for additional api calls\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'h2',\n          null,\n          'YOOOOO13O'\n        ),\n        _react3.default.createElement('div', { id: 'map', className: 'map' }),\n        _react3.default.createElement('input', { id: 'searchLocation', placeholder: 'Enter your address' })\n      );\n    }\n  }]);\n\n  return FindByLocation;\n}(_get__('React').Component));\n\nexports.default = _get__('FindByLocation');\n\n/// in application.html.erb\n// <%= javascript_include_tag \"https://maps.googleapis.com/maps/api/js?key={APIKEY}\" %>\n\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'React':\n      return _react3.default;\n\n    case 'FindByLocation':\n      return FindByLocation;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof FindByLocation === 'undefined' ? 'undefined' : _typeof(FindByLocation);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(FindByLocation, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(FindByLocation)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xhbmRpbmdfcGFnZS9hdXRvX2NvbXBsZXRlX3NlYXJjaC5qcz9iMzNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgRmluZEJ5TG9jYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXaWxsVXBkYXRlKG5leHRyb3BzKSB7XG4gICAgdGhpcy5wcm9wc1xuICB9XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGxldCBzZWFyY2hMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hMb2NhdGlvbicpO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgdHlwZXM6IFsnYWRkcmVzcyddXG4gICAgfTtcbiAgICBsZXQgYXV0b0NvbXBsZXRlID0gbmV3IGdvb2dsZS5tYXBzLnBsYWNlcy5BdXRvY29tcGxldGUoc2VhcmNoTG9jYXRpb24sIG9wdGlvbnMpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiWVVQXCIpO1xuICAgIHRoaXMubGlzdGVuZXJzKGF1dG9Db21wbGV0ZSk7XG4gIH1cbiAgLy9ib251czogYXR0ZW1wdCB0byBnZXQgYnJvd3NlciBoaXN0b3J5XG5cbiAgbGlzdGVuZXJzKGF1dG9Db21wbGV0ZSkge1xuICAgIGxldCBzZWxmID0gdGhpcztcbiAgICBhdXRvQ29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiWVVQcHBwXCIpO1xuICAgICAgbGV0IHBsYWNlID0gYXV0b0NvbXBsZXRlLmdldFBsYWNlKCk7XG4gICAgICBjb25zb2xlLmxvZyhwbGFjZS5nZW9tZXRyeS5sb2NhdGlvbi5sYXQpO1xuICAgICAgLy8gYXV0b0NvbXBsZXRlLmJpbmRUbygnYm91bmRzJywgdGhpcy5yZWZzLm1hcCk7XG4gICAgICByZXR1cm4gcGxhY2U7XG4gICAgICAvL3JldHVybiBhZGRyZXNzIG9mIHBsYWNlIGhlcmUsIHVzZSB0aGlzIGZvciBhZGRpdGlvbmFsIGFwaSBjYWxsc1xuICAgIH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybihcbiAgICAgIDxkaXY+XG4gICAgICAgIDxoMj5ZT09PT08xM088L2gyPlxuICAgICAgICA8ZGl2IGlkPVwibWFwXCIgY2xhc3NOYW1lPVwibWFwXCI+PC9kaXY+XG4gICAgICAgIDxpbnB1dCBpZD0nc2VhcmNoTG9jYXRpb24nIHBsYWNlaG9sZGVyPSdFbnRlciB5b3VyIGFkZHJlc3MnPjwvaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZpbmRCeUxvY2F0aW9uO1xuXG4vLy8gaW4gYXBwbGljYXRpb24uaHRtbC5lcmJcbi8vIDwlPSBqYXZhc2NyaXB0X2luY2x1ZGVfdGFnIFwiaHR0cHM6Ly9tYXBzLmdvb2dsZWFwaXMuY29tL21hcHMvYXBpL2pzP2tleT17QVBJS0VZfVwiICU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvTGFuZGluZ19wYWdlL2F1dG9fY29tcGxldGVfc2VhcmNoLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBbkNBO0FBQ0E7OztBQXVDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKQTtBQUNBOztBQURBOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})