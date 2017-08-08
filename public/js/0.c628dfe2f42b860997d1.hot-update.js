webpackHotUpdate(0,{

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(module) {'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.__RewireAPI__ = exports.__ResetDependency__ = exports.__set__ = exports.__Rewire__ = exports.__GetDependency__ = exports.__get__ = undefined;\n\nvar _redboxReact2 = __webpack_require__(14);\n\nvar _redboxReact3 = _interopRequireDefault(_redboxReact2);\n\nvar _reactTransformCatchErrors3 = __webpack_require__(12);\n\nvar _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);\n\nvar _react2 = __webpack_require__(3);\n\nvar _react3 = _interopRequireDefault(_react2);\n\nvar _reactTransformHmr3 = __webpack_require__(13);\n\nvar _reactTransformHmr4 = _interopRequireDefault(_reactTransformHmr3);\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _reactDom = __webpack_require__(66);\n\nvar _reactDom2 = _interopRequireDefault(_reactDom);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _components = {\n  ComboMapSearch: {\n    displayName: 'ComboMapSearch'\n  }\n};\n\nvar _reactTransformHmr2 = (0, _reactTransformHmr4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Landing_page/combo_map_search.js',\n  components: _components,\n  locals: [module],\n  imports: [_react3.default]\n});\n\nvar _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({\n  filename: '/Users/aaronmondshine/Desktop/Flex/TellMeWhatToEat/app/components/Landing_page/combo_map_search.js',\n  components: _components,\n  locals: [],\n  imports: [_react3.default, _redboxReact3.default]\n});\n\nfunction _wrapComponent(id) {\n  return function (Component) {\n    return _reactTransformHmr2(_reactTransformCatchErrors2(Component, id), id);\n  };\n}\n\nvar ComboMapSearch = _wrapComponent('ComboMapSearch')(function (_get__$Component) {\n  _inherits(ComboMapSearch, _get__$Component);\n\n  function ComboMapSearch(props) {\n    _classCallCheck(this, ComboMapSearch);\n\n    var _this = _possibleConstructorReturn(this, (ComboMapSearch.__proto__ || Object.getPrototypeOf(ComboMapSearch)).call(this, props));\n\n    _this.state = {\n      lng: null,\n      lat: null\n    };\n    return _this;\n  }\n\n  _createClass(ComboMapSearch, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var self = this;\n      navigator.geolocation.getCurrentPosition(function (position) {\n        self.setState({\n          lat: position.coords.latitude,\n          lng: position.coords.longitude });\n      }, function (error) {\n        return alert(error.message);\n      });\n\n      console.log(this.state);\n      var searchLocation = document.getElementById('searchLocation');\n      var options = {\n        types: ['address']\n      };\n\n      var autoComplete = new google.maps.places.Autocomplete(searchLocation, options);\n\n      var map = this.refs.map;\n      var mapOptions = {\n        center: { lat: 37.773972,\n          lng: -122.431297 },\n        zoom: 12\n      };\n      this.map = new google.maps.Map(map, mapOptions);\n\n      this.listeners(autoComplete, map);\n\n      this.listeners(autoComplete, map);\n    }\n  }, {\n    key: 'componenetWillMount',\n    value: function componenetWillMount() {}\n  }, {\n    key: 'componenetWillUpdate',\n    value: function componenetWillUpdate() {\n      console.log(\"helllo\");\n      console.log(this.state);\n    }\n    //\n    // getCurrentLocation() {\n    //   navigator.geolocation.getCurrentPosition((position)=>{\n    //     return {lat: position.coords.latitude, lng: position.coords.longitude};\n    //   });\n    // }\n\n  }, {\n    key: 'listeners',\n    value: function listeners(autoComplete, map) {\n      var self = this;\n\n      autoComplete.addListener('place_changed', function () {\n        console.log(self.state);\n        var place = autoComplete.getPlace();\n        var long = place.geometry.viewport[\"b\"][\"b\"];\n        var latt = place.geometry.viewport[\"f\"][\"b\"];\n        var pos = { lat: latt, lng: long };\n        console.log(long, latt);\n        var mapOptions = {\n          center: pos, // this is area 51\n          zoom: 14\n        };\n        //  autoComplete.bindTo('bounds', self.map);\n        //\n        var mapRerender = new google.maps.Map(map, mapOptions);\n        var marker = new google.maps.Marker({\n          position: pos,\n          map: mapRerender\n        });\n        self.map.setCenter(pos, 14);\n        // self.props.updateGeoLocation({\n        // lat: place.geometry.viewport[\"f\"][\"b\"],\n        // lng: place.geometry.viewport[\"b\"][\"b\"],\n        // address: place.formatted_address});\n        //\n        //\n        //\n        //\n\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return _react3.default.createElement(\n        'div',\n        null,\n        _react3.default.createElement('input', { id: 'searchLocation', placeholder: 'Enter your address' }),\n        _react3.default.createElement(\n          'div',\n          { id: 'map', className: 'map', ref: 'map' },\n          ' Map '\n        )\n      );\n    }\n  }]);\n\n  return ComboMapSearch;\n}(_get__('React').Component));\n\nexports.default = _get__('ComboMapSearch');\nvar _RewiredData__ = {};\nvar _RewireAPI__ = {};\n\n(function () {\n  function addPropertyToAPIObject(name, value) {\n    Object.defineProperty(_RewireAPI__, name, {\n      value: value,\n      enumerable: false,\n      configurable: true\n    });\n  }\n\n  addPropertyToAPIObject('__get__', _get__);\n  addPropertyToAPIObject('__GetDependency__', _get__);\n  addPropertyToAPIObject('__Rewire__', _set__);\n  addPropertyToAPIObject('__set__', _set__);\n  addPropertyToAPIObject('__reset__', _reset__);\n  addPropertyToAPIObject('__ResetDependency__', _reset__);\n  addPropertyToAPIObject('__with__', _with__);\n})();\n\nfunction _get__(variableName) {\n  return _RewiredData__ === undefined || _RewiredData__[variableName] === undefined ? _get_original__(variableName) : _RewiredData__[variableName];\n}\n\nfunction _get_original__(variableName) {\n  switch (variableName) {\n    case 'React':\n      return _react3.default;\n\n    case 'ComboMapSearch':\n      return ComboMapSearch;\n  }\n\n  return undefined;\n}\n\nfunction _assign__(variableName, value) {\n  if (_RewiredData__ === undefined || _RewiredData__[variableName] === undefined) {\n    return _set_original__(variableName, value);\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _set_original__(variableName, _value) {\n  switch (variableName) {}\n\n  return undefined;\n}\n\nfunction _update_operation__(operation, variableName, prefix) {\n  var oldValue = _get__(variableName);\n\n  var newValue = operation === '++' ? oldValue + 1 : oldValue - 1;\n\n  _assign__(variableName, newValue);\n\n  return prefix ? newValue : oldValue;\n}\n\nfunction _set__(variableName, value) {\n  if ((typeof variableName === 'undefined' ? 'undefined' : _typeof(variableName)) === 'object') {\n    Object.keys(variableName).forEach(function (name) {\n      _RewiredData__[name] = variableName[name];\n    });\n  } else {\n    return _RewiredData__[variableName] = value;\n  }\n}\n\nfunction _reset__(variableName) {\n  delete _RewiredData__[variableName];\n}\n\nfunction _with__(object) {\n  var rewiredVariableNames = Object.keys(object);\n  var previousValues = {};\n\n  function reset() {\n    rewiredVariableNames.forEach(function (variableName) {\n      _RewiredData__[variableName] = previousValues[variableName];\n    });\n  }\n\n  return function (callback) {\n    rewiredVariableNames.forEach(function (variableName) {\n      previousValues[variableName] = _RewiredData__[variableName];\n      _RewiredData__[variableName] = object[variableName];\n    });\n    var result = callback();\n\n    if (!!result && typeof result.then == 'function') {\n      result.then(reset).catch(reset);\n    } else {\n      reset();\n    }\n\n    return result;\n  };\n}\n\nvar _typeOfOriginalExport = typeof ComboMapSearch === 'undefined' ? 'undefined' : _typeof(ComboMapSearch);\n\nfunction addNonEnumerableProperty(name, value) {\n  Object.defineProperty(ComboMapSearch, name, {\n    value: value,\n    enumerable: false,\n    configurable: true\n  });\n}\n\nif ((_typeOfOriginalExport === 'object' || _typeOfOriginalExport === 'function') && Object.isExtensible(ComboMapSearch)) {\n  addNonEnumerableProperty('__get__', _get__);\n  addNonEnumerableProperty('__GetDependency__', _get__);\n  addNonEnumerableProperty('__Rewire__', _set__);\n  addNonEnumerableProperty('__set__', _set__);\n  addNonEnumerableProperty('__reset__', _reset__);\n  addNonEnumerableProperty('__ResetDependency__', _reset__);\n  addNonEnumerableProperty('__with__', _with__);\n  addNonEnumerableProperty('__RewireAPI__', _RewireAPI__);\n}\n\nexports.__get__ = _get__;\nexports.__GetDependency__ = _get__;\nexports.__Rewire__ = _set__;\nexports.__set__ = _set__;\nexports.__ResetDependency__ = _reset__;\nexports.__RewireAPI__ = _RewireAPI__;\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)(module)))//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMzUyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL0xhbmRpbmdfcGFnZS9jb21ib19tYXBfc2VhcmNoLmpzPzlmODciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuXG5jbGFzcyBDb21ib01hcFNlYXJjaCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKXtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxuZzogbnVsbCxcbiAgICAgIGxhdDogbnVsbFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihwb3NpdGlvbikge1xuICAgICAgc2VsZi5zZXRTdGF0ZSh7XG4gICAgICAgIGxhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxuICAgICAgICBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGV9KTtcbiAgICAgIH0sIChlcnJvcikgPT4gYWxlcnQoZXJyb3IubWVzc2FnZSkgKTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpO1xuICAgIGxldCBzZWFyY2hMb2NhdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hMb2NhdGlvbicpO1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgdHlwZXM6IFsnYWRkcmVzcyddXG4gICAgfTtcblxuICAgIGxldCBhdXRvQ29tcGxldGUgPSBuZXcgZ29vZ2xlLm1hcHMucGxhY2VzLkF1dG9jb21wbGV0ZShzZWFyY2hMb2NhdGlvbiwgb3B0aW9ucyk7XG5cbiAgICAgY29uc3QgbWFwID0gdGhpcy5yZWZzLm1hcDtcbiAgICAgY29uc3QgbWFwT3B0aW9ucyA9IHtcbiAgICAgICBjZW50ZXI6IHtsYXQ6IDM3Ljc3Mzk3MixcbiAgICAgICBsbmc6IC0xMjIuNDMxMjk3fSxcbiAgICAgICB6b29tOiAxMlxuICAgICB9O1xuICAgICB0aGlzLm1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAobWFwLCBtYXBPcHRpb25zKTtcblxuICAgICB0aGlzLmxpc3RlbmVycyhhdXRvQ29tcGxldGUsIG1hcCk7XG5cbiAgICAgdGhpcy5saXN0ZW5lcnMoYXV0b0NvbXBsZXRlLCBtYXApO1xuXG4gIH1cblxuICBjb21wb25lbmV0V2lsbE1vdW50KCkge1xuXG4gIH1cblxuICBjb21wb25lbmV0V2lsbFVwZGF0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcImhlbGxsb1wiKTtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcbiAgfVxuICAvL1xuICAvLyBnZXRDdXJyZW50TG9jYXRpb24oKSB7XG4gIC8vICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbigocG9zaXRpb24pPT57XG4gIC8vICAgICByZXR1cm4ge2xhdDogcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLCBsbmc6IHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGV9O1xuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgbGlzdGVuZXJzKGF1dG9Db21wbGV0ZSwgbWFwKXtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG5cbiAgICBhdXRvQ29tcGxldGUuYWRkTGlzdGVuZXIoJ3BsYWNlX2NoYW5nZWQnLCBmdW5jdGlvbigpIHtcbiAgICAgIGNvbnNvbGUubG9nKHNlbGYuc3RhdGUpO1xuICAgICAgbGV0IHBsYWNlID0gYXV0b0NvbXBsZXRlLmdldFBsYWNlKCk7XG4gICAgICBjb25zdCBsb25nID0gcGxhY2UuZ2VvbWV0cnkudmlld3BvcnRbXCJiXCJdW1wiYlwiXTtcbiAgICAgIGNvbnN0IGxhdHQgPSBwbGFjZS5nZW9tZXRyeS52aWV3cG9ydFtcImZcIl1bXCJiXCJdO1xuICAgICAgdmFyIHBvcyA9IHtsYXQ6IGxhdHQsIGxuZzogbG9uZ307XG4gICAgICBjb25zb2xlLmxvZyhsb25nLCBsYXR0KTtcbiAgICAgIGNvbnN0IG1hcE9wdGlvbnMgPSB7XG4gICAgICAgIGNlbnRlcjogcG9zLCAvLyB0aGlzIGlzIGFyZWEgNTFcbiAgICAgICAgem9vbTogMTRcbiAgICAgIH07XG4gICAgICAvLyAgYXV0b0NvbXBsZXRlLmJpbmRUbygnYm91bmRzJywgc2VsZi5tYXApO1xuICAgICAgLy9cbiAgICAgIGNvbnN0IG1hcFJlcmVuZGVyID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXAsIG1hcE9wdGlvbnMpO1xuICAgICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogcG9zLFxuICAgICAgICBtYXA6IG1hcFJlcmVuZGVyLFxuICAgICAgfSk7XG4gICAgICBzZWxmLm1hcC5zZXRDZW50ZXIocG9zLCAxNCk7XG4gICAgICAvLyBzZWxmLnByb3BzLnVwZGF0ZUdlb0xvY2F0aW9uKHtcbiAgICAgIC8vIGxhdDogcGxhY2UuZ2VvbWV0cnkudmlld3BvcnRbXCJmXCJdW1wiYlwiXSxcbiAgICAgIC8vIGxuZzogcGxhY2UuZ2VvbWV0cnkudmlld3BvcnRbXCJiXCJdW1wiYlwiXSxcbiAgICAgIC8vIGFkZHJlc3M6IHBsYWNlLmZvcm1hdHRlZF9hZGRyZXNzfSk7XG4gICAgICAvL1xuICAgICAgLy9cbiAgICAgIC8vXG4gICAgICAvL1xuXG5cbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGlucHV0IGlkPSdzZWFyY2hMb2NhdGlvbicgcGxhY2Vob2xkZXI9J0VudGVyIHlvdXIgYWRkcmVzcyc+PC9pbnB1dD5cbiAgICAgICAgPGRpdiBpZD1cIm1hcFwiIGNsYXNzTmFtZT1cIm1hcFwiIHJlZj1cIm1hcFwiPiBNYXAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICk7XG4gIH1cblxufVxuZXhwb3J0IGRlZmF1bHQgQ29tYm9NYXBTZWFyY2g7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvTGFuZGluZ19wYWdlL2NvbWJvX21hcF9zZWFyY2guanMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU1BO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQU1BOzs7O0FBakdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUdBO0FBQ0E7O0FBREE7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })

})