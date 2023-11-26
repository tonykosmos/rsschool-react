(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_Search_Search.tsx_89f914._.js", {

"[project]/src/Components/Search/Search.module.css (css module)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "search": "search__Search__74cb5d43",
  "search__btn": "search__btn__Search__74cb5d43",
  "search__input": "search__input__Search__74cb5d43",
});

})()),
"[project]/src/Components/Search/Search.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>Search
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__next$2f$router__ = __turbopack_external_require__("next/router", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Search$2f$Search$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/Components/Search/Search.module.css (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/hooks.ts (ecmascript)");
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/searchSlice.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
;
function Search() {
    const router = __TURBOPACK__external__next$2f$router__["useRouter"]();
    const [searchValue, setSearchValue] = __TURBOPACK__external__react__["useState"]('');
    const dispatch = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$hooks$2e$ts__$28$ecmascript$29$__["useAppDispatch"]();
    const getSearchData = ()=>{
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateSearchValue"](searchValue));
        dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["updateCurrentPage"](1));
        router.push({
            query: {
                page: '1',
                search: searchValue
            }
        });
        localStorage.setItem('searchValue', searchValue);
    };
    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Search$2f$Search$2e$module$2e$css__$28$css__module$29$__["default"].search,
        children: [
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("input", {
                "data-testid": "search-input",
                type: "text",
                placeholder: "Search...",
                value: searchValue,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Search$2f$Search$2e$module$2e$css__$28$css__module$29$__["default"].search__input,
                onChange: (e)=>setSearchValue(e.target.value)
            }, void 0, false, {
                fileName: "<[project]/src/Components/Search/Search.tsx>",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
                "data-testid": "search-btn",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$Search$2f$Search$2e$module$2e$css__$28$css__module$29$__["default"].search__btn,
                onClick: ()=>getSearchData(),
                children: "Search"
            }, void 0, false, {
                fileName: "<[project]/src/Components/Search/Search.tsx>",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "<[project]/src/Components/Search/Search.tsx>",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=src_Components_Search_Search.tsx_89f914._.js.map