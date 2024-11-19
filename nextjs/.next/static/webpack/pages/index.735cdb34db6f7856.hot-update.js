"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_modules_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/redux/modules/common */ \"./src/redux/modules/common.ts\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _redux_modules_notificationSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/redux/modules/notificationSlice */ \"./src/redux/modules/notificationSlice.ts\");\n/* harmony import */ var _components_common_Video__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/common/Video */ \"./src/components/common/Video.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst Index = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const [videoLoaded, setVideoLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const clickOpensea = ()=>{\n        dispatch((0,_redux_modules_notificationSlice__WEBPACK_IMPORTED_MODULE_3__.showNotification)({\n            type: 'error',\n            message: 'Success!',\n            description: '功能未开发'\n        }));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_common_Video__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        // size={{ width: 1920, height: 1080 }}\n                        url: 'https://phanta-bear-nft.matrixlabs.org/website/videos/homepage_video.mp4',\n                        intersectingCallBack: (isIntersecting)=>{\n                            dispatch((0,_redux_modules_common__WEBPACK_IMPORTED_MODULE_2__.setShowVideo)(isIntersecting));\n                        },\n                        loadedCallBack: ()=>setVideoLoaded(true)\n                    }, void 0, false, {\n                        fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {\n                        alt: \"xx\",\n                        className: \"absolute bottom-[calc(50%)] transform -translate-y-1/2  left-[calc(10%)] scale-80\",\n                        height: 320,\n                        width: 550,\n                        src: \"https://ezek.io/static/phanta-5c2ead1b2f692f62608121e219ccdf95.png\"\n                    }, void 0, false, {\n                        fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"transition-all duration-200 transform active:scale-95 relative \".concat(videoLoaded ? 'bottom-20 opacity-100 ' : 'bottom-0 opacity-0 '),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: clickOpensea,\n                                className: \" font-bold bottom-[20%] absolute left-1/2 -translate-x-[calc(50%-10px)]  bg-btnbg px-16 py-4 box-border cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-3xl\",\n                                    children: \"去OPENSEA查看\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                onClick: clickOpensea,\n                                className: \" focus:outline-none  font-bold bottom-[calc(20%+10px)] absolute left-1/2 transform  -translate-x-1/2 bg-[#ffffff]  px-16 py-4 border-[1px] border-solid border-btnbg cursor-pointer\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-3xl\",\n                                    children: \"去OPENSEA查看\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                    lineNumber: 56,\n                                    columnNumber: 13\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 52,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"px-28 w-full overflow-hidden\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex py-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 text-[100px]  xl:text-[144px] font-bold font-[Amatic SC]\",\n                                children: \"INTRODUCTION\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"hidden\",\n                                src: \"https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png\",\n                                alt: \"Header\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 65,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex py-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 text-[100px]  xl:text-[144px] font-bold font-[Amatic SC]\",\n                                children: \"INTRODUCTION\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"hidden\",\n                                src: \"https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png\",\n                                alt: \"Header\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex py-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 text-[100px]  xl:text-[144px] font-bold font-[Amatic SC]\",\n                                children: \"INTRODUCTION\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"hidden\",\n                                src: \"https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png\",\n                                alt: \"Header\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                        lineNumber: 81,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex py-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex-1 text-[100px]  xl:text-[144px] font-bold font-[Amatic SC]\",\n                                children: \"INTRODUCTION\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 92,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                className: \"hidden\",\n                                src: \"https://ezek.io/static/headerPicture-0a8747b91a51ad35b937d41b5fc4ab64.png\",\n                                alt: \"Header\"\n                            }, void 0, false, {\n                                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                        lineNumber: 91,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n                lineNumber: 60,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/coding/code/xh/react/base_web3/nextjs/src/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"BzZhwVXlfgAM5K0hlyTg5oVfJ8Y=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch\n    ];\n});\n_c = Index;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUM7QUFDYTtBQUNaO0FBQzJCO0FBQ3ZCO0FBQ2Y7QUFDL0IsTUFBTU0sUUFBUTs7SUFDWixNQUFNQyxXQUFXTCx3REFBV0E7SUFDNUIsTUFBTSxDQUFDTSxhQUFhQyxlQUFlLEdBQUdULCtDQUFRQSxDQUFDO0lBRS9DLE1BQU1VLGVBQWU7UUFDbkJILFNBQ0VKLGtGQUFnQkEsQ0FBQztZQUNmUSxNQUFNO1lBQ05DLFNBQVM7WUFDVEMsYUFBYTtRQUNmO0lBRUo7SUFDQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQTtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNYLGdFQUFLQTt3QkFDSix1Q0FBdUM7d0JBQ3ZDWSxLQUNFO3dCQUVGQyxzQkFBc0IsQ0FBQ0M7NEJBQ3JCWCxTQUFTTixtRUFBWUEsQ0FBQ2lCO3dCQUN4Qjt3QkFDQUMsZ0JBQWdCLElBQU1WLGVBQWU7Ozs7OztrQ0FFdkMsOERBQUNKLG1EQUFLQTt3QkFDSmUsS0FBSTt3QkFDSkwsV0FBVTt3QkFDVk0sUUFBUTt3QkFDUkMsT0FBTzt3QkFDUEMsS0FBSTs7Ozs7O2tDQUdOLDhEQUFDVDt3QkFDQ0MsV0FBVyxrRUFFVixPQURDUCxjQUFjLDJCQUEyQjs7MENBRzNDLDhEQUFDTTtnQ0FDQ1UsU0FBU2Q7Z0NBQ1RLLFdBQVU7MENBRVYsNEVBQUNVO29DQUFLVixXQUFVOzhDQUFXOzs7Ozs7Ozs7OzswQ0FFN0IsOERBQUNEO2dDQUNDVSxTQUFTZDtnQ0FDVEssV0FBVTswQ0FFViw0RUFBQ1U7b0NBQUtWLFdBQVU7OENBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUlqQyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFrRTs7Ozs7OzBDQUdqRiw4REFBQ1c7Z0NBQ0NYLFdBQVU7Z0NBQ1ZRLEtBQUk7Z0NBQ0pILEtBQUk7Ozs7Ozs7Ozs7OztrQ0FHUiw4REFBQ047d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDRDtnQ0FBSUMsV0FBVTswQ0FBa0U7Ozs7OzswQ0FHakYsOERBQUNXO2dDQUNDWCxXQUFVO2dDQUNWUSxLQUFJO2dDQUNKSCxLQUFJOzs7Ozs7Ozs7Ozs7a0NBR1IsOERBQUNOO3dCQUFJQyxXQUFVOzswQ0FDYiw4REFBQ0Q7Z0NBQUlDLFdBQVU7MENBQWtFOzs7Ozs7MENBR2pGLDhEQUFDVztnQ0FDQ1gsV0FBVTtnQ0FDVlEsS0FBSTtnQ0FDSkgsS0FBSTs7Ozs7Ozs7Ozs7O2tDQUdSLDhEQUFDTjt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFVOzBDQUFrRTs7Ozs7OzBDQUdqRiw4REFBQ1c7Z0NBQ0NYLFdBQVU7Z0NBQ1ZRLEtBQUk7Z0NBQ0pILEtBQUk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQWpHTWQ7O1FBQ2FKLG9EQUFXQTs7O0tBRHhCSTtBQW1HTixpRUFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL2NvZGluZy9jb2RlL3hoL3JlYWN0L2Jhc2Vfd2ViMy9uZXh0anMvc3JjL3BhZ2VzL2luZGV4LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgc2V0U2hvd1ZpZGVvIH0gZnJvbSAnQC9yZWR1eC9tb2R1bGVzL2NvbW1vbic7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICdAL3JlZHV4L21vZHVsZXMvbm90aWZpY2F0aW9uU2xpY2UnO1xuaW1wb3J0IFZpZGVvIGZyb20gJ0AvY29tcG9uZW50cy9jb21tb24vVmlkZW8nO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgY29uc3QgW3ZpZGVvTG9hZGVkLCBzZXRWaWRlb0xvYWRlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgY2xpY2tPcGVuc2VhID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKFxuICAgICAgc2hvd05vdGlmaWNhdGlvbih7XG4gICAgICAgIHR5cGU6ICdlcnJvcicsXG4gICAgICAgIG1lc3NhZ2U6ICdTdWNjZXNzIScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAn5Yqf6IO95pyq5byA5Y+RJyxcbiAgICAgIH0pXG4gICAgKTtcbiAgfTtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZVwiPlxuICAgICAgICA8VmlkZW9cbiAgICAgICAgICAvLyBzaXplPXt7IHdpZHRoOiAxOTIwLCBoZWlnaHQ6IDEwODAgfX1cbiAgICAgICAgICB1cmw9e1xuICAgICAgICAgICAgJ2h0dHBzOi8vcGhhbnRhLWJlYXItbmZ0Lm1hdHJpeGxhYnMub3JnL3dlYnNpdGUvdmlkZW9zL2hvbWVwYWdlX3ZpZGVvLm1wNCdcbiAgICAgICAgICB9XG4gICAgICAgICAgaW50ZXJzZWN0aW5nQ2FsbEJhY2s9eyhpc0ludGVyc2VjdGluZykgPT4ge1xuICAgICAgICAgICAgZGlzcGF0Y2goc2V0U2hvd1ZpZGVvKGlzSW50ZXJzZWN0aW5nKSk7XG4gICAgICAgICAgfX1cbiAgICAgICAgICBsb2FkZWRDYWxsQmFjaz17KCkgPT4gc2V0VmlkZW9Mb2FkZWQodHJ1ZSl9XG4gICAgICAgIC8+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIGFsdD1cInh4XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tW2NhbGMoNTAlKV0gdHJhbnNmb3JtIC10cmFuc2xhdGUteS0xLzIgIGxlZnQtW2NhbGMoMTAlKV0gc2NhbGUtODBcIlxuICAgICAgICAgIGhlaWdodD17MzIwfVxuICAgICAgICAgIHdpZHRoPXs1NTB9XG4gICAgICAgICAgc3JjPVwiaHR0cHM6Ly9lemVrLmlvL3N0YXRpYy9waGFudGEtNWMyZWFkMWIyZjY5MmY2MjYwODEyMWUyMTljY2RmOTUucG5nXCJcbiAgICAgICAgPjwvSW1hZ2U+XG5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzTmFtZT17YHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTIwMCB0cmFuc2Zvcm0gYWN0aXZlOnNjYWxlLTk1IHJlbGF0aXZlICR7XG4gICAgICAgICAgICB2aWRlb0xvYWRlZCA/ICdib3R0b20tMjAgb3BhY2l0eS0xMDAgJyA6ICdib3R0b20tMCBvcGFjaXR5LTAgJ1xuICAgICAgICAgIH1gfVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgb25DbGljaz17Y2xpY2tPcGVuc2VhfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiIGZvbnQtYm9sZCBib3R0b20tWzIwJV0gYWJzb2x1dGUgbGVmdC0xLzIgLXRyYW5zbGF0ZS14LVtjYWxjKDUwJS0xMHB4KV0gIGJnLWJ0bmJnIHB4LTE2IHB5LTQgYm94LWJvcmRlciBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC0zeGxcIj7ljrtPUEVOU0VB5p+l55yLPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIG9uQ2xpY2s9e2NsaWNrT3BlbnNlYX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBmb2N1czpvdXRsaW5lLW5vbmUgIGZvbnQtYm9sZCBib3R0b20tW2NhbGMoMjAlKzEwcHgpXSBhYnNvbHV0ZSBsZWZ0LTEvMiB0cmFuc2Zvcm0gIC10cmFuc2xhdGUteC0xLzIgYmctWyNmZmZmZmZdICBweC0xNiBweS00IGJvcmRlci1bMXB4XSBib3JkZXItc29saWQgYm9yZGVyLWJ0bmJnIGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPuWOu09QRU5TRUHmn6XnnIs8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTI4IHctZnVsbCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1bMTAwcHhdICB4bDp0ZXh0LVsxNDRweF0gZm9udC1ib2xkIGZvbnQtW0FtYXRpYyBTQ11cIj5cbiAgICAgICAgICAgIElOVFJPRFVDVElPTlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2V6ZWsuaW8vc3RhdGljL2hlYWRlclBpY3R1cmUtMGE4NzQ3YjkxYTUxYWQzNWI5MzdkNDFiNWZjNGFiNjQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkhlYWRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBweS0xMFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC0xIHRleHQtWzEwMHB4XSAgeGw6dGV4dC1bMTQ0cHhdIGZvbnQtYm9sZCBmb250LVtBbWF0aWMgU0NdXCI+XG4gICAgICAgICAgICBJTlRST0RVQ1RJT05cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgc3JjPVwiaHR0cHM6Ly9lemVrLmlvL3N0YXRpYy9oZWFkZXJQaWN0dXJlLTBhODc0N2I5MWE1MWFkMzViOTM3ZDQxYjVmYzRhYjY0LnBuZ1wiXG4gICAgICAgICAgICBhbHQ9XCJIZWFkZXJcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggcHktMTBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSB0ZXh0LVsxMDBweF0gIHhsOnRleHQtWzE0NHB4XSBmb250LWJvbGQgZm9udC1bQW1hdGljIFNDXVwiPlxuICAgICAgICAgICAgSU5UUk9EVUNUSU9OXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIHNyYz1cImh0dHBzOi8vZXplay5pby9zdGF0aWMvaGVhZGVyUGljdHVyZS0wYTg3NDdiOTFhNTFhZDM1YjkzN2Q0MWI1ZmM0YWI2NC5wbmdcIlxuICAgICAgICAgICAgYWx0PVwiSGVhZGVyXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IHB5LTEwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LTEgdGV4dC1bMTAwcHhdICB4bDp0ZXh0LVsxNDRweF0gZm9udC1ib2xkIGZvbnQtW0FtYXRpYyBTQ11cIj5cbiAgICAgICAgICAgIElOVFJPRFVDVElPTlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImhpZGRlblwiXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2V6ZWsuaW8vc3RhdGljL2hlYWRlclBpY3R1cmUtMGE4NzQ3YjkxYTUxYWQzNWI5MzdkNDFiNWZjNGFiNjQucG5nXCJcbiAgICAgICAgICAgIGFsdD1cIkhlYWRlclwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwic2V0U2hvd1ZpZGVvIiwidXNlRGlzcGF0Y2giLCJzaG93Tm90aWZpY2F0aW9uIiwiVmlkZW8iLCJJbWFnZSIsIkluZGV4IiwiZGlzcGF0Y2giLCJ2aWRlb0xvYWRlZCIsInNldFZpZGVvTG9hZGVkIiwiY2xpY2tPcGVuc2VhIiwidHlwZSIsIm1lc3NhZ2UiLCJkZXNjcmlwdGlvbiIsImRpdiIsImNsYXNzTmFtZSIsInVybCIsImludGVyc2VjdGluZ0NhbGxCYWNrIiwiaXNJbnRlcnNlY3RpbmciLCJsb2FkZWRDYWxsQmFjayIsImFsdCIsImhlaWdodCIsIndpZHRoIiwic3JjIiwib25DbGljayIsInNwYW4iLCJpbWciXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});