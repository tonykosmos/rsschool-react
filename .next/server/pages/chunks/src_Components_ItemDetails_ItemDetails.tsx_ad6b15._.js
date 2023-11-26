(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_ItemDetails_ItemDetails.tsx_ad6b15._.js", {

"[project]/src/Components/ItemDetails/ItemDetails.module.css (css module)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "dataviewItem": "dataviewItem__ItemDetails__55fd24ba",
  "detailsBtn": "detailsBtn__ItemDetails__55fd24ba",
});

})()),
"[project]/src/Components/ItemDetails/ItemDetails.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>ItemDetails
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ItemDetails$2f$ItemDetails$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/Components/ItemDetails/ItemDetails.module.css (css module)");
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function ItemDetails(props) {
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ItemDetails$2f$ItemDetails$2e$module$2e$css__$28$css__module$29$__["default"].dataviewItem,
        children: [
            true ? props.data ? __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                children: [
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                        children: `Name: ${props.data.name || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 21,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Height: ${props.data.height || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 22,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Mass: ${props.data.mass || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 23,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Birth year: ${props.data.birth_year || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 24,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Hair color: ${props.data.hair_color || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 25,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Skin color: ${props.data.skin_color || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 26,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Gender: ${props.data.gender || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 27,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Eye color: ${props.data.eye_color || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 28,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Created: ${props.data.created || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 29,
                        columnNumber: 13
                    }, this),
                    __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("p", {
                        children: `Edited: ${props.data.edited || ''}`
                    }, void 0, false, {
                        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                        lineNumber: 30,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                lineNumber: 20,
                columnNumber: 11
            }, this) : __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h3", {
                children: "No data"
            }, void 0, false, {
                fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                lineNumber: 33,
                columnNumber: 11
            }, this) : __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                children: "Loading..."
            }, void 0, false, {
                fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                lineNumber: 36,
                columnNumber: 9
            }, this),
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                "data-testid": "details-close-btn",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ItemDetails$2f$ItemDetails$2e$module$2e$css__$28$css__module$29$__["default"].detailsBtn,
                onClick: ()=>router.push({
                        pathname: '/'
                    }),
                children: "Close"
            }, void 0, false, {
                fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/Components/ItemDetails/ItemDetails.tsx>",
        lineNumber: 17,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=src_Components_ItemDetails_ItemDetails.tsx_ad6b15._.js.map