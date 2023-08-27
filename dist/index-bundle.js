"use strict";
(self["webpackChunkthe_menu"] = self["webpackChunkthe_menu"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/home.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
#headingImg-home {
	width: 180px;
	height: 180px;
}

.headCont {
	width: 100%;
}

#home-h1 {
	text-decoration: underline 5px;
}

p {
	font-size: 20px;
}`, "",{"version":3,"sources":["webpack://./src/styles/home.css"],"names":[],"mappings":";AACA;CACC,YAAY;CACZ,aAAa;AACd;;AAEA;CACC,WAAW;AACZ;;AAEA;CACC,8BAA8B;AAC/B;;AAEA;CACC,eAAe;AAChB","sourcesContent":["\n#headingImg-home {\n\twidth: 180px;\n\theight: 180px;\n}\n\n.headCont {\n\twidth: 100%;\n}\n\n#home-h1 {\n\ttext-decoration: underline 5px;\n}\n\np {\n\tfont-size: 20px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
	background-color:  #f6f3f2;
	width: 100vw;
	height: 100vh;
	padding: 0;
	margin: 0;
}

#content {
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	height: 100%;
}

.main-heading {
	color: #35384b;
	font-size: 4rem;
	text-decoration: underline overline  #eca935 5px;
}

/* MENU */
.menu-opt {
	list-style: none;
	font-size: 1.3rem;
	cursor: pointer;
	margin: 1.3rem;
	font-weight: bold;
	color: #35384b;
	transition: 0.3s;
}

.menu-opt:hover {
	color: #2f210a;
	padding: 5px;
	text-decoration: underline #eca935 5px;
	transform: scale(1.1);
}

.menu-opt-selected {
	color: #5e4315;
	text-decoration: overline #aeaf1e 5px;
	transition: 0.3;
	transform: scale(1.1);
}

.menu-opt-selected:hover {
	color: #5e4315;
	text-decoration: overline #aeaf1e 5px;
	transition: 0.3;
	transform: scale(1.2);
}


/* tab display */
.tab-display {
	width: 95%;
	height: 80%;
	background-color: #eeecec;
	border-radius: 5px;
	display: flex;
}

.half-cont {
	width: 50%;
	height: 95%;
	padding: 10px;
}

.half-cont:nth-child(odd){
	background-color: red;
}

`, "",{"version":3,"sources":["webpack://./src/styles/styles.css"],"names":[],"mappings":"AAAA;CACC,0BAA0B;CAC1B,YAAY;CACZ,aAAa;CACb,UAAU;CACV,SAAS;AACV;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;CACnB,WAAW;CACX,YAAY;AACb;;AAEA;CACC,cAAc;CACd,eAAe;CACf,gDAAgD;AACjD;;AAEA,SAAS;AACT;CACC,gBAAgB;CAChB,iBAAiB;CACjB,eAAe;CACf,cAAc;CACd,iBAAiB;CACjB,cAAc;CACd,gBAAgB;AACjB;;AAEA;CACC,cAAc;CACd,YAAY;CACZ,sCAAsC;CACtC,qBAAqB;AACtB;;AAEA;CACC,cAAc;CACd,qCAAqC;CACrC,eAAe;CACf,qBAAqB;AACtB;;AAEA;CACC,cAAc;CACd,qCAAqC;CACrC,eAAe;CACf,qBAAqB;AACtB;;;AAGA,gBAAgB;AAChB;CACC,UAAU;CACV,WAAW;CACX,yBAAyB;CACzB,kBAAkB;CAClB,aAAa;AACd;;AAEA;CACC,UAAU;CACV,WAAW;CACX,aAAa;AACd;;AAEA;CACC,qBAAqB;AACtB","sourcesContent":["body {\n\tbackground-color:  #f6f3f2;\n\twidth: 100vw;\n\theight: 100vh;\n\tpadding: 0;\n\tmargin: 0;\n}\n\n#content {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n\twidth: 100%;\n\theight: 100%;\n}\n\n.main-heading {\n\tcolor: #35384b;\n\tfont-size: 4rem;\n\ttext-decoration: underline overline  #eca935 5px;\n}\n\n/* MENU */\n.menu-opt {\n\tlist-style: none;\n\tfont-size: 1.3rem;\n\tcursor: pointer;\n\tmargin: 1.3rem;\n\tfont-weight: bold;\n\tcolor: #35384b;\n\ttransition: 0.3s;\n}\n\n.menu-opt:hover {\n\tcolor: #2f210a;\n\tpadding: 5px;\n\ttext-decoration: underline #eca935 5px;\n\ttransform: scale(1.1);\n}\n\n.menu-opt-selected {\n\tcolor: #5e4315;\n\ttext-decoration: overline #aeaf1e 5px;\n\ttransition: 0.3;\n\ttransform: scale(1.1);\n}\n\n.menu-opt-selected:hover {\n\tcolor: #5e4315;\n\ttext-decoration: overline #aeaf1e 5px;\n\ttransition: 0.3;\n\ttransform: scale(1.2);\n}\n\n\n/* tab display */\n.tab-display {\n\twidth: 95%;\n\theight: 80%;\n\tbackground-color: #eeecec;\n\tborder-radius: 5px;\n\tdisplay: flex;\n}\n\n.half-cont {\n\twidth: 50%;\n\theight: 95%;\n\tpadding: 10px;\n}\n\n.half-cont:nth-child(odd){\n\tbackground-color: red;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.h-flex {
	display: flex;
	align-items: center;
	justify-content: space-around;
}

.v-center-flex {
	display: flex;
	flex-direction: column;
	align-items: center;
}

.v-gap-flex {
	display: flex;
	flex-direction: column;
	justify-content: space-around;
}`, "",{"version":3,"sources":["webpack://./src/styles/utilities.css"],"names":[],"mappings":"AAAA;CACC,aAAa;CACb,mBAAmB;CACnB,6BAA6B;AAC9B;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,mBAAmB;AACpB;;AAEA;CACC,aAAa;CACb,sBAAsB;CACtB,6BAA6B;AAC9B","sourcesContent":[".h-flex {\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: space-around;\n}\n\n.v-center-flex {\n\tdisplay: flex;\n\tflex-direction: column;\n\talign-items: center;\n}\n\n.v-gap-flex {\n\tdisplay: flex;\n\tflex-direction: column;\n\tjustify-content: space-around;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/home.css":
/*!*****************************!*\
  !*** ./src/styles/home.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./home.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/home.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_home_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/styles.css":
/*!*******************************!*\
  !*** ./src/styles/styles.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/utilities.css":
/*!**********************************!*\
  !*** ./src/styles/utilities.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./utilities.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/utilities.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_utilities_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/home.js":
/*!*****************************!*\
  !*** ./src/scripts/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _styles_home_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/home.css */ "./src/styles/home.css");
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utilities.css */ "./src/styles/utilities.css");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");






const mainCont = document.getElementById('mainCont');
const subCont = document.getElementById('subCont');

/*MAIN CONTENT*/
mainCont.classList.add('v-center-flex');

const headCont = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('div', ['h-flex', 'headCont'], false, 'heading-cont');
const h1 = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('h1', [], 'Our History', 'home-h1');
const headingImg = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('img', [], false, 'headingImg-home');

headingImg.src = '../img/our-history.jpg'

headCont.appendChild(h1);
headCont.appendChild(headingImg);


const infoCont = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('div', ['v-center-flex']);
const whoP = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('p', [], 'We, The Menu, were founded in 2023 by a group of friends who were passionate about food, sustainability, and social justice. We wanted to create a restaurant that would be good for the planet and for the people who ate there.');
const whereP = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('p', [], 'We are located on a small farm in the countryside. We grow our own vegetables, raise our own chickens, and use solar power to generate electricity. We also compost all of our food waste.');
const goesP = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('p', [], 'A portion of the proceeds from every meal sold at The Menu goes to a local food bank. We have helped to feed thousands of hungry people since we opened our doors.');
const proudP = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('p', [], 'We are proud of our history and our mission. We are committed to continuing to serve our community and to making a positive impact on the planet.');

infoCont.appendChild(whoP);
infoCont.appendChild(whereP);
infoCont.appendChild(goesP);
infoCont.appendChild(proudP);

/*MAIN CONTENT*/

/*SUB CONTENT*/

const charityCont = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('div', [], false, 'charity-cont');
const h2Charity = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('h2', [], 'Charity', 'charity-h2');
const pCharity = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('p', [], false, 'charity-p');

// as the text is long i prefered to not use the correspondent argument in .createEl for text, instead
// i decided to assign its text apart from .createEl;
pCharity.textContent = 'The Menu is committed to giving back to our community. We donate food to local food banks and shelters, and we host fundraising events for charities that support important causes. We also encourage our customers to volunteer their time or services to help those in need. We believe that everyone has a responsibility to give back, and we are proud to do our part';


charityCont.appendChild(h2Charity);
charityCont.appendChild(pCharity);

const sustainableCont = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('div', [], false, 'sustainable-cont');
const h2Sustainable = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('h2', [], 'Self-sustainable', 'sustainable-h2');
const pSustainable = _utilities_js__WEBPACK_IMPORTED_MODULE_2__.createEl('p', [], false, 'sustainable-p');

pSustainable.textContent = 'The Menu is committed to sustainability. We believe that it is important to reduce our impact on the environment, and we are taking steps to do so.We grow our own food in our garden, which reduces our reliance on imported produce. We also use renewable energy sources, such as solar power, to power our restaurant.We are also working to reduce our waste. We compost food scraps and recycle paper, plastic, and glass. We also use biodegradable utensils and straws. We believe that sustainability is important for the future of our planet, and we are committed to doing our part.';

sustainableCont.appendChild(h2Sustainable);
sustainableCont.appendChild(pSustainable);


subCont.classList.add('v-gap-flex');

/*SUB CONTENT*/

/* RENDER FUNCTION: All elements are already created,
					we just have to append it to each corresponding
					cont
*/

function render(){
	// MAIN CONTENT
	index.mainCont.appendChild(headCont);
	index.mainCont.appendChild(infoCont);
	// SUB CONTENT
	index.subCont.appendChild(charityCont);
	index.subCont.appendChild(sustainableCont);

	console.log('hey')
}

/*RENDER FUNCTION*/

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/styles.css */ "./src/styles/styles.css");
/* harmony import */ var _styles_utilities_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/utilities.css */ "./src/styles/utilities.css");
/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.js */ "./src/scripts/home.js");
/* harmony import */ var _utilities_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utilities.js */ "./src/scripts/utilities.js");





const content = document.getElementById('content');
content.classList.add('vcenter-flex');


/**-HEADING CONT-**/	// (element, cssClass, innerText, id
const headingCont = _utilities_js__WEBPACK_IMPORTED_MODULE_3__.createEl('div', ['headingCont', 'h-flex']);
const mainHeading = _utilities_js__WEBPACK_IMPORTED_MODULE_3__.createEl('h1', ['main-heading'], 'The Menu');
const menuCont = _utilities_js__WEBPACK_IMPORTED_MODULE_3__.createEl('ul', ['menu-cont', 'h-flex', 'test']);
const homePage = _utilities_js__WEBPACK_IMPORTED_MODULE_3__.createEl('li', ['menu-opt'], 'home', 'homeLi');
const menuPage = _utilities_js__WEBPACK_IMPORTED_MODULE_3__.createEl('li', ['menu-opt'], 'menu', 'menuLi');
const contactPage = _utilities_js__WEBPACK_IMPORTED_MODULE_3__.createEl('li', ['menu-opt'], 'contact', 'contactLi');

headingCont.appendChild(mainHeading);
headingCont.appendChild(menuCont);

menuCont.appendChild(homePage);
menuCont.appendChild(menuPage);
menuCont.appendChild(contactPage);
/**-HEADING CONT-**/


const tabDisplay = _utilities_js__WEBPACK_IMPORTED_MODULE_3__.createEl('div', ['tab-display'], false, 'tabDisplay');
const mainCont = createEl('div', ['half-cont'], false, 'mainCont');
const subCont = createEl('div', ['half-cont'], false, 'subCont');

tabDisplay.appendChild(mainCont);
tabDisplay.appendChild(subCont);

	


//generates the base layout
_utilities_js__WEBPACK_IMPORTED_MODULE_3__.renderBaseLayout(tabDisplay);

// tab behavior
const menuOpts = menuCont.children;

for(let i = 0; i < menuOpts.length; i++){
	menuOpts.item(i).addEventListener('click', optsHandler)
}


function optsHandler(e){

	//assign selected class
	e.target.classList.add('menu-opt-selected');

	//wipe out current content - TODO

	//display correspondent content
	if(e.target.id == 'homeLi'){
		home.render(tabDisplay);
	}
	else if(e.target.id == 'menuLi'){
		console.log(e.target.id)
	}
	else if(e.target.id == 'contactLi'){
		console.log(e.target.id)
	}

	//remove selected class from the previous option clicked
	for(let i = 0; i < menuOpts.length; i++){
		if(menuOpts.item(i) !== e.target
			&& menuOpts.item(i).classList.contains('menu-opt-selected')){
			menuOpts.item(i).classList.remove('menu-opt-selected');
		}
	}
}


// content div
content.appendChild(headingCont);
content.appendChild(tabDisplay);

/*render last tab visited*/

console.log('test')
/**TO DO
[X]- Add a page menu
[X]- import/export with utilities.js
[o]- Different layouts for each page
[]
**/


/***/ }),

/***/ "./src/scripts/utilities.js":
/*!**********************************!*\
  !*** ./src/scripts/utilities.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createEl: () => (/* binding */ createEl),
/* harmony export */   renderBaseLayout: () => (/* binding */ renderBaseLayout),
/* harmony export */   tabs: () => (/* binding */ tabs)
/* harmony export */ });


function createEl(element, cssClass, innerText, id){
	const newEl = document.createElement(element);
	//asigning css class/Classes
	if(cssClass && cssClass.length > 0){
		if(Array.isArray(cssClass)){ // an array was passed
			for(let i = 0; i < cssClass.length; i++){
				newEl.classList.add(cssClass[i]);
			}
		}

		else { //a string was passed
			newEl.classList.add(cssClass);
		}
	}

	//assigning text if passed
	if(innerText){
		newEl.textContent = innerText
	}

	//assigning id
	if(id){
		newEl.setAttribute('id', id);
	}

	return newEl;
}

// creates and appends the two columns base layout to parentEl
function renderBaseLayout(parentEl){

	const leftHalf = createEl('div', ['half-cont'], false, 'leftHalf');
	const rightHalf = createEl('div', ['half-cont'], false, 'rightHalf');

	parentEl.appendChild(leftHalf);
	parentEl.appendChild(rightHalf);

	return;
}


// keeps track of the current tab/last one visited
const tabs = {
	home: true,
	menu: false,
	contact: false
};

// remove all current content from the tabs displa
function cleanDisplay(){

	return
};

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/scripts/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBb0IsbURBQWtCO0FBQ3RDLG9CQUFvQixtREFBa0I7QUFDdEMsaUJBQWlCLG1EQUFrQjtBQUNuQyxpQkFBaUIsbURBQWtCO0FBQ25DLGlCQUFpQixtREFBa0I7QUFDbkMsb0JBQW9CLG1EQUFrQjs7QUFFdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsbUJBQW1CLG1EQUFrQjtBQUNyQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0EsMkRBQTBCOztBQUUxQjtBQUNBOztBQUVBLGVBQWUscUJBQXFCO0FBQ3BDO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IscUJBQXFCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZGMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGhlX21lbnUvLi9zcmMvc3R5bGVzL2hvbWUuY3NzIiwid2VicGFjazovL3RoZV9tZW51Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RoZV9tZW51Ly4vc3JjL3N0eWxlcy91dGlsaXRpZXMuY3NzIiwid2VicGFjazovL3RoZV9tZW51Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90aGVfbWVudS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RoZV9tZW51Ly4vc3JjL3N0eWxlcy9ob21lLmNzcz80YjUxIiwid2VicGFjazovL3RoZV9tZW51Ly4vc3JjL3N0eWxlcy9zdHlsZXMuY3NzP2U0NWIiLCJ3ZWJwYWNrOi8vdGhlX21lbnUvLi9zcmMvc3R5bGVzL3V0aWxpdGllcy5jc3M/NGNjMyIsIndlYnBhY2s6Ly90aGVfbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90aGVfbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGhlX21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGhlX21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGhlX21lbnUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90aGVfbWVudS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RoZV9tZW51Ly4vc3JjL3NjcmlwdHMvaG9tZS5qcyIsIndlYnBhY2s6Ly90aGVfbWVudS8uL3NyYy9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovL3RoZV9tZW51Ly4vc3JjL3NjcmlwdHMvdXRpbGl0aWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBcbiNoZWFkaW5nSW1nLWhvbWUge1xuXHR3aWR0aDogMTgwcHg7XG5cdGhlaWdodDogMTgwcHg7XG59XG5cbi5oZWFkQ29udCB7XG5cdHdpZHRoOiAxMDAlO1xufVxuXG4jaG9tZS1oMSB7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIDVweDtcbn1cblxucCB7XG5cdGZvbnQtc2l6ZTogMjBweDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaG9tZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUNBO0NBQ0MsWUFBWTtDQUNaLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFdBQVc7QUFDWjs7QUFFQTtDQUNDLDhCQUE4QjtBQUMvQjs7QUFFQTtDQUNDLGVBQWU7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiXFxuI2hlYWRpbmdJbWctaG9tZSB7XFxuXFx0d2lkdGg6IDE4MHB4O1xcblxcdGhlaWdodDogMTgwcHg7XFxufVxcblxcbi5oZWFkQ29udCB7XFxuXFx0d2lkdGg6IDEwMCU7XFxufVxcblxcbiNob21lLWgxIHtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSA1cHg7XFxufVxcblxcbnAge1xcblxcdGZvbnQtc2l6ZTogMjBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogICNmNmYzZjI7XG5cdHdpZHRoOiAxMDB2dztcblx0aGVpZ2h0OiAxMDB2aDtcblx0cGFkZGluZzogMDtcblx0bWFyZ2luOiAwO1xufVxuXG4jY29udGVudCB7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdHdpZHRoOiAxMDAlO1xuXHRoZWlnaHQ6IDEwMCU7XG59XG5cbi5tYWluLWhlYWRpbmcge1xuXHRjb2xvcjogIzM1Mzg0Yjtcblx0Zm9udC1zaXplOiA0cmVtO1xuXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBvdmVybGluZSAgI2VjYTkzNSA1cHg7XG59XG5cbi8qIE1FTlUgKi9cbi5tZW51LW9wdCB7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGZvbnQtc2l6ZTogMS4zcmVtO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdG1hcmdpbjogMS4zcmVtO1xuXHRmb250LXdlaWdodDogYm9sZDtcblx0Y29sb3I6ICMzNTM4NGI7XG5cdHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi5tZW51LW9wdDpob3ZlciB7XG5cdGNvbG9yOiAjMmYyMTBhO1xuXHRwYWRkaW5nOiA1cHg7XG5cdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lICNlY2E5MzUgNXB4O1xuXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5tZW51LW9wdC1zZWxlY3RlZCB7XG5cdGNvbG9yOiAjNWU0MzE1O1xuXHR0ZXh0LWRlY29yYXRpb246IG92ZXJsaW5lICNhZWFmMWUgNXB4O1xuXHR0cmFuc2l0aW9uOiAwLjM7XG5cdHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLm1lbnUtb3B0LXNlbGVjdGVkOmhvdmVyIHtcblx0Y29sb3I6ICM1ZTQzMTU7XG5cdHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmUgI2FlYWYxZSA1cHg7XG5cdHRyYW5zaXRpb246IDAuMztcblx0dHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xufVxuXG5cbi8qIHRhYiBkaXNwbGF5ICovXG4udGFiLWRpc3BsYXkge1xuXHR3aWR0aDogOTUlO1xuXHRoZWlnaHQ6IDgwJTtcblx0YmFja2dyb3VuZC1jb2xvcjogI2VlZWNlYztcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xuXHRkaXNwbGF5OiBmbGV4O1xufVxuXG4uaGFsZi1jb250IHtcblx0d2lkdGg6IDUwJTtcblx0aGVpZ2h0OiA5NSU7XG5cdHBhZGRpbmc6IDEwcHg7XG59XG5cbi5oYWxmLWNvbnQ6bnRoLWNoaWxkKG9kZCl7XG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn1cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Q0FDQywwQkFBMEI7Q0FDMUIsWUFBWTtDQUNaLGFBQWE7Q0FDYixVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZ0RBQWdEO0FBQ2pEOztBQUVBLFNBQVM7QUFDVDtDQUNDLGdCQUFnQjtDQUNoQixpQkFBaUI7Q0FDakIsZUFBZTtDQUNmLGNBQWM7Q0FDZCxpQkFBaUI7Q0FDakIsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxZQUFZO0NBQ1osc0NBQXNDO0NBQ3RDLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxxQ0FBcUM7Q0FDckMsZUFBZTtDQUNmLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxxQ0FBcUM7Q0FDckMsZUFBZTtDQUNmLHFCQUFxQjtBQUN0Qjs7O0FBR0EsZ0JBQWdCO0FBQ2hCO0NBQ0MsVUFBVTtDQUNWLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsa0JBQWtCO0NBQ2xCLGFBQWE7QUFDZDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0NBQ1gsYUFBYTtBQUNkOztBQUVBO0NBQ0MscUJBQXFCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICAjZjZmM2YyO1xcblxcdHdpZHRoOiAxMDB2dztcXG5cXHRoZWlnaHQ6IDEwMHZoO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGVudCB7XFxuXFx0ZGlzcGxheTogZmxleDtcXG5cXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0d2lkdGg6IDEwMCU7XFxuXFx0aGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubWFpbi1oZWFkaW5nIHtcXG5cXHRjb2xvcjogIzM1Mzg0YjtcXG5cXHRmb250LXNpemU6IDRyZW07XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgb3ZlcmxpbmUgICNlY2E5MzUgNXB4O1xcbn1cXG5cXG4vKiBNRU5VICovXFxuLm1lbnUtb3B0IHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcblxcdGZvbnQtc2l6ZTogMS4zcmVtO1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG5cXHRtYXJnaW46IDEuM3JlbTtcXG5cXHRmb250LXdlaWdodDogYm9sZDtcXG5cXHRjb2xvcjogIzM1Mzg0YjtcXG5cXHR0cmFuc2l0aW9uOiAwLjNzO1xcbn1cXG5cXG4ubWVudS1vcHQ6aG92ZXIge1xcblxcdGNvbG9yOiAjMmYyMTBhO1xcblxcdHBhZGRpbmc6IDVweDtcXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSAjZWNhOTM1IDVweDtcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5tZW51LW9wdC1zZWxlY3RlZCB7XFxuXFx0Y29sb3I6ICM1ZTQzMTU7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBvdmVybGluZSAjYWVhZjFlIDVweDtcXG5cXHR0cmFuc2l0aW9uOiAwLjM7XFxuXFx0dHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ubWVudS1vcHQtc2VsZWN0ZWQ6aG92ZXIge1xcblxcdGNvbG9yOiAjNWU0MzE1O1xcblxcdHRleHQtZGVjb3JhdGlvbjogb3ZlcmxpbmUgI2FlYWYxZSA1cHg7XFxuXFx0dHJhbnNpdGlvbjogMC4zO1xcblxcdHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG59XFxuXFxuXFxuLyogdGFiIGRpc3BsYXkgKi9cXG4udGFiLWRpc3BsYXkge1xcblxcdHdpZHRoOiA5NSU7XFxuXFx0aGVpZ2h0OiA4MCU7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogI2VlZWNlYztcXG5cXHRib3JkZXItcmFkaXVzOiA1cHg7XFxuXFx0ZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhhbGYtY29udCB7XFxuXFx0d2lkdGg6IDUwJTtcXG5cXHRoZWlnaHQ6IDk1JTtcXG5cXHRwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4uaGFsZi1jb250Om50aC1jaGlsZChvZGQpe1xcblxcdGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuaC1mbGV4IHtcblx0ZGlzcGxheTogZmxleDtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG5cbi52LWNlbnRlci1mbGV4IHtcblx0ZGlzcGxheTogZmxleDtcblx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnYtZ2FwLWZsZXgge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdXRpbGl0aWVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7Q0FDbkIsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHNCQUFzQjtDQUN0QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2Isc0JBQXNCO0NBQ3RCLDZCQUE2QjtBQUM5QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuaC1mbGV4IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFx0anVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcbi52LWNlbnRlci1mbGV4IHtcXG5cXHRkaXNwbGF5OiBmbGV4O1xcblxcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnYtZ2FwLWZsZXgge1xcblxcdGRpc3BsYXk6IGZsZXg7XFxuXFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaG9tZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2hvbWUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdXRpbGl0aWVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdXRpbGl0aWVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuLi9zdHlsZXMvaG9tZS5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvdXRpbGl0aWVzLmNzcyc7XG5pbXBvcnQgKiBhcyB1dGlsaXRpZXMgZnJvbSAnLi91dGlsaXRpZXMuanMnO1xuZXhwb3J0IHsgcmVuZGVyIH07XG5cblxuY29uc3QgbWFpbkNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnQnKTtcbmNvbnN0IHN1YkNvbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3ViQ29udCcpO1xuXG4vKk1BSU4gQ09OVEVOVCovXG5tYWluQ29udC5jbGFzc0xpc3QuYWRkKCd2LWNlbnRlci1mbGV4Jyk7XG5cbmNvbnN0IGhlYWRDb250ID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdkaXYnLCBbJ2gtZmxleCcsICdoZWFkQ29udCddLCBmYWxzZSwgJ2hlYWRpbmctY29udCcpO1xuY29uc3QgaDEgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ2gxJywgW10sICdPdXIgSGlzdG9yeScsICdob21lLWgxJyk7XG5jb25zdCBoZWFkaW5nSW1nID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdpbWcnLCBbXSwgZmFsc2UsICdoZWFkaW5nSW1nLWhvbWUnKTtcblxuaGVhZGluZ0ltZy5zcmMgPSAnLi4vaW1nL291ci1oaXN0b3J5LmpwZydcblxuaGVhZENvbnQuYXBwZW5kQ2hpbGQoaDEpO1xuaGVhZENvbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0ltZyk7XG5cblxuY29uc3QgaW5mb0NvbnQgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ2RpdicsIFsndi1jZW50ZXItZmxleCddKTtcbmNvbnN0IHdob1AgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ3AnLCBbXSwgJ1dlLCBUaGUgTWVudSwgd2VyZSBmb3VuZGVkIGluIDIwMjMgYnkgYSBncm91cCBvZiBmcmllbmRzIHdobyB3ZXJlIHBhc3Npb25hdGUgYWJvdXQgZm9vZCwgc3VzdGFpbmFiaWxpdHksIGFuZCBzb2NpYWwganVzdGljZS4gV2Ugd2FudGVkIHRvIGNyZWF0ZSBhIHJlc3RhdXJhbnQgdGhhdCB3b3VsZCBiZSBnb29kIGZvciB0aGUgcGxhbmV0IGFuZCBmb3IgdGhlIHBlb3BsZSB3aG8gYXRlIHRoZXJlLicpO1xuY29uc3Qgd2hlcmVQID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdwJywgW10sICdXZSBhcmUgbG9jYXRlZCBvbiBhIHNtYWxsIGZhcm0gaW4gdGhlIGNvdW50cnlzaWRlLiBXZSBncm93IG91ciBvd24gdmVnZXRhYmxlcywgcmFpc2Ugb3VyIG93biBjaGlja2VucywgYW5kIHVzZSBzb2xhciBwb3dlciB0byBnZW5lcmF0ZSBlbGVjdHJpY2l0eS4gV2UgYWxzbyBjb21wb3N0IGFsbCBvZiBvdXIgZm9vZCB3YXN0ZS4nKTtcbmNvbnN0IGdvZXNQID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdwJywgW10sICdBIHBvcnRpb24gb2YgdGhlIHByb2NlZWRzIGZyb20gZXZlcnkgbWVhbCBzb2xkIGF0IFRoZSBNZW51IGdvZXMgdG8gYSBsb2NhbCBmb29kIGJhbmsuIFdlIGhhdmUgaGVscGVkIHRvIGZlZWQgdGhvdXNhbmRzIG9mIGh1bmdyeSBwZW9wbGUgc2luY2Ugd2Ugb3BlbmVkIG91ciBkb29ycy4nKTtcbmNvbnN0IHByb3VkUCA9IHV0aWxpdGllcy5jcmVhdGVFbCgncCcsIFtdLCAnV2UgYXJlIHByb3VkIG9mIG91ciBoaXN0b3J5IGFuZCBvdXIgbWlzc2lvbi4gV2UgYXJlIGNvbW1pdHRlZCB0byBjb250aW51aW5nIHRvIHNlcnZlIG91ciBjb21tdW5pdHkgYW5kIHRvIG1ha2luZyBhIHBvc2l0aXZlIGltcGFjdCBvbiB0aGUgcGxhbmV0LicpO1xuXG5pbmZvQ29udC5hcHBlbmRDaGlsZCh3aG9QKTtcbmluZm9Db250LmFwcGVuZENoaWxkKHdoZXJlUCk7XG5pbmZvQ29udC5hcHBlbmRDaGlsZChnb2VzUCk7XG5pbmZvQ29udC5hcHBlbmRDaGlsZChwcm91ZFApO1xuXG4vKk1BSU4gQ09OVEVOVCovXG5cbi8qU1VCIENPTlRFTlQqL1xuXG5jb25zdCBjaGFyaXR5Q29udCA9IHV0aWxpdGllcy5jcmVhdGVFbCgnZGl2JywgW10sIGZhbHNlLCAnY2hhcml0eS1jb250Jyk7XG5jb25zdCBoMkNoYXJpdHkgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ2gyJywgW10sICdDaGFyaXR5JywgJ2NoYXJpdHktaDInKTtcbmNvbnN0IHBDaGFyaXR5ID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdwJywgW10sIGZhbHNlLCAnY2hhcml0eS1wJyk7XG5cbi8vIGFzIHRoZSB0ZXh0IGlzIGxvbmcgaSBwcmVmZXJlZCB0byBub3QgdXNlIHRoZSBjb3JyZXNwb25kZW50IGFyZ3VtZW50IGluIC5jcmVhdGVFbCBmb3IgdGV4dCwgaW5zdGVhZFxuLy8gaSBkZWNpZGVkIHRvIGFzc2lnbiBpdHMgdGV4dCBhcGFydCBmcm9tIC5jcmVhdGVFbDtcbnBDaGFyaXR5LnRleHRDb250ZW50ID0gJ1RoZSBNZW51IGlzIGNvbW1pdHRlZCB0byBnaXZpbmcgYmFjayB0byBvdXIgY29tbXVuaXR5LiBXZSBkb25hdGUgZm9vZCB0byBsb2NhbCBmb29kIGJhbmtzIGFuZCBzaGVsdGVycywgYW5kIHdlIGhvc3QgZnVuZHJhaXNpbmcgZXZlbnRzIGZvciBjaGFyaXRpZXMgdGhhdCBzdXBwb3J0IGltcG9ydGFudCBjYXVzZXMuIFdlIGFsc28gZW5jb3VyYWdlIG91ciBjdXN0b21lcnMgdG8gdm9sdW50ZWVyIHRoZWlyIHRpbWUgb3Igc2VydmljZXMgdG8gaGVscCB0aG9zZSBpbiBuZWVkLiBXZSBiZWxpZXZlIHRoYXQgZXZlcnlvbmUgaGFzIGEgcmVzcG9uc2liaWxpdHkgdG8gZ2l2ZSBiYWNrLCBhbmQgd2UgYXJlIHByb3VkIHRvIGRvIG91ciBwYXJ0JztcblxuXG5jaGFyaXR5Q29udC5hcHBlbmRDaGlsZChoMkNoYXJpdHkpO1xuY2hhcml0eUNvbnQuYXBwZW5kQ2hpbGQocENoYXJpdHkpO1xuXG5jb25zdCBzdXN0YWluYWJsZUNvbnQgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ2RpdicsIFtdLCBmYWxzZSwgJ3N1c3RhaW5hYmxlLWNvbnQnKTtcbmNvbnN0IGgyU3VzdGFpbmFibGUgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ2gyJywgW10sICdTZWxmLXN1c3RhaW5hYmxlJywgJ3N1c3RhaW5hYmxlLWgyJyk7XG5jb25zdCBwU3VzdGFpbmFibGUgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ3AnLCBbXSwgZmFsc2UsICdzdXN0YWluYWJsZS1wJyk7XG5cbnBTdXN0YWluYWJsZS50ZXh0Q29udGVudCA9ICdUaGUgTWVudSBpcyBjb21taXR0ZWQgdG8gc3VzdGFpbmFiaWxpdHkuIFdlIGJlbGlldmUgdGhhdCBpdCBpcyBpbXBvcnRhbnQgdG8gcmVkdWNlIG91ciBpbXBhY3Qgb24gdGhlIGVudmlyb25tZW50LCBhbmQgd2UgYXJlIHRha2luZyBzdGVwcyB0byBkbyBzby5XZSBncm93IG91ciBvd24gZm9vZCBpbiBvdXIgZ2FyZGVuLCB3aGljaCByZWR1Y2VzIG91ciByZWxpYW5jZSBvbiBpbXBvcnRlZCBwcm9kdWNlLiBXZSBhbHNvIHVzZSByZW5ld2FibGUgZW5lcmd5IHNvdXJjZXMsIHN1Y2ggYXMgc29sYXIgcG93ZXIsIHRvIHBvd2VyIG91ciByZXN0YXVyYW50LldlIGFyZSBhbHNvIHdvcmtpbmcgdG8gcmVkdWNlIG91ciB3YXN0ZS4gV2UgY29tcG9zdCBmb29kIHNjcmFwcyBhbmQgcmVjeWNsZSBwYXBlciwgcGxhc3RpYywgYW5kIGdsYXNzLiBXZSBhbHNvIHVzZSBiaW9kZWdyYWRhYmxlIHV0ZW5zaWxzIGFuZCBzdHJhd3MuIFdlIGJlbGlldmUgdGhhdCBzdXN0YWluYWJpbGl0eSBpcyBpbXBvcnRhbnQgZm9yIHRoZSBmdXR1cmUgb2Ygb3VyIHBsYW5ldCwgYW5kIHdlIGFyZSBjb21taXR0ZWQgdG8gZG9pbmcgb3VyIHBhcnQuJztcblxuc3VzdGFpbmFibGVDb250LmFwcGVuZENoaWxkKGgyU3VzdGFpbmFibGUpO1xuc3VzdGFpbmFibGVDb250LmFwcGVuZENoaWxkKHBTdXN0YWluYWJsZSk7XG5cblxuc3ViQ29udC5jbGFzc0xpc3QuYWRkKCd2LWdhcC1mbGV4Jyk7XG5cbi8qU1VCIENPTlRFTlQqL1xuXG4vKiBSRU5ERVIgRlVOQ1RJT046IEFsbCBlbGVtZW50cyBhcmUgYWxyZWFkeSBjcmVhdGVkLFxuXHRcdFx0XHRcdHdlIGp1c3QgaGF2ZSB0byBhcHBlbmQgaXQgdG8gZWFjaCBjb3JyZXNwb25kaW5nXG5cdFx0XHRcdFx0Y29udFxuKi9cblxuZnVuY3Rpb24gcmVuZGVyKCl7XG5cdC8vIE1BSU4gQ09OVEVOVFxuXHRpbmRleC5tYWluQ29udC5hcHBlbmRDaGlsZChoZWFkQ29udCk7XG5cdGluZGV4Lm1haW5Db250LmFwcGVuZENoaWxkKGluZm9Db250KTtcblx0Ly8gU1VCIENPTlRFTlRcblx0aW5kZXguc3ViQ29udC5hcHBlbmRDaGlsZChjaGFyaXR5Q29udCk7XG5cdGluZGV4LnN1YkNvbnQuYXBwZW5kQ2hpbGQoc3VzdGFpbmFibGVDb250KTtcblxuXHRjb25zb2xlLmxvZygnaGV5Jylcbn1cblxuLypSRU5ERVIgRlVOQ1RJT04qLyIsImltcG9ydCAnLi4vc3R5bGVzL3N0eWxlcy5jc3MnO1xuaW1wb3J0ICcuLi9zdHlsZXMvdXRpbGl0aWVzLmNzcyc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICcuL2hvbWUuanMnO1xuaW1wb3J0ICogYXMgdXRpbGl0aWVzIGZyb20gJy4vdXRpbGl0aWVzLmpzJztcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5jb250ZW50LmNsYXNzTGlzdC5hZGQoJ3ZjZW50ZXItZmxleCcpO1xuXG5cbi8qKi1IRUFESU5HIENPTlQtKiovXHQvLyAoZWxlbWVudCwgY3NzQ2xhc3MsIGlubmVyVGV4dCwgaWRcbmNvbnN0IGhlYWRpbmdDb250ID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdkaXYnLCBbJ2hlYWRpbmdDb250JywgJ2gtZmxleCddKTtcbmNvbnN0IG1haW5IZWFkaW5nID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdoMScsIFsnbWFpbi1oZWFkaW5nJ10sICdUaGUgTWVudScpO1xuY29uc3QgbWVudUNvbnQgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ3VsJywgWydtZW51LWNvbnQnLCAnaC1mbGV4JywgJ3Rlc3QnXSk7XG5jb25zdCBob21lUGFnZSA9IHV0aWxpdGllcy5jcmVhdGVFbCgnbGknLCBbJ21lbnUtb3B0J10sICdob21lJywgJ2hvbWVMaScpO1xuY29uc3QgbWVudVBhZ2UgPSB1dGlsaXRpZXMuY3JlYXRlRWwoJ2xpJywgWydtZW51LW9wdCddLCAnbWVudScsICdtZW51TGknKTtcbmNvbnN0IGNvbnRhY3RQYWdlID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdsaScsIFsnbWVudS1vcHQnXSwgJ2NvbnRhY3QnLCAnY29udGFjdExpJyk7XG5cbmhlYWRpbmdDb250LmFwcGVuZENoaWxkKG1haW5IZWFkaW5nKTtcbmhlYWRpbmdDb250LmFwcGVuZENoaWxkKG1lbnVDb250KTtcblxubWVudUNvbnQuYXBwZW5kQ2hpbGQoaG9tZVBhZ2UpO1xubWVudUNvbnQuYXBwZW5kQ2hpbGQobWVudVBhZ2UpO1xubWVudUNvbnQuYXBwZW5kQ2hpbGQoY29udGFjdFBhZ2UpO1xuLyoqLUhFQURJTkcgQ09OVC0qKi9cblxuXG5jb25zdCB0YWJEaXNwbGF5ID0gdXRpbGl0aWVzLmNyZWF0ZUVsKCdkaXYnLCBbJ3RhYi1kaXNwbGF5J10sIGZhbHNlLCAndGFiRGlzcGxheScpO1xuY29uc3QgbWFpbkNvbnQgPSBjcmVhdGVFbCgnZGl2JywgWydoYWxmLWNvbnQnXSwgZmFsc2UsICdtYWluQ29udCcpO1xuY29uc3Qgc3ViQ29udCA9IGNyZWF0ZUVsKCdkaXYnLCBbJ2hhbGYtY29udCddLCBmYWxzZSwgJ3N1YkNvbnQnKTtcblxudGFiRGlzcGxheS5hcHBlbmRDaGlsZChtYWluQ29udCk7XG50YWJEaXNwbGF5LmFwcGVuZENoaWxkKHN1YkNvbnQpO1xuXG5cdFxuXG5cbi8vZ2VuZXJhdGVzIHRoZSBiYXNlIGxheW91dFxudXRpbGl0aWVzLnJlbmRlckJhc2VMYXlvdXQodGFiRGlzcGxheSk7XG5cbi8vIHRhYiBiZWhhdmlvclxuY29uc3QgbWVudU9wdHMgPSBtZW51Q29udC5jaGlsZHJlbjtcblxuZm9yKGxldCBpID0gMDsgaSA8IG1lbnVPcHRzLmxlbmd0aDsgaSsrKXtcblx0bWVudU9wdHMuaXRlbShpKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wdHNIYW5kbGVyKVxufVxuXG5cbmZ1bmN0aW9uIG9wdHNIYW5kbGVyKGUpe1xuXG5cdC8vYXNzaWduIHNlbGVjdGVkIGNsYXNzXG5cdGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ21lbnUtb3B0LXNlbGVjdGVkJyk7XG5cblx0Ly93aXBlIG91dCBjdXJyZW50IGNvbnRlbnQgLSBUT0RPXG5cblx0Ly9kaXNwbGF5IGNvcnJlc3BvbmRlbnQgY29udGVudFxuXHRpZihlLnRhcmdldC5pZCA9PSAnaG9tZUxpJyl7XG5cdFx0aG9tZS5yZW5kZXIodGFiRGlzcGxheSk7XG5cdH1cblx0ZWxzZSBpZihlLnRhcmdldC5pZCA9PSAnbWVudUxpJyl7XG5cdFx0Y29uc29sZS5sb2coZS50YXJnZXQuaWQpXG5cdH1cblx0ZWxzZSBpZihlLnRhcmdldC5pZCA9PSAnY29udGFjdExpJyl7XG5cdFx0Y29uc29sZS5sb2coZS50YXJnZXQuaWQpXG5cdH1cblxuXHQvL3JlbW92ZSBzZWxlY3RlZCBjbGFzcyBmcm9tIHRoZSBwcmV2aW91cyBvcHRpb24gY2xpY2tlZFxuXHRmb3IobGV0IGkgPSAwOyBpIDwgbWVudU9wdHMubGVuZ3RoOyBpKyspe1xuXHRcdGlmKG1lbnVPcHRzLml0ZW0oaSkgIT09IGUudGFyZ2V0XG5cdFx0XHQmJiBtZW51T3B0cy5pdGVtKGkpLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1vcHQtc2VsZWN0ZWQnKSl7XG5cdFx0XHRtZW51T3B0cy5pdGVtKGkpLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtb3B0LXNlbGVjdGVkJyk7XG5cdFx0fVxuXHR9XG59XG5cblxuLy8gY29udGVudCBkaXZcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGluZ0NvbnQpO1xuY29udGVudC5hcHBlbmRDaGlsZCh0YWJEaXNwbGF5KTtcblxuLypyZW5kZXIgbGFzdCB0YWIgdmlzaXRlZCovXG5cbmNvbnNvbGUubG9nKCd0ZXN0Jylcbi8qKlRPIERPXG5bWF0tIEFkZCBhIHBhZ2UgbWVudVxuW1hdLSBpbXBvcnQvZXhwb3J0IHdpdGggdXRpbGl0aWVzLmpzXG5bb10tIERpZmZlcmVudCBsYXlvdXRzIGZvciBlYWNoIHBhZ2VcbltdXG4qKi9cbiIsImV4cG9ydCB7IGNyZWF0ZUVsLCByZW5kZXJCYXNlTGF5b3V0LCB0YWJzfTtcblxuZnVuY3Rpb24gY3JlYXRlRWwoZWxlbWVudCwgY3NzQ2xhc3MsIGlubmVyVGV4dCwgaWQpe1xuXHRjb25zdCBuZXdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5cdC8vYXNpZ25pbmcgY3NzIGNsYXNzL0NsYXNzZXNcblx0aWYoY3NzQ2xhc3MgJiYgY3NzQ2xhc3MubGVuZ3RoID4gMCl7XG5cdFx0aWYoQXJyYXkuaXNBcnJheShjc3NDbGFzcykpeyAvLyBhbiBhcnJheSB3YXMgcGFzc2VkXG5cdFx0XHRmb3IobGV0IGkgPSAwOyBpIDwgY3NzQ2xhc3MubGVuZ3RoOyBpKyspe1xuXHRcdFx0XHRuZXdFbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzW2ldKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRlbHNlIHsgLy9hIHN0cmluZyB3YXMgcGFzc2VkXG5cdFx0XHRuZXdFbC5jbGFzc0xpc3QuYWRkKGNzc0NsYXNzKTtcblx0XHR9XG5cdH1cblxuXHQvL2Fzc2lnbmluZyB0ZXh0IGlmIHBhc3NlZFxuXHRpZihpbm5lclRleHQpe1xuXHRcdG5ld0VsLnRleHRDb250ZW50ID0gaW5uZXJUZXh0XG5cdH1cblxuXHQvL2Fzc2lnbmluZyBpZFxuXHRpZihpZCl7XG5cdFx0bmV3RWwuc2V0QXR0cmlidXRlKCdpZCcsIGlkKTtcblx0fVxuXG5cdHJldHVybiBuZXdFbDtcbn1cblxuLy8gY3JlYXRlcyBhbmQgYXBwZW5kcyB0aGUgdHdvIGNvbHVtbnMgYmFzZSBsYXlvdXQgdG8gcGFyZW50RWxcbmZ1bmN0aW9uIHJlbmRlckJhc2VMYXlvdXQocGFyZW50RWwpe1xuXG5cdGNvbnN0IGxlZnRIYWxmID0gY3JlYXRlRWwoJ2RpdicsIFsnaGFsZi1jb250J10sIGZhbHNlLCAnbGVmdEhhbGYnKTtcblx0Y29uc3QgcmlnaHRIYWxmID0gY3JlYXRlRWwoJ2RpdicsIFsnaGFsZi1jb250J10sIGZhbHNlLCAncmlnaHRIYWxmJyk7XG5cblx0cGFyZW50RWwuYXBwZW5kQ2hpbGQobGVmdEhhbGYpO1xuXHRwYXJlbnRFbC5hcHBlbmRDaGlsZChyaWdodEhhbGYpO1xuXG5cdHJldHVybjtcbn1cblxuXG4vLyBrZWVwcyB0cmFjayBvZiB0aGUgY3VycmVudCB0YWIvbGFzdCBvbmUgdmlzaXRlZFxuY29uc3QgdGFicyA9IHtcblx0aG9tZTogdHJ1ZSxcblx0bWVudTogZmFsc2UsXG5cdGNvbnRhY3Q6IGZhbHNlXG59O1xuXG4vLyByZW1vdmUgYWxsIGN1cnJlbnQgY29udGVudCBmcm9tIHRoZSB0YWJzIGRpc3BsYVxuZnVuY3Rpb24gY2xlYW5EaXNwbGF5KCl7XG5cblx0cmV0dXJuXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==