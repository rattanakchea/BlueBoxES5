/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

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

	var _dvdList = __webpack_require__(4);

	var _mockAPI = __webpack_require__(5);

	/**
	 * Created by rchea on 11/17/16.
	 */

	var api = (0, _mockAPI.mockAPI)({ key: 'blueBox2' });

	// Fetch data
	api.get().then(function (data) {
	    runApp(data);
	});

	api.get(1).then(function (theDvd) {
	    console.log(theDvd);
	}, function (err) {
	    console.log(err);
	});

	function runApp(DvdCollection) {
	    var dvdLisView = new _dvdList.DvdListView(DvdCollection);
	    dvdLisView.render();
	}

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

	// parameters deconstructor ES5
	function dvdTemplate(_ref) {
	    var title = _ref.title,
	        image = _ref.image;


	    return '<div class="col-xs-3" style="display:inline-block; float:left; position: relative;">\n                <div class="card">\n                    <a href="#"><img class="card-img-top" src=' + image + ' alt="movie title" style="width:200px"></a>\n                </div>\n                <div class="card-block">\n                    <h5 class="card-title">' + title + '</h5>\n                </div>\n            </div>';
	}

	function template2(_ref2) {
	    var title = _ref2.title,
	        image = _ref2.image;

	    return '<div class="col-sm-4 col-lg-4 col-md-4">\n                <div class="thumbnail">\n                <img src=' + image + ' alt="">\n                <div class="caption">\n                    <h4><a href="detail.html">' + title + '</a></h4>\n                    </div>\n                    <div class="ratings">\n                        <p class="pull-right"><a href="#">Add to cart</a></p>\n                        <p>\n                        <span class="glyphicon glyphicon-star"></span>\n                            <span class="glyphicon glyphicon-star"></span>\n                            <span class="glyphicon glyphicon-star"></span>\n                            <span class="glyphicon glyphicon-star"></span>\n                        </p>\n                    </div>\n                </div>\n            </div>';
	}

	var DvdView = exports.DvdView = function (_View) {
	    _inherits(DvdView, _View);

	    function DvdView(DvdModel) {
	        _classCallCheck(this, DvdView);

	        var _this = _possibleConstructorReturn(this, (DvdView.__proto__ || Object.getPrototypeOf(DvdView)).call(this, '#dvdView', template2(DvdModel)));

	        _this.model = DvdModel;
	        return _this;
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

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.DvdListView = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _view = __webpack_require__(3);

	var _dvd = __webpack_require__(2);

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var DvdListView = exports.DvdListView = function (_View) {
	    _inherits(DvdListView, _View);

	    function DvdListView(DvdCollection) {
	        _classCallCheck(this, DvdListView);

	        var _this = _possibleConstructorReturn(this, (DvdListView.__proto__ || Object.getPrototypeOf(DvdListView)).call(this, '#app', null));

	        _this.collection = DvdCollection;
	        _this.template = _this.buildTemplate();
	        return _this;
	    }

	    _createClass(DvdListView, [{
	        key: 'buildTemplate',
	        value: function buildTemplate() {
	            var html = '';
	            this.collection.forEach(function (DvdModel) {
	                var view = new _dvd.DvdView(DvdModel);
	                //html
	                html += view.template;
	            });
	            return html;
	        }

	        // render(){
	        //     this.el.innerHTML = this.template;
	        // }

	    }]);

	    return DvdListView;
	}(_view.View);

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.mockAPI = undefined;

	var _data = __webpack_require__(6);

	var faker = (0, _data.module)(); // jscs:disable

	var DvdCollection = faker.getDvds(3);

	// define data structure

	var mockAPI = function mockAPI(config) {
	    var api = {},
	        key = config.key;
	    create();

	    // setup localstorage
	    function create(data) {
	        if (!getData()) {
	            if (data) {
	                save(data);
	            } else {
	                //sample data
	                save(DvdCollection);
	            }
	        } else {

	            //override localstorage
	            save(DvdCollection);
	        }
	    };

	    function save(data) {
	        localStorage.setItem(key, JSON.stringify(data));
	    }

	    function getData() {
	        return JSON.parse(localStorage.getItem(key));
	    }

	    // API calls

	    api.post = function (data) {
	        var raw = getData();
	        if (raw == null || !raw) {
	            raw = [];
	        }

	        //validation check?
	        raw.push(data);
	        save(raw);
	        return raw;
	    };

	    api.reset = function () {
	        localStorage.setItem(key, null);
	    };

	    api.get = function () {
	        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	        if (id) {
	            return getADvd(id);
	        }
	        return new Promise(function (resolve, reject) {
	            if (getData()) {
	                resolve(getData());
	            } else {
	                reject({ err: 'Error in Get' });
	            }
	        });
	    };

	    api.delete = function () {
	        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

	        var allDvds = getData();
	        return new Promise(function (resolve, reject) {

	            if (!id) {
	                reject({ err: 'need to specify an id: ' + id });
	            } else {
	                id = parseInt(id);
	                var theDvd = _.findWhere(allDvds, { id: id });

	                if (theDvd) {
	                    allDvds = _.without(allDvds, theDvd);
	                    save(allDvds);
	                    resolve(theDvd); //return the removed dvd;
	                } else {
	                    reject({ err: 'cannot find dvd to remove with id: ' + id });
	                }
	            }
	        });
	    };

	    // get a single dvd by id
	    function getADvd(id) {
	        var id = parseInt(id),
	            allDvds = getData();
	        var theDvd = _.findWhere(allDvds, { id: id });
	        return new Promise(function (resolve, reject) {
	            theDvd ? resolve(theDvd) : reject({ err: 'Dvd not found - id: ' + id });
	        });
	    }

	    return api;
	};

	exports.mockAPI = mockAPI;

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	// Data Layer

	// var defaultDvd = {
	//     id: 0,
	//     title: "Some title",
	//     image: "https://api.dvdxpress.net/t/findingdory_rt2.jpg",
	//     description: "Some movie description",
	// };

	function getDefaultDvd(id) {
	  return {
	    id: id,
	    title: 'Ice Age: Collision',
	    image: '//images.redbox.com/Images/EPC/boxartlarge/8421.jpg',
	    description: 'Scrat’s epic pursuit of the elusive acorn cata'
	  };
	}

	var dvds = [{
	  id: 0,
	  title: 'Ice Age: Collision Course',
	  image: '//images.redbox.com/Images/EPC/boxartlarge/8421.jpg',
	  description: 'Scrat’s epic pursuit of the elusive acorn catapults him into the universe where he' + 'accidentally sets off a series of cosmic events that.'
	}, {
	  id: 1,
	  title: 'The Legend of Tarzan',
	  image: '//images.redbox.com/Images/EPC/boxartlarge/8177.jpg',
	  description: 'Scark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
	}, {
	  id: 2,
	  title: 'X-Men: Apocalypse',
	  image: '//images.redbox.com/Images/EPC/boxartlarge/8416.jpg',
	  description: 'Scrark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
	}, {
	  id: 3,
	  title: 'Ice Age: Collision Course',
	  image: '//images.redbox.com/Images/EPC/boxartlarge/8421.jpg',
	  description: 'Scrat’s epict full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
	}, {
	  id: 4,
	  title: 'The Legend of Tarzan',
	  image: '//images.redbox.com/Images/EPC/boxartlarge/8177.jpg',
	  description: 'Scrat’s of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
	}, {
	  id: 5,
	  title: 'X-Men: Apocalypse',
	  image: '//images.redbox.com/Images/EPC/boxartlarge/8416.jpg',
	  description: 'Scrat’s epic comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
	}];

	function createDvd(id, title, image, trailer) {
	  var description = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';

	  return {
	    id: id,
	    title: title,
	    image: image,
	    description: description,
	    trailer: trailer
	  };
	}

	function _module() {

	  return {
	    getOneDvd: getDefaultDvd,
	    getDvds: function getDvds() {
	      return dvds;
	    }
	  };
	};

	exports.module = _module;

/***/ }
/******/ ]);