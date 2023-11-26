(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_Pagination_Pagination.tsx_1b8791._.js", {

"[project]/src/Components/Pagination/Pagination.module.css (css module)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "paginationBtn": "paginationBtn__Pagination__488ebcf",
  "paginationContainer": "paginationContainer__Pagination__488ebcf",
});

})()),
"[project]/src/Components/Pagination/Pagination.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Pagination$2f$Pagination$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/Components/Pagination/Pagination.module.css (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-router-dom/dist/index.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/hooks.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/searchSlice.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
const Pagination = (props)=>{
    const [searchParams, setSearchParams] = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$router$2d$dom$2f$dist$2f$index$2e$js__$28$ecmascript$29$__["useSearchParams"]();
    const pageCount = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__["useAppSelector"]((state)=>state.search.pageCount);
    const currentPage = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__["useAppSelector"]((state)=>state.search.currentPage);
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__["useAppDispatch"]();
    __TURBOPACK__external__react__["useEffect"](()=>{
        if (searchParams.get('page')) {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateCurrentPage"](Number(searchParams.get('page'))));
        } else {
            dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateCurrentPage"](1));
        }
    }, [
        searchParams,
        dispatch
    ]);
    function setNextPage() {
        console.log(currentPage);
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateCurrentPage"](currentPage + 1));
        setSearchParams({
            search: localStorage.getItem('searchValue') || '',
            page: (currentPage + 1).toString()
        });
    }
    function setPreviousPage() {
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateCurrentPage"](currentPage - 1));
        setSearchParams({
            search: localStorage.getItem('searchValue') || '',
            page: (currentPage - 1).toString()
        });
    }
    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Pagination$2f$Pagination$2e$module$2e$css__$28$css__module$29$__["default"].paginationContainer,
        style: props.hidden ? {
            display: 'none'
        } : {},
        children: [
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                "data-testid": "open-previous-page-btn",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Pagination$2f$Pagination$2e$module$2e$css__$28$css__module$29$__["default"].paginationBtn,
                onClick: setPreviousPage,
                disabled: currentPage === 1,
                children: "<"
            }, void 0, false, {
                fileName: "<[project]/src/Components/Pagination/Pagination.tsx>",
                lineNumber: 45,
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
                lineNumber: 53,
                columnNumber: 7
            }, this),
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                "data-testid": "open-next-page-btn",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Pagination$2f$Pagination$2e$module$2e$css__$28$css__module$29$__["default"].paginationBtn,
                onClick: setNextPage,
                disabled: currentPage === Math.ceil(pageCount / 10),
                children: ">"
            }, void 0, false, {
                fileName: "<[project]/src/Components/Pagination/Pagination.tsx>",
                lineNumber: 56,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/Components/Pagination/Pagination.tsx>",
        lineNumber: 41,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = Pagination;

})()),
}]);

//# sourceMappingURL=src_Components_Pagination_Pagination.tsx_1b8791._.js.map