(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_ErrorButton_ErrorButton.tsx_985718._.js", {

"[project]/src/Components/ErrorButton/ErrorButton.module.css (css module)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_export_value__({
  "errorBtn": "errorBtn__ErrorButton__24cdc7e5",
});

})()),
"[project]/src/Components/ErrorButton/ErrorButton.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ErrorButton$2f$ErrorButton$2e$module$2e$css__$28$css__module$29$__ = __turbopack_import__("[project]/src/Components/ErrorButton/ErrorButton.module.css (css module)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
function ErrorButton() {
    const [hasError, setHasError] = __TURBOPACK__external__react__["useState"](false);
    __TURBOPACK__external__react__["useEffect"](()=>{
        if (hasError) {
            throw new Error('Rendering error');
        }
    });
    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("button", {
        onClick: ()=>{
            setHasError(true);
        },
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ErrorButton$2f$ErrorButton$2e$module$2e$css__$28$css__module$29$__["default"].errorBtn,
        children: "Generate Error"
    }, void 0, false, {
        fileName: "<[project]/src/Components/ErrorButton/ErrorButton.tsx>",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
const __TURBOPACK__default__export__ = ErrorButton;

})()),
}]);

//# sourceMappingURL=src_Components_ErrorButton_ErrorButton.tsx_985718._.js.map