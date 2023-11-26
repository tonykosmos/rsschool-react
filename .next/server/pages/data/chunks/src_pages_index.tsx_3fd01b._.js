(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_pages_index.tsx_3fd01b._.js", {

"[project]/src/pages/index.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "getServerSideProps": ()=>getServerSideProps
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/index.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/cardsApi.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const getServerSideProps = async (context)=>{
    const { search , page  } = context.query;
    const cards = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$index$2e$ts__$28$ecmascript$29$__["store"].dispatch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__["getCards"].initiate({
        page: page || '1',
        searchValue: search
    }));
    return {
        props: {
            cards: cards.data
        }
    };
};

})()),
}]);

//# sourceMappingURL=src_pages_index.tsx_3fd01b._.js.map