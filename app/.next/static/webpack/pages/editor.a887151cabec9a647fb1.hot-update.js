webpackHotUpdate_N_E("pages/editor",{

/***/ "./pages/editor.tsx":
/*!**************************!*\
  !*** ./pages/editor.tsx ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Editor; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.tsx\");\n/* harmony import */ var _components_Emojis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Emojis */ \"./components/Emojis.ts\");\n\n\nvar _jsxFileName = \"/Users/jan/Documents/Programming/clubhousebio/app/pages/editor.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction Editor() {\n  _s();\n\n  var _this = this;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      tabState = _useState[0],\n      setTabState = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(0),\n      cursorPositionState = _useState2[0],\n      setCursorPositionState = _useState2[1];\n\n  var textAreaRef = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useRef\"])(null);\n  var EmojiNameMapper = ['most_useful', 'creative', 'sport', 'flags'];\n  var data = \"asdasdasd asdasdasd\";\n\n  var handleChange = function handleChange(event) {\n    setCursorPositionState(event.target.selectionStart);\n  };\n\n  var insertMyText = function insertMyText(text) {\n    var textToInsert = text;\n    var cursorPosition = cursorPositionState;\n    var textBeforeCursorPosition = textAreaRef.current.value.substring(0, cursorPosition);\n    var textAfterCursorPosition = textAreaRef.current.value.substring(cursorPosition, textAreaRef.current.value.length);\n    textAreaRef.current.value = textBeforeCursorPosition + textToInsert + textAfterCursorPosition;\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"sm:px-6 lg:px-8 max-w-screen-xl mx-auto\",\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"flex flex-col justify-between min-h-screen\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n        className: \"\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 37,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n        className: \"mt-14 flex-1\",\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          className: \"p-2 text-4xl font-semibold text-center text-gray-900\",\n          children: \"Bio Editor\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"sm:block hidden mt-16\",\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n                className: \" flex\",\n                \"aria-label\": \"Tabs\",\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"mr-4 rounded-xl px-3 text-2xl font-medium text-gray-700 \".concat(tabState === 0 ? 'bg-clubhouse-orange' : 'bg-gray-400'),\n                  onClick: function onClick() {\n                    return setTabState(0);\n                  },\n                  children: \"Most useful\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"mr-4 rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 \".concat(tabState === 1 ? 'bg-clubhouse-orange' : 'bg-gray-400'),\n                  onClick: function onClick() {\n                    return setTabState(1);\n                  },\n                  children: \"Creative\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 56,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"mr-4 rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 \".concat(tabState === 2 ? 'bg-clubhouse-orange' : 'bg-gray-400'),\n                  onClick: function onClick() {\n                    return setTabState(2);\n                  },\n                  children: \"Sport\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 65,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                  type: \"button\",\n                  className: \"rounded-xl px-3 py-2 text-2xl font-medium text-gray-700 \".concat(tabState === 3 ? 'bg-clubhouse-orange' : 'bg-gray-400'),\n                  onClick: function onClick() {\n                    return setTabState(3);\n                  },\n                  children: \"Flags\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 75,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                  href: \"https://emojipedia.org\",\n                  target: \"_blank\",\n                  className: \"ml-auto\",\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                    type: \"button\",\n                    className: \"rounded-xl px-3 py-2 text-2xl font-medium text-white bg-green-700\",\n                    children: \"Click here for more emojis\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 89,\n                    columnNumber: 21\n                  }, this)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 84,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                className: \"mt-4\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n                  className: \"flex flex-wrap w-4/5\",\n                  children: _components_Emojis__WEBPACK_IMPORTED_MODULE_3__[\"default\"][EmojiNameMapper[tabState]].map(function (element) {\n                    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                      type: \"button\",\n                      className: \"mr-2 text-5xl\",\n                      onClick: function onClick() {\n                        insertMyText(element);\n                      },\n                      children: element\n                    }, void 0, false, {\n                      fileName: _jsxFileName,\n                      lineNumber: 100,\n                      columnNumber: 23\n                    }, _this);\n                  })\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 98,\n                  columnNumber: 19\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 97,\n                columnNumber: 17\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 45,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 43,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"flex justify-center mt-8\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"textarea\", {\n              \"data-row-maxlength\": \"60\" // cols={60}\n              ,\n              \"data-limit-row-len\": \"true\",\n              rows: 20,\n              className: \"p-2 text-2xl outline-none\",\n              onChange: handleChange,\n              onBlur: handleChange,\n              onClick: handleChange,\n              ref: textAreaRef,\n              children: data\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 117,\n              columnNumber: 15\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 116,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 115,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"footer\", {\n        className: \"h-8 mb-4\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          children: \"Built with \\u2764\\uFE0F by Jan Ruettinger\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 134,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 133,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 34,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Editor, \"7Xb5PG3ZHq0uD1e0ni+SjySaA7E=\");\n\n_c = Editor;\n\nvar _c;\n\n$RefreshReg$(_c, \"Editor\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZWRpdG9yLnRzeD9mNTE1Il0sIm5hbWVzIjpbIkVkaXRvciIsInVzZVN0YXRlIiwidGFiU3RhdGUiLCJzZXRUYWJTdGF0ZSIsImN1cnNvclBvc2l0aW9uU3RhdGUiLCJzZXRDdXJzb3JQb3NpdGlvblN0YXRlIiwidGV4dEFyZWFSZWYiLCJ1c2VSZWYiLCJFbW9qaU5hbWVNYXBwZXIiLCJkYXRhIiwiaGFuZGxlQ2hhbmdlIiwiZXZlbnQiLCJ0YXJnZXQiLCJzZWxlY3Rpb25TdGFydCIsImluc2VydE15VGV4dCIsInRleHQiLCJ0ZXh0VG9JbnNlcnQiLCJjdXJzb3JQb3NpdGlvbiIsInRleHRCZWZvcmVDdXJzb3JQb3NpdGlvbiIsImN1cnJlbnQiLCJ2YWx1ZSIsInN1YnN0cmluZyIsInRleHRBZnRlckN1cnNvclBvc2l0aW9uIiwibGVuZ3RoIiwiRW1vamlzIiwibWFwIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFBQSxrQkFDQ0Msc0RBQVEsQ0FBQyxDQUFELENBRFQ7QUFBQSxNQUN4QkMsUUFEd0I7QUFBQSxNQUNkQyxXQURjOztBQUFBLG1CQUV1QkYsc0RBQVEsQ0FBQyxDQUFELENBRi9CO0FBQUEsTUFFeEJHLG1CQUZ3QjtBQUFBLE1BRUhDLHNCQUZHOztBQUcvQixNQUFNQyxXQUFXLEdBQUdDLG9EQUFNLENBQUMsSUFBRCxDQUExQjtBQUVBLE1BQU1DLGVBQWUsR0FBRyxDQUFDLGFBQUQsRUFBZ0IsVUFBaEIsRUFBNEIsT0FBNUIsRUFBcUMsT0FBckMsQ0FBeEI7QUFFQSxNQUFNQyxJQUFJLHdCQUFWOztBQUVBLE1BQU1DLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNDLEtBQUQsRUFBZ0I7QUFDbkNOLDBCQUFzQixDQUFDTSxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsY0FBZCxDQUF0QjtBQUNELEdB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QTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUEwR0Q7O0dBdEl1QlQsTTs7S0FBQUEsTSIsImZpbGUiOiIuL3BhZ2VzL2VkaXRvci50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IE5hdkJhciBmcm9tICcuLi9jb21wb25lbnRzL05hdkJhcic7XG5pbXBvcnQgRW1vamlzIGZyb20gJy4uL2NvbXBvbmVudHMvRW1vamlzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRWRpdG9yKCkge1xuICBjb25zdCBbdGFiU3RhdGUsIHNldFRhYlN0YXRlXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbY3Vyc29yUG9zaXRpb25TdGF0ZSwgc2V0Q3Vyc29yUG9zaXRpb25TdGF0ZV0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgdGV4dEFyZWFSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgY29uc3QgRW1vamlOYW1lTWFwcGVyID0gWydtb3N0X3VzZWZ1bCcsICdjcmVhdGl2ZScsICdzcG9ydCcsICdmbGFncyddO1xuXG4gIGNvbnN0IGRhdGEgPSBgYXNkYXNkYXNkIGFzZGFzZGFzZGA7XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlID0gKGV2ZW50OiBhbnkpID0+IHtcbiAgICBzZXRDdXJzb3JQb3NpdGlvblN0YXRlKGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydCk7XG4gIH07XG5cbiAgY29uc3QgaW5zZXJ0TXlUZXh0ID0gKHRleHQ6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IHRleHRUb0luc2VydCA9IHRleHQ7XG4gICAgY29uc3QgY3Vyc29yUG9zaXRpb24gPSBjdXJzb3JQb3NpdGlvblN0YXRlO1xuICAgIGNvbnN0IHRleHRCZWZvcmVDdXJzb3JQb3NpdGlvbiA9IHRleHRBcmVhUmVmLmN1cnJlbnQudmFsdWUuc3Vic3RyaW5nKFxuICAgICAgMCxcbiAgICAgIGN1cnNvclBvc2l0aW9uXG4gICAgKTtcbiAgICBjb25zdCB0ZXh0QWZ0ZXJDdXJzb3JQb3NpdGlvbiA9IHRleHRBcmVhUmVmLmN1cnJlbnQudmFsdWUuc3Vic3RyaW5nKFxuICAgICAgY3Vyc29yUG9zaXRpb24sXG4gICAgICB0ZXh0QXJlYVJlZi5jdXJyZW50LnZhbHVlLmxlbmd0aFxuICAgICk7XG4gICAgdGV4dEFyZWFSZWYuY3VycmVudC52YWx1ZSA9XG4gICAgICB0ZXh0QmVmb3JlQ3Vyc29yUG9zaXRpb24gKyB0ZXh0VG9JbnNlcnQgKyB0ZXh0QWZ0ZXJDdXJzb3JQb3NpdGlvbjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic206cHgtNiBsZzpweC04IG1heC13LXNjcmVlbi14bCBteC1hdXRvXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1iZXR3ZWVuIG1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgIDxOYXZCYXIgLz5cbiAgICAgICAgPC9oZWFkZXI+XG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm10LTE0IGZsZXgtMVwiPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJwLTIgdGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlciB0ZXh0LWdyYXktOTAwXCI+XG4gICAgICAgICAgICBCaW8gRWRpdG9yXG4gICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpibG9jayBoaWRkZW4gbXQtMTZcIj5cbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cIiBmbGV4XCIgYXJpYS1sYWJlbD1cIlRhYnNcIj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG1yLTQgcm91bmRlZC14bCBweC0zIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWJTdGF0ZSA9PT0gMCA/ICdiZy1jbHViaG91c2Utb3JhbmdlJyA6ICdiZy1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDApfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBNb3N0IHVzZWZ1bFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btci00IHJvdW5kZWQteGwgcHgtMyBweS0yIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWJTdGF0ZSA9PT0gMSA/ICdiZy1jbHViaG91c2Utb3JhbmdlJyA6ICdiZy1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDEpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBDcmVhdGl2ZVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Btci00IHJvdW5kZWQteGwgcHgtMyBweS0yIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWJTdGF0ZSA9PT0gMiA/ICdiZy1jbHViaG91c2Utb3JhbmdlJyA6ICdiZy1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDIpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBTcG9ydFxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdW5kZWQteGwgcHgtMyBweS0yIHRleHQtMnhsIGZvbnQtbWVkaXVtIHRleHQtZ3JheS03MDAgJHtcbiAgICAgICAgICAgICAgICAgICAgICB0YWJTdGF0ZSA9PT0gMyA/ICdiZy1jbHViaG91c2Utb3JhbmdlJyA6ICdiZy1ncmF5LTQwMCdcbiAgICAgICAgICAgICAgICAgICAgfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRhYlN0YXRlKDMpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBGbGFnc1xuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9lbW9qaXBlZGlhLm9yZ1wiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1sLWF1dG9cIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC14bCBweC0zIHB5LTIgdGV4dC0yeGwgZm9udC1tZWRpdW0gdGV4dC13aGl0ZSBiZy1ncmVlbi03MDBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgQ2xpY2sgaGVyZSBmb3IgbW9yZSBlbW9qaXNcbiAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC00XCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwIHctNC81XCI+XG4gICAgICAgICAgICAgICAgICAgIHtFbW9qaXNbRW1vamlOYW1lTWFwcGVyW3RhYlN0YXRlXV0ubWFwKChlbGVtZW50KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yIHRleHQtNXhsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0TXlUZXh0KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7ZWxlbWVudH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1jZW50ZXIgbXQtOFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICAgICAgZGF0YS1yb3ctbWF4bGVuZ3RoPVwiNjBcIlxuICAgICAgICAgICAgICAgIC8vIGNvbHM9ezYwfVxuICAgICAgICAgICAgICAgIGRhdGEtbGltaXQtcm93LWxlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgIHJvd3M9ezIwfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInAtMiB0ZXh0LTJ4bCBvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25CbHVyPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIHJlZj17dGV4dEFyZWFSZWZ9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7ZGF0YX1cbiAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPVwiaC04IG1iLTRcIj5cbiAgICAgICAgICA8ZGl2PkJ1aWx0IHdpdGgg4p2k77iPIGJ5IEphbiBSdWV0dGluZ2VyPC9kaXY+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/editor.tsx\n");

/***/ })

})