(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_DataviewItem_DataviewItem.tsx_5c896d._.js", {

"[project]/src/Components/DataviewItem/Dataview.module.css (css module)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "dataviewItem": "dataviewItem__Dataview__daa9d773",
  "detailsBtn": "detailsBtn__Dataview__daa9d773",
});

})()),
"[project]/src/Components/DataviewItem/DataviewItem.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router-dom/dist/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$DataviewItem$2f$Dataview$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/Components/DataviewItem/Dataview.module.css (css module)");
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/context/context.tsx (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function DataviewItem(props) {
    const { getDetailsData  } = __TURBOPACK__external__react__["useContext"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$context$2e$tsx__$28$ecmascript$29$__["Context"]);
    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$DataviewItem$2f$Dataview$2e$module$2e$css__$28$css__module$29$__["default"].dataviewItem,
        "data-testid": "dataview-item",
        children: [
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                        children: `Name: ${props.name}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
                        lineNumber: 13,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Height: ${props.height}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
                        lineNumber: 14,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Mass: ${props.mass}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
                        lineNumber: 15,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Birth year: ${props.birth_year}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
                        lineNumber: 16,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Hair color: ${props.hair_color}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
                        lineNumber: 17,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$28$ecmascript$29$__["Link"], {
                to: "/details",
                children: __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                    "data-testid": "open-details-btn",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$DataviewItem$2f$Dataview$2e$module$2e$css__$28$css__module$29$__["default"].detailsBtn,
                    onClick: ()=>{
                        getDetailsData(props.url?.slice(29) || '');
                    },
                    children: "Details"
                }, void 0, false, {
                    fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
                lineNumber: 19,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/Components/DataviewItem/DataviewItem.tsx>",
        lineNumber: 11,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = DataviewItem;

})()),
}]);

//# sourceMappingURL=src_Components_DataviewItem_DataviewItem.tsx_5c896d._.js.map