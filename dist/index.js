(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["ReactViewportObserver"] = factory(require("react"));
	else
		root["ReactViewportObserver"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 42);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* unused harmony export getDocumentSize */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return getViewportSize; });
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return getScrollY; });
/* harmony export (binding) */ __webpack_require__.d(exports, "c", function() { return getScrollPercent; });
/* harmony export (binding) */ __webpack_require__.d(exports, "d", function() { return injectProps; });
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



var getDocumentSize = function getDocumentSize() {
  var body = document.body;
  var html = document.documentElement;
  return {
    width: Math.max(body.scrollWidth, body.offsetWidth, html.clientWidth, html.scrollWidth, html.offsetWidth),
    height: Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight)
  };
};

var getViewportSize = function getViewportSize() {
  return {
    width: window.innerWidth || 0,
    height: window.innerHeight || 0
  };
};

var getScrollY = function getScrollY() {
  return typeof document !== 'undefined' ? window.scrollY || document.documentElement.scrollTop || document.body.scrollTop : 0;
};

var getScrollPercent = function getScrollPercent() {
  return typeof document !== 'undefined' ? getScrollY() / (getDocumentSize().height - getViewportSize().height) * 100 : 0;
};

var injectProps = function injectProps(elementOrFunction, props) {
  if (typeof elementOrFunction === 'function') {
    return elementOrFunction(props);
  }
  return elementOrFunction ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(elementOrFunction), _extends({}, props)) : null;
};

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(24);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(23);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ },
/* 5 */
/***/ function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ViewportStore__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ViewportBroadcaster__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ViewportSubscriber__ = __webpack_require__(9);

/* harmony reexport (binding) */ __webpack_require__.d(exports, "ViewportStore", function() { return __WEBPACK_IMPORTED_MODULE_0__ViewportStore__["a"]; });


/* harmony reexport (binding) */ __webpack_require__.d(exports, "ViewportBroadcaster", function() { return __WEBPACK_IMPORTED_MODULE_1__ViewportBroadcaster__["a"]; });


/* harmony reexport (binding) */ __webpack_require__.d(exports, "ViewportSubscriber", function() { return __WEBPACK_IMPORTED_MODULE_2__ViewportSubscriber__["a"]; });


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var ViewportBroadcaster = function (_Component) {
  _inherits(ViewportBroadcaster, _Component);

  function ViewportBroadcaster() {
    _classCallCheck(this, ViewportBroadcaster);

    return _possibleConstructorReturn(this, (ViewportBroadcaster.__proto__ || Object.getPrototypeOf(ViewportBroadcaster)).apply(this, arguments));
  }

  _createClass(ViewportBroadcaster, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return { viewportStore: this.props.store };
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react__["Children"].only(this.props.children);
    }
  }]);

  return ViewportBroadcaster;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ViewportBroadcaster.childContextTypes = {
  viewportStore: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object
};

ViewportBroadcaster.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].element,
  store: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object
};

/* harmony default export */ exports["a"] = ViewportBroadcaster;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(2);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var ViewportStore = function () {
  function ViewportStore() {
    _classCallCheck(this, ViewportStore);

    this.subscriptions = [];

    var size = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getViewportSize */])();
    this.scrollY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getScrollY */])();
    this.scrollPercent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* getScrollPercent */])();
    this.width = size.width;
    this.height = size.height;

    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.update = this.update.bind(this);
    this.subscribe = this.subscribe.bind(this);
    this.unsubscribe = this.unsubscribe.bind(this);

    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleResize);
  }

  _createClass(ViewportStore, [{
    key: 'update',
    value: function update(state) {
      var keys = Object.keys(state);
      for (var i = 0; i < keys.length; i++) {
        this[keys[i]] = state[keys[i]];
      }
      this.subscriptions.forEach(function (f) {
        return f(state);
      });
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll() {
      this.update({
        scrollY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getScrollY */])(),
        scrollPercent: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* getScrollPercent */])()
      });
    }
  }, {
    key: 'handleResize',
    value: function handleResize() {
      var size = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getViewportSize */])();
      this.update({
        scrollY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getScrollY */])(),
        scrollPercent: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* getScrollPercent */])(),
        width: size.width,
        height: size.height
      });
    }
  }, {
    key: 'subscribe',
    value: function subscribe(f) {
      var _this = this;

      this.subscriptions.push(f);
      var size = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* getViewportSize */])();
      f({
        scrollY: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["b" /* getScrollY */])(),
        scrollPercent: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["c" /* getScrollPercent */])(),
        width: size.width,
        height: size.height
      });
      return function () {
        return _this.unsubscribe(f);
      };
    }
  }, {
    key: 'unsubscribe',
    value: function unsubscribe(f) {
      if (this.subscriptions.indexOf(f) > -1) {
        this.subscriptions.splice(this.subscriptions.indexOf(f), 1);
      }
    }
  }]);

  return ViewportStore;
}();

