(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_pages_details_[id].tsx_214ca6._.js", {

"[project]/src/pages/details/[id].tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>AppContainer,
    "getServerSideProps": ()=>getServerSideProps
});
var __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__ = __turbopack_external_require__("react/jsx-dev-runtime", true);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/index.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/cardsApi.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ItemDetails$2f$ItemDetails$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/Components/ItemDetails/ItemDetails.tsx (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2e$tsx__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/pages/layout.tsx (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const getServerSideProps = async (context)=>{
    const { search , page , id  } = context.query;
    const cards = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__["store"].dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__["getCards"].initiate({
        page: page || '1',
        searchValue: search
    }));
    const cardDetails = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__["store"].dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__["getDetails"].initiate(id));
    return {
        props: {
            cards: cards.data,
            cardDetails: cardDetails.data
        }
    };
};
function AppContainer(props) {
    return __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$pages$2f$layout$2e$tsx__$28$ecmascript$29$__["default"], {
        data: props,
        children: __TURBOPACK__external__react$2f$jsx$2d$dev$2d$runtime__["jsxDEV"](__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Components$2f$ItemDetails$2f$ItemDetails$2e$tsx__$28$ecmascript$29$__["default"], {
            data: props.cardDetails
        }, void 0, false, {
            fileName: "<[project]/src/pages/details/[id].tsx>",
            lineNumber: 43,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "<[project]/src/pages/details/[id].tsx>",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}

})()),
}]);

//# sourceMappingURL=src_pages_details_[id].tsx_214ca6._.js.map