(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_ItemDetails_ItemDetails.tsx_4d489c._.js", {

"[project]/src/Components/ItemDetails/ItemDetails.module.css (css module)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "dataviewItem": "dataviewItem__ItemDetails__55fd24ba",
  "detailsBtn": "detailsBtn__ItemDetails__55fd24ba",
});

})()),
"[project]/src/Components/ItemDetails/ItemDetails.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router-dom/dist/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ItemDetails$2f$ItemDetails$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/Components/ItemDetails/ItemDetails.module.css (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$LoadSpinner$2f$LoadSpinner$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/Components/LoadSpinner/LoadSpinner.tsx (ecmascript)");
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/cardsApi.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/searchSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/context.tsx (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
;
;
;
function ItemDetails() {
    const { detailsId  } = __TURBOPACK__external__react__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$28$ecmascript$29$__["Context"]);
    const { data , isLoading  } = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__["useGetDetailsQuery"](detailsId);
    const detailsData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__["useAppSelector"]((state)=>state.search.detailsData);
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__["useAppDispatch"]();
    __TURBOPACK__external__react__["useEffect"](()=>{
        if (data) {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["setDetailsData"](data));
        }
    }, [
        data,
        dispatch
    ]);
    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ItemDetails$2f$ItemDetails$2e$module$2e$css__$28$css__module$29$__["default"].dataviewItem,
        children: [
            !isLoading ? detailsData ? __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                        children: `Name: ${detailsData.name || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Height: ${detailsData.height || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Mass: ${detailsData.mass || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Birth year: ${detailsData.birth_year || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 31,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Hair color: ${detailsData.hair_color || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 32,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Skin color: ${detailsData.skin_color || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 33,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Gender: ${detailsData.gender || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 34,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Eye color: ${detailsData.eye_color || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 35,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Created: ${detailsData.created || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 36,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Edited: ${detailsData.edited || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 37,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                lineNumber: 27,
                columnNumber: 11
            }, this) : __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                children: "No data"
            }, void 0, false, {
                fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                lineNumber: 40,
                columnNumber: 11
            }, this) : __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$LoadSpinner$2f$LoadSpinner$2e$tsx__$28$ecmascript$29$__["LoadSpinner"], {}, void 0, false, {
                fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                lineNumber: 43,
                columnNumber: 9
            }, this),
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$28$ecmascript$29$__["Link"], {
                to: "/",
                children: __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                    "data-testid": "details-close-btn",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ItemDetails$2f$ItemDetails$2e$module$2e$css__$28$css__module$29$__["default"].detailsBtn,
                    children: "Close"
                }, void 0, false, {
                    fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ItemDetails;

})()),
}]);

//# sourceMappingURL=src_Components_ItemDetails_ItemDetails.tsx_4d489c._.js.map