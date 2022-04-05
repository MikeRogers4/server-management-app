"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_os_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-os-utils */ \"node-os-utils\");\n/* harmony import */ var node_os_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_os_utils__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Header({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/workspace/pages/index.tsx\",\n        lineNumber: 5,\n        columnNumber: 10\n    }, this);\n}\nfunction HomePage({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Server Details\"\n            }, void 0, false, {\n                fileName: \"/workspace/pages/index.tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: JSON.stringify(data)\n            }, void 0, false, {\n                fileName: \"/workspace/pages/index.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nasync function getServerSideProps() {\n    const cpuCount = node_os_utils__WEBPACK_IMPORTED_MODULE_1__.cpu.count();\n    const driveInfo = await node_os_utils__WEBPACK_IMPORTED_MODULE_1__.drive.info();\n    const memInfo = await node_os_utils__WEBPACK_IMPORTED_MODULE_1__.mem.info();\n    const data = lodash__WEBPACK_IMPORTED_MODULE_2__.merge(driveInfo, memInfo, {\n        cpuCount\n    });\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFvQztBQUNUO0FBRTNCLFNBQVNFLE1BQU0sQ0FBQyxFQUFFQyxLQUFLLEdBQUUsRUFBRTtJQUN6QixxQkFBTyw4REFBQ0MsSUFBRTtrQkFBRUQsS0FBSyxHQUFHQSxLQUFLLEdBQUcsZUFBZTs7Ozs7WUFBTTtDQUNsRDtBQUVjLFNBQVNFLFFBQVEsQ0FBQyxFQUFFQyxJQUFJLEdBQUUsRUFBRTtJQUN6QyxxQkFDRTs7MEJBQ0UsOERBQUNKLE1BQU07Z0JBQUNDLEtBQUssRUFBRSxnQkFBZ0I7Ozs7O29CQUFJOzBCQUNuQyw4REFBQ0ksR0FBQzswQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNILElBQUksQ0FBQzs7Ozs7b0JBQUs7O29CQUM1QixDQUNKO0NBQ0Y7QUFFTSxlQUFlSSxrQkFBa0IsR0FBRztJQUN6QyxNQUFNQyxRQUFRLEdBQUdYLG9EQUFhLEVBQUU7SUFDaEMsTUFBTWMsU0FBUyxHQUFHLE1BQU1kLHFEQUFjLEVBQUU7SUFDeEMsTUFBTWlCLE9BQU8sR0FBRyxNQUFNakIsbURBQVksRUFBRTtJQUNwQyxNQUFNTSxJQUFJLEdBQUdMLHlDQUFPLENBQUNhLFNBQVMsRUFBRUcsT0FBTyxFQUFFO1FBQ3ZDTixRQUFRO0tBQ1QsQ0FBQztJQUVGLE9BQU87UUFDTFMsS0FBSyxFQUFFO1lBQ0xkLElBQUk7U0FDTDtLQUNGO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zZXJ2ZXItbWFuYWdlbWVudC1hcHAvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBvc3UgZnJvbSAnbm9kZS1vcy11dGlscydcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnXHJcblxyXG5mdW5jdGlvbiBIZWFkZXIoeyB0aXRsZSB9KSB7XHJcbiAgcmV0dXJuIDxoMT57dGl0bGUgPyB0aXRsZSA6ICdEZWZhdWx0IHRpdGxlJ308L2gxPlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lUGFnZSh7IGRhdGEgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8SGVhZGVyIHRpdGxlPXsnU2VydmVyIERldGFpbHMnfSAvPlxyXG4gICAgICA8cD57SlNPTi5zdHJpbmdpZnkoZGF0YSl9PC9wPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xyXG4gIGNvbnN0IGNwdUNvdW50ID0gb3N1LmNwdS5jb3VudCgpXHJcbiAgY29uc3QgZHJpdmVJbmZvID0gYXdhaXQgb3N1LmRyaXZlLmluZm8oKVxyXG4gIGNvbnN0IG1lbUluZm8gPSBhd2FpdCBvc3UubWVtLmluZm8oKVxyXG4gIGNvbnN0IGRhdGEgPSBfLm1lcmdlKGRyaXZlSW5mbywgbWVtSW5mbywge1xyXG4gICAgY3B1Q291bnRcclxuICB9KVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgZGF0YVxyXG4gICAgfVxyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJvc3UiLCJfIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwiZGF0YSIsInAiLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY3B1Q291bnQiLCJjcHUiLCJjb3VudCIsImRyaXZlSW5mbyIsImRyaXZlIiwiaW5mbyIsIm1lbUluZm8iLCJtZW0iLCJtZXJnZSIsInByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "node-os-utils":
/*!********************************!*\
  !*** external "node-os-utils" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("node-os-utils");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();