(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_ErrorBoundary_ErrorBoundary.tsx_3f2acc._.js", {

"[project]/src/Components/ErrorBoundary/ErrorBoundary.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "ErrorBoundary": ()=>ErrorBoundary,
    "default": ()=>__TURBOPACK__default__export__
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__external__react__ = __turbopack_external_require__("react", true);
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
class ErrorBoundary extends __TURBOPACK__external__react__["default"].Component {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error) {
        this.setState({
            hasError: true,
            error
        });
    }
    render() {
        if (this.state.hasError) {
            return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"]("h2", {
                children: "Something went wrong, please reload the page"
            }, void 0, false, {
                fileName: "<[project]/src/Components/ErrorBoundary/ErrorBoundary.tsx>",
                lineNumber: 31,
                columnNumber: 14
            }, this);
        }
        return this.props.children;
    }
}
const __TURBOPACK__default__export__ = ErrorBoundary;

})()),
}]);

//# sourceMappingURL=src_Components_ErrorBoundary_ErrorBoundary.tsx_3f2acc._.js.map