/* harmony default export */ exports["a"] = ViewportStore;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pick__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_pick__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(2);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var ViewportSubscriber = function (_Component) {
  _inherits(ViewportSubscriber, _Component);

  function ViewportSubscriber() {
    _classCallCheck(this, ViewportSubscriber);

    return _possibleConstructorReturn(this, (ViewportSubscriber.__proto__ || Object.getPrototypeOf(ViewportSubscriber)).apply(this, arguments));
  }

  _createClass(ViewportSubscriber, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (!this.context.viewportStore) {
        throw new Error('Can\'t find a viewport store. ' + 'Make sure a <ViewportBroadcaster /> ancestor is defined, ' + 'it broadcasts a viewport store thru the context.');
      }
      this.unsubscribe = this.context.viewportStore.subscribe(function (state) {
        _this2.setState(_extends({}, state));
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unsubscribe();
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var children = _props.children;
      var fields = _props.fields;

      var state = fields && fields.length > 0 ? __WEBPACK_IMPORTED_MODULE_1_lodash_pick___default()(this.state, fields) : this.state;
      return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils__["d" /* injectProps */])(children, state);
    }
  }]);

  return ViewportSubscriber;
}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);

ViewportSubscriber.contextTypes = {
  viewportStore: __WEBPACK_IMPORTED_MODULE_0_react___default.a.PropTypes.object
};

ViewportSubscriber.propTypes = {
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].any,
  fields: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string)
};

/* harmony default export */ exports["a"] = ViewportSubscriber;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(4);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ },
/* 11 */
/***/ function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ },
/* 12 */
/***/ function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ },
/* 13 */
/***/ function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

var defineProperty = __webpack_require__(3);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(13),
    isFlattenable = __webpack_require__(26);

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

module.exports = baseFlatten;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && objectToString.call(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(38),
    isMasked = __webpack_require__(27),
    isObject = __webpack_require__(5),
    toSource = __webpack_require__(32);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

var basePickBy = __webpack_require__(19);

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

module.exports = basePick;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

var baseAssignValue = __webpack_require__(14);

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      baseAssignValue(result, key, value);
    }
  }
  return result;
}

module.exports = basePickBy;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

var constant = __webpack_require__(33),
    defineProperty = __webpack_require__(3),
    identity = __webpack_require__(35);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

var root = __webpack_require__(4);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

var flatten = __webpack_require__(34),
    overRest = __webpack_require__(28),
    setToString = __webpack_require__(29);

/**
 * A specialized version of `baseRest` which flattens the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @returns {Function} Returns the new function.
 */
function flatRest(func) {
  return setToString(overRest(func, undefined, flatten), func + '');
}

module.exports = flatRest;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(41)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(17),
    getValue = __webpack_require__(25);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ },
/* 25 */
/***/ function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(10),
    isArguments = __webpack_require__(36),
    isArray = __webpack_require__(37);

/** Built-in value references. */
var spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

module.exports = isFlattenable;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(21);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

var apply = __webpack_require__(11);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

var baseSetToString = __webpack_require__(20),
    shortOut = __webpack_require__(30);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ },
/* 30 */
/***/ function(module, exports) {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 500,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(39);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ },
/* 32 */
/***/ function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to process.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ },
/* 33 */
/***/ function(module, exports) {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

var baseFlatten = __webpack_require__(15);

/**
 * Flattens `array` a single level deep.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to flatten.
 * @returns {Array} Returns the new flattened array.
 * @example
 *
 * _.flatten([1, [2, [3, [4]], 5]]);
 * // => [1, 2, [3, [4]], 5]
 */
function flatten(array) {
  var length = array ? array.length : 0;
  return length ? baseFlatten(array, 1) : [];
}

module.exports = flatten;


/***/ },
/* 35 */
/***/ function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(16),
    isObjectLike = __webpack_require__(0);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ },
/* 37 */
/***/ function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);

/** `Object#toString` result references. */
var funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

var isObjectLike = __webpack_require__(0);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

module.exports = isSymbol;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

var arrayMap = __webpack_require__(12),
    basePick = __webpack_require__(18),
    flatRest = __webpack_require__(22),
    toKey = __webpack_require__(31);

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = flatRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(props, toKey));
});

module.exports = pick;


/***/ },
/* 41 */
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }
/******/ ])
});
;