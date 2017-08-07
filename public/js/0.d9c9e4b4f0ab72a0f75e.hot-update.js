webpackHotUpdate(0,{

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(14);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(59);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  FindByLocation: {\n    displayName: 'FindByLocation'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Landing_page/auto_complete_search.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Landing_page/auto_complete_search.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar FindByLocation = _wrapComponent('FindByLocation')(function (_get__$Component) {\n  _inherits(FindByLocation, _get__$Component);\n\n  function FindByLocation() {\n    _classCallCheck(this, FindByLocation);\n\n    return _possibleConstructorReturn(this, (FindByLocation.__proto__ || Object.getPrototypeOf(FindByLocation)).apply(this, arguments));\n  }\n\n  _createClass(FindByLocation, [{\n    key: 'componentWIllUpdate',\n    value: function componentWIllUpdate() {\n      this.gmap = this.props.map;\n      console.log(this.gmap);\n    }\n  }, {\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var searchLocation = document.getElementById('searchLocation');\n      var options = {\n        types: ['address']\n      };\n      var autoComplete = new google.maps.places.Autocomplete(searchLocation, options);\n      // console.log(\"YUP\");\n      this.listeners(autoComplete);\n    }\n    //bonus: attempt to get browser history\n\n  }, {\n    key: 'listeners',\n    value: function listeners(autoComplete) {\n      var self = this;\n      autoComplete.addListener('place_changed', function () {\n        console.log(\"YUPppp\");\n        var place = autoComplete.getPlace();\n        console.log(place.geometry.location.lat);\n        autoComplete.bindTo('bounds', self.gmap);\n        return place;\n        //return address of place here, use this for additional api calls\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement(\n          'h2',\n          null,\n          'YOOOOO13O'\n        ),\n        _react3.default.createElement('div', { id: 'map', className: 'map' }),\n        _react3.default.createElement('input', { id: 'searchLocation', placeholder: 'Enter your address' })\n      );\n    }\n  }]);\n\n  return FindByLocation;\n}(_get__('React').Component));\n\nexports.default = _get__('FindByLocation');\n\n/// in application.html.erb\n// <%= javascript_include_tag \"https://maps.googleapis.com/maps/api/js?key={APIKEY}\" %>\n\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'React':\n      return _react3.default;\n\n    case 'FindByLocation':\n      return FindByLocation;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof FindByLocation === 'undefined' ? 'undefined' : _typeof(FindByLocation);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(FindByLocation, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(FindByLocation)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzE4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xhbmRpbmdfcGFnZS9hdXRvX2NvbXBsZXRlX3NlYXJjaC5qcz9iMzNjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUmVhY3REb20gZnJvbSAncmVhY3QtZG9tJztcblxuY2xhc3MgRmluZEJ5TG9jYXRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnRXSWxsVXBkYXRlKCkge1xuICAgIHRoaXMuZ21hcCA9IHRoaXMucHJvcHMubWFwO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuZ21hcCk7XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHNlYXJjaExvY2F0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlYXJjaExvY2F0aW9uJyk7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICB0eXBlczogWydhZGRyZXNzJ11cbiAgICB9O1xuICAgIGxldCBhdXRvQ29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShzZWFyY2hMb2NhdGlvbiwgb3B0aW9ucyk7XG4gICAgLy8gY29uc29sZS5sb2coXCJZVVBcIik7XG4gICAgdGhpcy5saXN0ZW5lcnMoYXV0b0NvbXBsZXRlKTtcbiAgfVxuICAvL2JvbnVzOiBhdHRlbXB0IHRvIGdldCBicm93c2VyIGhpc3RvcnlcblxuICBsaXN0ZW5lcnMoYXV0b0NvbXBsZXRlKSB7XG4gICAgbGV0IHNlbGYgPSB0aGlzO1xuICAgIGF1dG9Db21wbGV0ZS5hZGRMaXN0ZW5lcigncGxhY2VfY2hhbmdlZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2coXCJZVVBwcHBcIik7XG4gICAgICBsZXQgcGxhY2UgPSBhdXRvQ29tcGxldGUuZ2V0UGxhY2UoKTtcbiAgICAgIGNvbnNvbGUubG9nKHBsYWNlLmdlb21ldHJ5LmxvY2F0aW9uLmxhdCk7XG4gICAgICBhdXRvQ29tcGxldGUuYmluZFRvKCdib3VuZHMnLCBzZWxmLmdtYXApO1xuICAgICAgcmV0dXJuIHBsYWNlO1xuICAgICAgLy9yZXR1cm4gYWRkcmVzcyBvZiBwbGFjZSBoZXJlLCB1c2UgdGhpcyBmb3IgYWRkaXRpb25hbCBhcGkgY2FsbHNcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4oXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDI+WU9PT09PMTNPPC9oMj5cbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiIGNsYXNzTmFtZT1cIm1hcFwiPjwvZGl2PlxuICAgICAgICA8aW5wdXQgaWQ9J3NlYXJjaExvY2F0aW9uJyBwbGFjZWhvbGRlcj0nRW50ZXIgeW91ciBhZGRyZXNzJz48L2lucHV0PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGaW5kQnlMb2NhdGlvbjtcblxuLy8vIGluIGFwcGxpY2F0aW9uLmh0bWwuZXJiXG4vLyA8JT0gamF2YXNjcmlwdF9pbmNsdWRlX3RhZyBcImh0dHBzOi8vbWFwcy5nb29nbGVhcGlzLmNvbS9tYXBzL2FwaS9qcz9rZXk9e0FQSUtFWX1cIiAlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL0xhbmRpbmdfcGFnZS9hdXRvX2NvbXBsZXRlX3NlYXJjaC5qcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQU1BOzs7O0FBcENBO0FBQ0E7OztBQXdDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFKQTtBQUNBOztBQURBOzs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })

})