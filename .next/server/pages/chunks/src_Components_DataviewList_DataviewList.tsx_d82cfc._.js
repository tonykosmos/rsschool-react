(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_Components_DataviewList_DataviewList.tsx_d82cfc._.js", {

"[project]/src/Components/DataviewList/DataviewList.tsx (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>DataviewList,
    "getServerSideProps": ()=>getServerSideProps
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/api.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const getServerSideProps = async (context)=>{
    const res = await fetch(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2e$ts__$28$ecmascript$29$__["apiUrl"]);
    const cards = await res.json();
    console.log(cards);
    return {
        props: {
            cards
        }
    };
};
function DataviewList({ cards  }) {
    console.log(cards);
    return cards;
}

})()),
}]);

//# sourceMappingURL=src_Components_DataviewList_DataviewList.tsx_d82cfc._.js.map