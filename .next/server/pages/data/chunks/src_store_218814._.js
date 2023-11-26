(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["chunks/src_store_218814._.js", {

"[project]/src/store/cardsApi.ts (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "cardsApi": ()=>cardsApi,
    "getCards": ()=>getCards,
    "getDetails": ()=>getDetails,
    "useGetCardsQuery": ()=>useGetCardsQuery,
    "useGetDetailsQuery": ()=>useGetDetailsQuery
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/query/react/rtk-query-react.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/constants/api.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
const cardsApi = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["createApi"]({
    reducerPath: 'cardsApi',
    baseQuery: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$query$2f$react$2f$rtk$2d$query$2d$react$2e$esm$2e$js__$28$ecmascript$29$__["fetchBaseQuery"]({
        baseUrl: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$constants$2f$api$2e$ts__$28$ecmascript$29$__["apiUrl"]
    }),
    endpoints: (build)=>({
            getCards: build.query({
                query: ({ searchValue ='' , page ='1'  })=>({
                        url: '',
                        params: {
                            search: searchValue,
                            page
                        }
                    })
            }),
            getDetails: build.query({
                query: (id)=>`${id}`
            })
        })
});
const { useGetCardsQuery , useGetDetailsQuery  } = cardsApi;
const { getCards , getDetails  } = cardsApi.endpoints;

})()),
"[project]/src/store/searchSlice.ts (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "default": ()=>__TURBOPACK__default__export__,
    "setCardsData": ()=>setCardsData,
    "setDetailsData": ()=>setDetailsData,
    "updateCurrentPage": ()=>updateCurrentPage,
    "updatePageCount": ()=>updatePageCount,
    "updateSearchValue": ()=>updateSearchValue
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
const initialCardsData = {
    count: 0,
    results: [],
    previous: '',
    next: ''
};
const initialDetailsData = {
    name: '',
    mass: '',
    height: '',
    birth_year: '',
    hair_color: '',
    skin_color: '',
    gender: '',
    eye_color: '',
    created: '',
    edited: '',
    url: ''
};
const searchSlice = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["createSlice"]({
    name: 'search',
    initialState: {
        searchValue: '',
        pageCount: 0,
        currentPage: 1,
        cardsData: initialCardsData,
        detailsData: initialDetailsData
    },
    reducers: {
        updateSearchValue (state, action) {
            state.searchValue = action.payload.searchValue;
        },
        updatePageCount (state, action) {
            state.pageCount = action.payload;
        },
        updateCurrentPage (state, action) {
            state.currentPage = action.payload;
        },
        setCardsData (state, action) {
            state.cardsData = action.payload;
        },
        setDetailsData (state, action) {
            state.detailsData = action.payload;
        }
    }
});
const { updateSearchValue , setCardsData , setDetailsData , updateCurrentPage , updatePageCount  } = searchSlice.actions;
const __TURBOPACK__default__export__ = searchSlice.reducer;

})()),
"[project]/src/store/index.ts (ecmascript)": (({ r: __turbopack_require__, x: __turbopack_external_require__, f: __turbopack_require_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, l: __turbopack_load__, j: __turbopack_cjs__, k: __turbopack_refresh__, g: global, __dirname }) => (() => {

__turbopack_esm__({
    "store": ()=>store
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/searchSlice.ts (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/store/cardsApi.ts (ecmascript)");
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
const store = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$esm$2e$js__$28$ecmascript$29$__["configureStore"]({
    reducer: {
        [__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__["cardsApi"].reducerPath]: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__["cardsApi"].reducer,
        search: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$searchSlice$2e$ts__$28$ecmascript$29$__["default"]
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$store$2f$cardsApi$2e$ts__$28$ecmascript$29$__["cardsApi"].middleware)
});

})()),
}]);

//# sourceMappingURL=src_store_218814._.js.map