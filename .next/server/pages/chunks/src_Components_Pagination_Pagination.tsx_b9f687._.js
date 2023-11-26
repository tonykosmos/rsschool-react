(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_Pagination_Pagination.tsx_b9f687._.js", {

"[project]/src/Components/Pagination/Pagination.module.css (css module)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "paginationBtn": "paginationBtn__Pagination__488ebcf",
  "paginationContainer": "paginationContainer__Pagination__488ebcf",
});

})()),
"[project]/src/Components/Pagination/Pagination.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>Pagination
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/index.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/searchSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Pagination$2f$Pagination$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/Components/Pagination/Pagination.module.css (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
function Pagination() {
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    const { page , search  } = router.query;
    const currentPage = page || __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__["store"].getState().search.currentPage;
    const pageCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__["store"].getState().search.pageCount;
    if (page) {
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__["store"].dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateCurrentPage"](page));
    }
    function setNextPage() {
        router.push({
            query: {
                page: Number(currentPage) + 1,
                search
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__["store"].dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateCurrentPage"](Number(currentPage) + 1));
    }
    function setPreviousPage() {
        router.push({
            query: {
                page: currentPage - 1,
                search
            }
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__["store"].dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateCurrentPage"](Number(currentPage) - 1));
    }
    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Pagination$2f$Pagination$2e$module$2e$css__$28$css__module$29$__["default"].paginationContainer,
        style: false ? {
            display: 'none'
        } : {},
        children: [
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                "data-testid": "open-previous-page-btn",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Pagination$2f$Pagination$2e$module$2e$css__$28$css__module$29$__["default"].paginationBtn,
                onClick: setPreviousPage,
                disabled: Number(currentPage) === 1,
                children: "<"
            }, void 0, false, {
                fileName: "<[project]/src/Components/Pagination/Pagination.tsx>",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
                children: [
                    currentPage,
                    "/",
                    Math.ceil(pageCount / 10)
                ]
            }, void 0, true, {
                fileName: "<[project]/src/Components/Pagination/Pagination.tsx>",
                lineNumber: 43,
                columnNumber: 7
            }, this),
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                "data-testid": "open-next-page-btn",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Pagination$2f$Pagination$2e$module$2e$css__$28$css__module$29$__["default"].paginationBtn,
                onClick: setNextPage,
                disabled: Number(currentPage) === Math.ceil(pageCount / 10),
                children: ">"
            }, void 0, false, {
                fileName: "<[project]/src/Components/Pagination/Pagination.tsx>",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/Components/Pagination/Pagination.tsx>",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=src_Components_Pagination_Pagination.tsx_b9f687._.js.map