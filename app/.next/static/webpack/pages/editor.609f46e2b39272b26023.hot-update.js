webpackHotUpdate_N_E("pages/editor",{

/***/ "./pages/editor.tsx":
/*!**************************!*\
  !*** ./pages/editor.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.tsx\");\n/* harmony import */ var _components_Emojis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Emojis */ \"./components/Emojis.ts\");\n\n\nvar _jsxFileName = \"/Users/jan/Documents/Programming/clubhousebio/app/pages/editor.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Editor() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      tabState = _useState[0],\n      setTabState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      cursorPositionState = _useState2[0],\n      setCursorPositionState = _useState2[1];\n\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var EmojiNameMapper = ['most_useful', 'creative', 'sport', 'travel'];\n  var data = \"asdasdasd asdasdasd\";\n\n  var handleChange = function handleChange(event) {\n    setCursorPositionState(event.target.selectionStart);\n    console.log(event.target.rows);\n  };\n\n  var insertMyText = function insertMyText(text) {\n    var textToInsert = text;\n    var cursorPosition = cursorPositionState;\n    var textBeforeCursorPosition = textAreaRef.current.value.substring(0, cursorPosition);\n    var textAfterCursorPosition = textAreaRef.current.value.substring(cursorPosition, textAreaRef.current.value.length);\n    textAreaRef.current.value = textBeforeCursorPosition + textToInsert + textAfterCursorPosition;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"sm:px-6 lg:px-8 max-w-screen-xl mx-auto\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col justify-between min-h-screen\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        className: \"\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"mt-14 flex-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"p-2 text-4xl font-semibold text-center text-gray-900\",\n          children: \"Bio Editor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 41,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"sm:block hidden mt-16\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n                className: \" flex\",\n                \"aria-label\": \"Tabs\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"mr-4 rounded-xl px-3 text-2xl font-medium text-gray-700 \".concat(tabState === 0 ? 'bg-clubhouse-orange' : 'bg-gray-400'),\n                  onClick: function onClick() {\n                    return setTabState(0);\n                  },\n                  children: \"Most useful\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 48,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"mr-4 rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 \".concat(tabState === 1 ? 'bg-clubhouse-orange' : 'bg-gray-400'),\n                  onClick: function onClick() {\n                    return setTabState(1);\n                  },\n                  children: \"Creative\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 57,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"mr-4 rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 \".concat(tabState === 2 ? 'bg-clubhouse-orange' : 'bg-gray-400'),\n                  onClick: function onClick() {\n                    return setTabState(2);\n                  },\n                  children: \"Sport\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 66,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 \".concat(tabState === 3 ? 'bg-clubhouse-orange' : 'bg-gray-400'),\n                  onClick: function onClick() {\n                    return setTabState(3);\n                  },\n                  children: \"Flags\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 76,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: \"https://emojipedia.org\",\n                  target: \"_blank\",\n                  className: \"ml-auto\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    type: \"button\",\n                    className: \"rounded-xl px-3 py-2 text-2xl font-medium text-white bg-green-700\",\n                    children: \"Click here for more emojis\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 90,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 85,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 47,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"mt-4\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex flex-wrap w-4/5\",\n                  children: _components_Emojis__WEBPACK_IMPORTED_MODULE_3__[\"default\"][EmojiNameMapper[tabState]].map(function (element) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                      type: \"button\",\n                      className: \"mr-2 text-5xl\",\n                      onClick: function onClick() {\n                        insertMyText(element);\n                      },\n                      children: element\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 101,\n                      columnNumber: 23\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 99,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 98,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 46,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center mt-8\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n              // data-row-maxlength={20}\n              \"data-limit-row-len\": \"true\" // maxLength={10}\n              ,\n              rows: 20,\n              cols: 27,\n              wrap: \"hard\",\n              className: \"p-2 text-2xl outline-none\",\n              onChange: handleChange,\n              onBlur: handleChange,\n              onClick: handleChange,\n              ref: textAreaRef,\n              children: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 118,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 116,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 40,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        className: \"h-8 mb-4\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"Built with \\u2764\\uFE0F by Jan Ruettinger\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 137,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Editor, \"7Xb5PG3ZHq0uD1e0ni+SjySaA7E=\");\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdG9yLnRzeD9mNTE1Il0sIm5hbWVzIjpbIkVkaXRvciIsInVzZVN0YXRlIiwidGFiU3RhdGUiLCJzZXRUYWJTdGF0ZSIsImN1cnNvclBvc2l0aW9uU3RhdGUiLCJzZXRDdXJzb3JQb3NpdGlvblN0YXRlIiwidGV4dEFyZWFSZWYiLCJ1c2VSZWYiLCJFbW9qaU5hbWVNYXBwZXIiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJzZWxlY3Rpb25TdGFydCIsImNvbnNvbGUiLCJsb2ciLCJyb3dzIiwiaW5zZXJ0TXlUZXh0IiwidGV4dCIsInRleHRUb0luc2VydCIsImN1cnNvclBvc2l0aW9uIiwidGV4dEJlZm9yZUN1cnNvclBvc2l0aW9uIiwiY3VycmVudCIsInZhbHVlIiwic3Vic3RyaW5nIiwidGV4dEFmdGVyQ3Vyc29yUG9zaXRpb24iLCJsZW5ndGgiLCJFbW9qaXMiLCJtYXAiLCJlbGVtZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUFBLGtCQUNDQyxzREFBUSxDQUFDLENBQUQsQ0FEVDtBQUFBLE1BQ3hCQyxRQUR3QjtBQUFBLE1BQ2RDLFdBRGM7O0FBQUEsbUJBRXVCRixzREFBUSxDQUFDLENBQUQsQ0FGL0I7QUFBQSxNQUV4QkcsbUJBRndCO0FBQUEsTUFFSEMsc0JBRkc7O0FBRy9CLE1BQU1DLFdBQVcsR0FBR0Msb0RBQU0sQ0FBQyxJQUFELENBQTFCO0FBRUEsTUFBTUMsZUFBZSxHQUFHLENBQUMsYUFBRCxFQUFnQixVQUFoQixFQUE0QixPQUE1QixFQUFxQyxRQUFyQyxDQUF4QjtBQUVBLE1BQU1DLElBQUksd0JBQVY7O0FBRUEsTUFBTUMsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUFnQjtBQUNuQ04sMEJBQXNCLENBQUNNLEtBQUssQ0FBQ0MsTUFBTixD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LGVBb0dFO0FBQVEsaUJBQVMsRUFBQyxVQUFsQjtBQUFBLCtCQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBHRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0R0Q7O0dBekl1QlQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3BhZ2VzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgRW1vamlzIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamlzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKCkge1xuICBjb25zdCBbdGFiU3RhdGUsIHNldFRhYlN0YXRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3Vyc29yUG9zaXRpb25TdGF0ZSwgc2V0Q3Vyc29yUG9zaXRpb25TdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdGV4dEFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgRW1vamlOYW1lTWFwcGVyID0gWydtb3N0X3VzZWZ1bCcsICdjcmVhdGl2ZScsICdzcG9ydCcsICd0cmF2ZWwnXTtcblxuICBjb25zdCBkYXRhID0gYGFzZGFzZGFzZCBhc2Rhc2Rhc2RgO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChldmVudDogYW55KSA9PiB7XG4gICAgc2V0Q3Vyc29yUG9zaXRpb25TdGF0ZShldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQpO1xuICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5yb3dzKTtcbiAgfTtcblxuICBjb25zdCBpbnNlcnRNeVRleHQgPSAodGV4dDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgdGV4dFRvSW5zZXJ0ID0gdGV4dDtcbiAgICBjb25zdCBjdXJzb3JQb3NpdGlvbiA9IGN1cnNvclBvc2l0aW9uU3RhdGU7XG4gICAgY29uc3QgdGV4dEJlZm9yZUN1cnNvclBvc2l0aW9uID0gdGV4dEFyZWFSZWYuY3VycmVudC52YWx1ZS5zdWJzdHJpbmcoXG4gICAgICAwLFxuICAgICAgY3Vyc29yUG9zaXRpb25cbiAgICApO1xuICAgIGNvbnN0IHRleHRBZnRlckN1cnNvclBvc2l0aW9uID0gdGV4dEFyZWFSZWYuY3VycmVudC52YWx1ZS5zdWJzdHJpbmcoXG4gICAgICBjdXJzb3JQb3NpdGlvbixcbiAgICAgIHRleHRBcmVhUmVmLmN1cnJlbnQudmFsdWUubGVuZ3RoXG4gICAgKTtcbiAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnZhbHVlID1cbiAgICAgIHRleHRCZWZvcmVDdXJzb3JQb3NpdGlvbiArIHRleHRUb0luc2VydCArIHRleHRBZnRlckN1cnNvclBvc2l0aW9uO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzbTpweC02IGxnOnB4LTggbWF4LXctc2NyZWVuLXhsIG14LWF1dG9cIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWJldHdlZW4gbWluLWgtc2NyZWVuXCI+XG4gICAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPE5hdkJhciAvPlxuICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPVwibXQtMTQgZmxleC0xXCI+XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInAtMiB0ZXh0LTR4bCBmb250LXNlbWlib2xkIHRleHQtY2VudGVyIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgIEJpbyBFZGl0b3JcbiAgICAgICAgICA8L2gxPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmJsb2NrIGhpZGRlbiBtdC0xNlwiPlxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiIGZsZXhcIiBhcmlhLWxhYmVsPVwiVGFic1wiPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbXItNCByb3VuZGVkLXhsIHB4LTMgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCAke1xuICAgICAgICAgICAgICAgICAgICAgIHRhYlN0YXRlID09PSAwID8gJ2JnLWNsdWJob3VzZS1vcmFuZ2UnIDogJ2JnLWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoMCl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIE1vc3QgdXNlZnVsXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLTQgcm91bmRlZC14bCBweC0zIHB5LTIgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCAke1xuICAgICAgICAgICAgICAgICAgICAgIHRhYlN0YXRlID09PSAxID8gJ2JnLWNsdWJob3VzZS1vcmFuZ2UnIDogJ2JnLWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoMSl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIENyZWF0aXZlXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLTQgcm91bmRlZC14bCBweC0zIHB5LTIgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCAke1xuICAgICAgICAgICAgICAgICAgICAgIHRhYlN0YXRlID09PSAyID8gJ2JnLWNsdWJob3VzZS1vcmFuZ2UnIDogJ2JnLWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoMil9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFNwb3J0XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm91bmRlZC14bCBweC0zIHB5LTIgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC1ncmF5LTcwMCAke1xuICAgICAgICAgICAgICAgICAgICAgIHRhYlN0YXRlID09PSAzID8gJ2JnLWNsdWJob3VzZS1vcmFuZ2UnIDogJ2JnLWdyYXktNDAwJ1xuICAgICAgICAgICAgICAgICAgICB9YH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VGFiU3RhdGUoMyl9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEZsYWdzXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Vtb2ppcGVkaWEub3JnXCJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibWwtYXV0b1wiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLXhsIHB4LTMgcHktMiB0ZXh0LTJ4bCBmb250LW1lZGl1bSB0ZXh0LXdoaXRlIGJnLWdyZWVuLTcwMFwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICBDbGljayBoZXJlIGZvciBtb3JlIGVtb2ppc1xuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXAgdy00LzVcIj5cbiAgICAgICAgICAgICAgICAgICAge0Vtb2ppc1tFbW9qaU5hbWVNYXBwZXJbdGFiU3RhdGVdXS5tYXAoKGVsZW1lbnQpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTIgdGV4dC01eGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnNlcnRNeVRleHQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtlbGVtZW50fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgICAgICAvLyBkYXRhLXJvdy1tYXhsZW5ndGg9ezIwfVxuICAgICAgICAgICAgICAgIGRhdGEtbGltaXQtcm93LWxlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIC8vIG1heExlbmd0aD17MTB9XG4gICAgICAgICAgICAgICAgcm93cz17MjB9XG4gICAgICAgICAgICAgICAgY29scz17Mjd9XG4gICAgICAgICAgICAgICAgd3JhcD1cImhhcmRcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LTJ4bCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlZj17dGV4dEFyZWFSZWZ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YX1cbiAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiaC04IG1iLTRcIj5cbiAgICAgICAgICA8ZGl2PkJ1aWx0IHdpdGgg4p2k77iPIGJ5IEphbiBSdWV0dGluZ2VyPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/editor.tsx\n");

/***/ })

})