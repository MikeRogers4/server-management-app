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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HomePage),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_os_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-os-utils */ \"node-os-utils\");\n/* harmony import */ var node_os_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_os_utils__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var nivo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! nivo */ \"nivo\");\n/* harmony import */ var nivo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(nivo__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nfunction Header({ title  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: title ? title : \"Default title\"\n    }, void 0, false, {\n        fileName: \"/workspace/pages/index.tsx\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, this);\n}\nfunction HomePage({ data  }) {\n    const pieData = [\n        {\n            \"id\": \"free\",\n            \"label\": \"free\",\n            \"value\": parseInt(data.freeGb, 10),\n            \"color\": \"hsl(126, 70%, 50%)\"\n        },\n        {\n            \"id\": \"used\",\n            \"label\": \"used\",\n            \"value\": parseInt(data.usedGb, 10),\n            \"color\": \"hsl(219, 70%, 50%)\"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                title: \"Server Details\"\n            }, void 0, false, {\n                fileName: \"/workspace/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: JSON.stringify(data)\n            }, void 0, false, {\n                fileName: \"/workspace/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: 200\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(nivo__WEBPACK_IMPORTED_MODULE_3__.ResponsivePie, {\n                    data: pieData,\n                    width: 200,\n                    height: 200\n                }, void 0, false, {\n                    fileName: \"/workspace/pages/index.tsx\",\n                    lineNumber: 27,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/workspace/pages/index.tsx\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n};\nasync function getServerSideProps() {\n    const cpuCount = node_os_utils__WEBPACK_IMPORTED_MODULE_1__.cpu.count();\n    const driveInfo = await node_os_utils__WEBPACK_IMPORTED_MODULE_1__.drive.info();\n    const memInfo = await node_os_utils__WEBPACK_IMPORTED_MODULE_1__.mem.info();\n    const data = lodash__WEBPACK_IMPORTED_MODULE_2__.merge(driveInfo, memInfo, {\n        cpuCount\n    });\n    return {\n        props: {\n            data\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQW9DO0FBQ1Q7QUFDUztBQUVwQyxTQUFTRyxNQUFNLENBQUMsRUFBRUMsS0FBSyxHQUFFLEVBQUU7SUFDekIscUJBQU8sOERBQUNDLElBQUU7a0JBQUVELEtBQUssR0FBR0EsS0FBSyxHQUFHLGVBQWU7Ozs7O1lBQU07Q0FDbEQ7QUFFYyxTQUFTRSxRQUFRLENBQUMsRUFBRUMsSUFBSSxHQUFFLEVBQUU7SUFDekMsTUFBTUMsT0FBTyxHQUFHO1FBQUM7WUFDZixJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFQyxRQUFRLENBQUNGLElBQUksQ0FBQ0csTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUNsQyxPQUFPLEVBQUUsb0JBQW9CO1NBQzlCO1FBQUU7WUFDRCxJQUFJLEVBQUUsTUFBTTtZQUNaLE9BQU8sRUFBRSxNQUFNO1lBQ2YsT0FBTyxFQUFFRCxRQUFRLENBQUNGLElBQUksQ0FBQ0ksTUFBTSxFQUFFLEVBQUUsQ0FBQztZQUNsQyxPQUFPLEVBQUUsb0JBQW9CO1NBQzlCO0tBQUM7SUFFRixxQkFDRTs7MEJBQ0UsOERBQUNSLE1BQU07Z0JBQUNDLEtBQUssRUFBRSxnQkFBZ0I7Ozs7O29CQUFJOzBCQUNuQyw4REFBQ1EsR0FBQzswQkFBRUMsSUFBSSxDQUFDQyxTQUFTLENBQUNQLElBQUksQ0FBQzs7Ozs7b0JBQUs7MEJBQzdCLDhEQUFDUSxLQUFHO2dCQUFDQyxLQUFLLEVBQUU7b0JBQUVDLE1BQU0sRUFBRSxHQUFHO2lCQUFFOzBCQUN6Qiw0RUFBQ2YsK0NBQWE7b0JBQ1pLLElBQUksRUFBRUMsT0FBTztvQkFDYlUsS0FBSyxFQUFFLEdBQUc7b0JBQ1ZELE1BQU0sRUFBRSxHQUFHOzs7Ozt3QkFDWDs7Ozs7b0JBQ0U7O29CQUNMLENBQ0o7Q0FDRjtBQUVNLGVBQWVFLGtCQUFrQixHQUFHO0lBQ3pDLE1BQU1DLFFBQVEsR0FBR3BCLG9EQUFhLEVBQUU7SUFDaEMsTUFBTXVCLFNBQVMsR0FBRyxNQUFNdkIscURBQWMsRUFBRTtJQUN4QyxNQUFNMEIsT0FBTyxHQUFHLE1BQU0xQixtREFBWSxFQUFFO0lBQ3BDLE1BQU1PLElBQUksR0FBR04seUNBQU8sQ0FBQ3NCLFNBQVMsRUFBRUcsT0FBTyxFQUFFO1FBQ3ZDTixRQUFRO0tBQ1QsQ0FBQztJQUVGLE9BQU87UUFDTFMsS0FBSyxFQUFFO1lBQ0x0QixJQUFJO1NBQ0w7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VydmVyLW1hbmFnZW1lbnQtYXBwLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgb3N1IGZyb20gJ25vZGUtb3MtdXRpbHMnXHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJ1xyXG5pbXBvcnQgeyBSZXNwb25zaXZlUGllIH0gZnJvbSAnbml2bydcclxuXHJcbmZ1bmN0aW9uIEhlYWRlcih7IHRpdGxlIH0pIHtcclxuICByZXR1cm4gPGgxPnt0aXRsZSA/IHRpdGxlIDogJ0RlZmF1bHQgdGl0bGUnfTwvaDE+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgZGF0YSB9KSB7XHJcbiAgY29uc3QgcGllRGF0YSA9IFt7XHJcbiAgICBcImlkXCI6IFwiZnJlZVwiLFxyXG4gICAgXCJsYWJlbFwiOiBcImZyZWVcIixcclxuICAgIFwidmFsdWVcIjogcGFyc2VJbnQoZGF0YS5mcmVlR2IsIDEwKSxcclxuICAgIFwiY29sb3JcIjogXCJoc2woMTI2LCA3MCUsIDUwJSlcIlxyXG4gIH0sIHtcclxuICAgIFwiaWRcIjogXCJ1c2VkXCIsXHJcbiAgICBcImxhYmVsXCI6IFwidXNlZFwiLFxyXG4gICAgXCJ2YWx1ZVwiOiBwYXJzZUludChkYXRhLnVzZWRHYiwgMTApLFxyXG4gICAgXCJjb2xvclwiOiBcImhzbCgyMTksIDcwJSwgNTAlKVwiXHJcbiAgfV1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIDxIZWFkZXIgdGl0bGU9eydTZXJ2ZXIgRGV0YWlscyd9IC8+XHJcbiAgICAgIDxwPntKU09OLnN0cmluZ2lmeShkYXRhKX08L3A+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAyMDAgfX0+XHJcbiAgICAgICAgPFJlc3BvbnNpdmVQaWVcclxuICAgICAgICAgIGRhdGE9e3BpZURhdGF9XHJcbiAgICAgICAgICB3aWR0aD17MjAwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsyMDB9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTZXJ2ZXJTaWRlUHJvcHMoKSB7XHJcbiAgY29uc3QgY3B1Q291bnQgPSBvc3UuY3B1LmNvdW50KClcclxuICBjb25zdCBkcml2ZUluZm8gPSBhd2FpdCBvc3UuZHJpdmUuaW5mbygpXHJcbiAgY29uc3QgbWVtSW5mbyA9IGF3YWl0IG9zdS5tZW0uaW5mbygpXHJcbiAgY29uc3QgZGF0YSA9IF8ubWVyZ2UoZHJpdmVJbmZvLCBtZW1JbmZvLCB7XHJcbiAgICBjcHVDb3VudFxyXG4gIH0pXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBwcm9wczoge1xyXG4gICAgICBkYXRhXHJcbiAgICB9XHJcbiAgfVxyXG59Il0sIm5hbWVzIjpbIm9zdSIsIl8iLCJSZXNwb25zaXZlUGllIiwiSGVhZGVyIiwidGl0bGUiLCJoMSIsIkhvbWVQYWdlIiwiZGF0YSIsInBpZURhdGEiLCJwYXJzZUludCIsImZyZWVHYiIsInVzZWRHYiIsInAiLCJKU09OIiwic3RyaW5naWZ5IiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJ3aWR0aCIsImdldFNlcnZlclNpZGVQcm9wcyIsImNwdUNvdW50IiwiY3B1IiwiY291bnQiLCJkcml2ZUluZm8iLCJkcml2ZSIsImluZm8iLCJtZW1JbmZvIiwibWVtIiwibWVyZ2UiLCJwcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "nivo":
/*!***********************!*\
  !*** external "nivo" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("nivo");

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