/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _dvd = __webpack_require__(1);
	
	var _dvd2 = __webpack_require__(2);
	
	/**
	 * Created by rchea on 11/17/16.
	 */
	
	var app = 'my app is cool';
	
	var dvd = new _dvd.Dvd('some title', 'image location', 'description');
	
	var dvdView = new _dvd2.DvdView();
	dvdView.render();
	
	console.log('dvdView: ', dvdView);
	
	console.log(dvd);

/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//var _ = require('../../bower_components/underscore/underscore');
	
	var Dvd = exports.Dvd = function () {
	    function Dvd(title, image, description) {
	        _classCallCheck(this, Dvd);
	
	        this.title = title;
	        this.image = image;
	        this.description = description;
	    }
	
	    _createClass(Dvd, [{
	        key: "toString",
	        value: function toString() {
	            //template string use back tick
	            return this.title + " " + this.description;
	        }
	    }]);

	    return Dvd;
	}();

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DvdView = undefined;
	
	var _view = __webpack_require__(3);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	function dvdTemplate(title, image) {
	
	    return '<div class="col-xs-3">\n                <div class="card">\n                    <a href="#"><img class="card-img-top" src=' + image + ' alt="movie title" style="width:200px"></a>\n                </div>\n                <div class="card-block">\n                    <h5 class="card-title">' + title + '</h5>\n                </div>\n            </div>';
	}
	
	var DvdView = exports.DvdView = function (_View) {
	    _inherits(DvdView, _View);
	
	    function DvdView() {
	        _classCallCheck(this, DvdView);
	
	        return _possibleConstructorReturn(this, (DvdView.__proto__ || Object.getPrototypeOf(DvdView)).call(this, '#dvdView', dvdTemplate('fixed title', 'https://api.dvdxpress.net/t/findingdory_rt2.jpg')));
	    }
	
	    return DvdView;
	}(_view.View);

/***/ },
/* 3 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//var _ = require('../../bower_components/underscore/underscore');
	
	var View = exports.View = function () {
	    function View(selector, template) {
	        _classCallCheck(this, View);
	
	        this.el = document.querySelector(selector);
	        this.template = template;
	    }
	
	    _createClass(View, [{
	        key: "render",
	        value: function render() {
	            this.el.innerHTML = this.template;
	        }
	    }]);

	    return View;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map