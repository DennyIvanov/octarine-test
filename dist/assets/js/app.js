/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/js/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/app.js":
/*!******************************!*\
  !*** ./src/assets/js/app.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Toggle comments\r\n$('.comments__btn').on('click', function () {\r\n\t$(this).closest('.movie').find('.comments__inner').toggleClass('active');\r\n\t$(this).closest('.movie').find('.comments-down').toggleClass('active');\r\n});\r\n\r\n// Toggle form\r\n$('.header__btn').on('click', function () {\r\n\t$('.form').toggleClass('active');\r\n\t$('.header__btn').toggleClass('active');\r\n});\r\n\r\n// Toggle edit menu\r\n$('.movie-edit').on('click', function () {\r\n\t$(this).closest('.movie').find('.movie__edit').toggleClass('active');\r\n\t$(this).closest('.movie').find('.comments__inner').toggleClass('active');\r\n\t$(this).closest('.movie').find('.movie__edit').find('input.title').val($(this).closest('.movie').find('.movie__title').text());\r\n\t$(this).closest('.movie').find('.movie__edit').find('textarea.description').val($(this).closest('.movie').find('.movie__description').text());\r\n\t$(this).closest('.movie').find('.movie__edit').find('input.country').val($(this).closest('.movie').find('.movie__country strong').text());\r\n\t$(this).closest('.movie').find('.movie__edit').find('input.year').val($(this).closest('.movie').find('.movie__year strong').text());\r\n\t$(this).closest('.movie').find('.movie__edit').find('input.genre').val($(this).closest('.movie').find('.movie__genre strong').text());\r\n\t$(this).closest('.movie').find('.movie__edit').find('input.actors').val($(this).closest('.movie').find('.movie__actors strong').text());\r\n\t$(this).closest('.movie').find('.movie__edit').find('input.poster').val($(this).closest('.movie').find('.movie__poster--featured img').attr('src'));\r\n});\r\n\r\n// Cancel button\r\n$('.edit-cancel').on('click', function () {\r\n\tif ((this) === $(this).closest('.form__inner').find('.edit-cancel').get(0)) {\r\n\t\t$(this).closest('.form').find('input').val('');\r\n\t\t$(this).closest('.form').find('textarea').val('');\r\n\t\t$('.header__btn').toggleClass('active');\r\n\t\t$('.form').toggleClass('active');\r\n\t\t$(this).closest('.movie__edit').find('input').val('');\r\n\t\t$(this).closest('.movie__edit').find('taxtarea').val('');\r\n\t\t$(this).closest('.movie__edit').toggleClass('active');\r\n\t\t$(this).closest('.movie').find('.comments__inner').toggleClass('active');\r\n\t}\r\n});\r\n\r\nlet movieDef = {\r\n\ttextTitle: 'Martian',\r\n\ttextCountry: 'USA',\r\n\ttextYear: '2016',\r\n\ttextGenre: 'Fantasy',\r\n\ttextActors: 'Aksel Hennie, Chiwetel Ejiofor, Jeff Daniels, Jessica Chastain, Kate Mara, Kristen Wiig, Matt Damon, Michael Peña, Sean Bean, Sebastian Stan',\r\n\ttextPoster: 'assets/images/film-1.jpg',\r\n\ttextDescription: 'Mars mission Ares-2 in the process was forced to urgently leave the planet because of the impendingsandstorm. Engineer and Biolog mark Watney suffered an injury suit during a sand storm. The...',\r\n};\r\nlet strMovieDef = JSON.stringify(movieDef);\r\nlocalStorage.setItem('movie1', strMovieDef);\r\n\r\n// LocalStorage checking\r\nif (localStorage.length) {\r\n\tfor (let i = 0; i < localStorage.length; i++) {\r\n\t\tif (localStorage.getItem('obj_' + i)) {\r\n\t\t\tlet retObj = JSON.parse(localStorage.getItem('obj_' + i));\r\n\t\t\tlet index = $('.movie').get(retObj.movie);\r\n\t\t\t$(index).find('.comments__group').append('<li class=\"comments__item\">' + retObj.text + '</li>');\r\n\t\t\t$(index).find('.comment-count').text($(index).find('.comments__group').find('li').length);\r\n\t\t}\r\n\t\tif (localStorage.key(i).substr(0, 5) === 'movie') {\r\n\t\t\t$('.pattern').clone(true).removeClass('pattern').appendTo('#main .container');\r\n\t\t\tlet newIndex = $('.movie').get($('.movie').length - 1);\r\n\t\t\tlet retObj = JSON.parse(localStorage.getItem(localStorage.key(i)));\r\n\t\t\t$(newIndex).attr('id', Number(localStorage.key(i).substr(5)));\r\n\t\t\t$(newIndex).find('.movie__title').text(retObj.textTitle);\r\n\t\t\t$(newIndex).find('.movie__description').text(retObj.textDescription);\r\n\t\t\t$(newIndex).find('.movie__country strong').text(retObj.textCountry);\r\n\t\t\t$(newIndex).find('.movie__year strong').text(retObj.textYear);\r\n\t\t\t$(newIndex).find('.movie__genre strong').text(retObj.textGenre);\r\n\t\t\t$(newIndex).find('.movie__actors strong').text(retObj.textActors);\r\n\t\t\t$(newIndex).find('.movie__poster--featured img').attr('src', retObj.textPoster);\r\n\t\t\t$(newIndex).find('.movie__poster--fill img').attr('src', retObj.textPoster);\r\n\t\t}\r\n\t}\r\n};\r\n\r\n// Adding new comment & counting comments\r\n$('.comments-add').on('click', function () {\r\n\tlet text = $(this).closest('.comments__inner').find('input');\r\n\tif (text.val() == \"\" || text.val().length < 3) {\r\n\t\t$('.comments__input').addClass('error');\r\n\t} else {\r\n\t\t$('.comments__input').removeClass('error');\r\n\t\t$(this).closest('.comments__inner').find('.comments__group').append('<li class=\"comments__item\">' + text.val() + '</li>');\r\n\t\t// adding comments to localeStorage\r\n\t\tfor (let i = 0; i < $('.movie').length; i++) {\r\n\t\t\tif ($(this).closest('.movie').get(0) === $('.movie').get(i)) {\r\n\t\t\t\tlet obj = {\r\n\t\t\t\t\t'movie': i,\r\n\t\t\t\t\t'text': text.val()\r\n\t\t\t\t};\r\n\t\t\t\tlet sObj = JSON.stringify(obj);\r\n\t\t\t\tlocalStorage.setItem('obj_' + localStorage.length, sObj);\r\n\t\t\t}\r\n\t\t}\r\n\t\ttext.val('');\r\n\t}\r\n\t$(this).closest('.movie').find('.comment-count').text($(this).closest('.comments__inner').find('.comments__group').find('li').length);\r\n});\r\n\r\n// Adding new movie button\r\n$('.movie-add').on('click', function () {\r\n\t$('.pattern').clone(true).removeClass('pattern').appendTo('main .container');\r\n\tlet newIndex = $('.movie').get($('.movie').length - 1);\r\n\tlet dataObj = {\r\n\t\ttextTitle: $(this).closest('.form__inner').find('input.title').val(),\r\n\t\ttextCountry: $(this).closest('.form__inner').find('input.country').val(),\r\n\t\ttextYear: $(this).closest('.form__inner').find('input.year').val(),\r\n\t\ttextGenre: $(this).closest('.form__inner').find('input.genre').val(),\r\n\t\ttextActors: $(this).closest('.form__inner').find('input.actors').val(),\r\n\t\ttextPoster: $(this).closest('.form__inner').find('input.poster').val(),\r\n\t\ttextDescription: $(this).closest('.form__inner').find('textarea.description').val(),\r\n\t};\r\n\tlet sObj = JSON.stringify(dataObj);\r\n\r\n\t$(newIndex).find('.movie__title').text(dataObj.textTitle);\r\n\t$(newIndex).find('.movie__country strong').text(dataObj.textCountry);\r\n\t$(newIndex).find('.movie__year strong').text(dataObj.textYear);\r\n\t$(newIndex).find('.movie__genre strong').text(dataObj.textGenre);\r\n\t$(newIndex).find('.movie__actors strong').text(dataObj.textActors);\r\n\t$(newIndex).find('.movie__poster--featured img').attr('src', dataObj.textPoster);\r\n\t$(newIndex).find('.movie__poster--fill img').attr('src', dataObj.textPoster);\r\n\t$(newIndex).find('.movie__description').text(dataObj.textDescription);\r\n\t$(newIndex).addClass('movie');\r\n\r\n\t$(this).closest('.form__inner').find('input').val('');\r\n\t$(this).closest('.form__inner').find('textarea').val('');\r\n\r\n\tif (localStorage.length === 0) {\r\n\t\tlocalStorage.setItem('movie1', sObj);\r\n\t\t$(newIndex).attr('id', 1);\r\n\t} else for (let i = localStorage.length - 1; i >= 0; i--) {\r\n\t\tif (localStorage.key(i).substr(0, 5) === 'movie') {\r\n\t\t\tlocalStorage.setItem('movie' + (Number(localStorage.key(i).substr(5)) + 1), sObj);\r\n\t\t\t$(newIndex).attr('id', Number(localStorage.key(i).substr(5)) + 1);\r\n\t\t\tbreak\r\n\t\t}\r\n\t}\r\n\r\n\t$('.form').toggleClass('active');\r\n\t$('.header__btn').toggleClass('active');\r\n});\r\n\r\n// Save button\r\n$('.edit-save').on('click', function () {\r\n\t$(this).closest('.movie').find('.movie__edit').toggleClass('active');\r\n\t$(this).closest('.movie').find('.comments__inner').toggleClass('active');\r\n\t$(this).closest('.movie').find('.movie__title').text($(this).closest('.movie').find('.movie__edit').find('input.title').val());\r\n\t$(this).closest('.movie').find('.movie__year strong').text($(this).closest('.movie').find('.movie__edit').find('input.year').val());\r\n\t$(this).closest('.movie').find('.movie__country strong').text($(this).closest('.movie').find('.movie__edit').find('input.country').val());\r\n\t$(this).closest('.movie').find('.movie__genre strong').text($(this).closest('.movie').find('.movie__edit').find('input.genre').val());\r\n\t$(this).closest('.movie').find('.movie__actors strong').text($(this).closest('.movie').find('.movie__edit').find('input.actors').val());\r\n\t$(this).closest('.movie').find('.movie__poster--fill img').attr('src', $(this).closest('.movie').find('.movie__edit').find('input.poster').val());\r\n\t$(this).closest('.movie').find('.movie__poster--featured img').attr('src', $(this).closest('.movie').find('.movie__edit').find('input.poster').val());\r\n\t$(this).closest('.movie').find('.movie__description').text($(this).closest('.movie').find('.movie__edit').find('input.description').val());\r\n\r\n\tlet dataObj = {\r\n\t\ttextTitle: $(this).closest('.movie').find('.movie__edit').find('input.title').val(),\r\n\t\ttextYear: $(this).closest('.movie').find('.movie__edit').find('input.year').val(),\r\n\t\ttextCountry: $(this).closest('.movie').find('.movie__edit').find('input.country').val(),\r\n\t\ttextGenre: $(this).closest('.movie').find('.movie__edit').find('input.genre').val(),\r\n\t\ttextActors: $(this).closest('.movie').find('.movie__edit').find('input.actors').val(),\r\n\t\ttextPoster: $(this).closest('.movie').find('.movie__edit').find('input.poster').val(),\r\n\t\ttextDescription: $(this).closest('.movie').find('.movie__edit').find('textarea.description').val()\r\n\t};\r\n\tlet sObj = JSON.stringify(dataObj);\r\n\r\n\tfor (let i = 0; i < localStorage.length; i++) {\r\n\t\tif (localStorage.key(i).substr(5) === $(this).closest('.movie').attr('id')) {\r\n\t\t\tlocalStorage.setItem('movie' + (Number(localStorage.key(i).substr(5))), sObj);\r\n\t\t}\r\n\t}\r\n});\r\n\r\n// Delete button\r\n$('.movie-del').on('click', function () {\r\n\tif ($(this).closest('.movie').get(0) !== $('.template').get(0) && $(this).closest('.movie').get(0) !== $('.template').get(1)) {\r\n\t\tfor (let i = 0; i < localStorage.length; i++) {\r\n\t\t\tif (localStorage.key(i).substr(5) === $(this).closest('.movie').attr('id')) {\r\n\t\t\t\tlocalStorage.removeItem(localStorage.key(i));\r\n\t\t\t}\r\n\t\t\t// if (localStorage.key(i).substr(0, 5) !== 'movie') {\r\n\t\t\t// \tlocalStorage.clear();\r\n\t\t\t// }\r\n\t\t}\r\n\t}\r\n\t$(this).closest('.movie').remove();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/app.js?");

/***/ })

/******/ });