exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 144:
/***/ ((module) => {

// Exports
module.exports = {
	"dataviewItem": "Dataview_dataviewItem__Z75_i",
	"detailsBtn": "Dataview_detailsBtn__s7qFD"
};


/***/ }),

/***/ 584:
/***/ ((module) => {

// Exports
module.exports = {
	"itemsPerPageSelect": "DataviewList_itemsPerPageSelect__rd_Qw",
	"flexContainer": "DataviewList_flexContainer__vP1T6",
	"detailsPage": "DataviewList_detailsPage___dsWc"
};


/***/ }),

/***/ 913:
/***/ ((module) => {

// Exports
module.exports = {
	"errorBtn": "ErrorButton_errorBtn__ym5CD"
};


/***/ }),

/***/ 157:
/***/ ((module) => {

// Exports
module.exports = {
	"dataviewItem": "ItemDetails_dataviewItem__0GneT",
	"detailsBtn": "ItemDetails_detailsBtn__g42Jl"
};


/***/ }),

/***/ 746:
/***/ ((module) => {

// Exports
module.exports = {
	"paginationContainer": "Pagination_paginationContainer__XvP6F",
	"paginationBtn": "Pagination_paginationBtn__ANYuD"
};


/***/ }),

/***/ 84:
/***/ ((module) => {

// Exports
module.exports = {
	"search__input": "Search_search__input__INLZ6",
	"search__btn": "Search_search__btn__MMQKB",
	"search": "Search_search__YkDH3"
};


/***/ }),

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_AppContainer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(893);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/Components/Search/Search.module.css
var Search_module = __webpack_require__(84);
var Search_module_default = /*#__PURE__*/__webpack_require__.n(Search_module);
// EXTERNAL MODULE: external "react-router-dom"
var external_react_router_dom_ = __webpack_require__(661);
// EXTERNAL MODULE: ./src/store/searchSlice.ts
var searchSlice = __webpack_require__(95);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(22);
;// CONCATENATED MODULE: ./src/store/hooks.ts

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch = external_react_redux_.useDispatch;
const useAppSelector = external_react_redux_.useSelector;

;// CONCATENATED MODULE: ./src/Components/Search/Search.tsx






function Search(props) {
    const [searchParams, setSearchParams] = (0,external_react_router_dom_.useSearchParams)();
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const dispatch = useAppDispatch();
    (0,external_react_.useEffect)(()=>{
        const urlSearchParam = searchParams.get("search");
        const pageSearchParam = searchParams.get("page");
        const savedSearchValue = urlSearchParam || localStorage.getItem("searchValue") || "";
        setSearchValue(savedSearchValue);
        if (pageSearchParam) {
            setSearchParams({
                search: savedSearchValue,
                page: pageSearchParam
            });
        } else {
            setSearchParams({
                search: savedSearchValue
            });
        }
    }, [
        searchParams,
        setSearchParams
    ]);
    function searchData(searchValue) {
        console.log(searchValue);
        localStorage.setItem("searchValue", searchValue);
        dispatch((0,searchSlice/* updateCurrentPage */.RZ)(1));
        dispatch((0,searchSlice/* updateSearchValue */.vz)({
            searchValue
        }));
        setSearchParams({
            search: searchValue
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Search_module_default()).search,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("input", {
                "data-testid": "search-input",
                type: "text",
                placeholder: "Search...",
                value: searchValue,
                className: (Search_module_default()).search__input,
                onChange: (e)=>setSearchValue(e.target.value)
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                "data-testid": "search-btn",
                className: (Search_module_default()).search__btn,
                onClick: ()=>searchData(searchValue),
                disabled: props.disabled,
                children: "Search"
            })
        ]
    });
}
/* harmony default export */ const Search_Search = (Search);

// EXTERNAL MODULE: ./src/styles/App.css
var App = __webpack_require__(27);
// EXTERNAL MODULE: ./src/Components/ErrorButton/ErrorButton.module.css
var ErrorButton_module = __webpack_require__(913);
var ErrorButton_module_default = /*#__PURE__*/__webpack_require__.n(ErrorButton_module);
;// CONCATENATED MODULE: ./src/Components/ErrorButton/ErrorButton.tsx



function ErrorButton() {
    const [hasError, setHasError] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        if (hasError) {
            throw new Error("Rendering error");
        }
    });
    return /*#__PURE__*/ jsx_runtime.jsx("button", {
        onClick: ()=>{
            setHasError(true);
        },
        className: (ErrorButton_module_default()).errorBtn,
        children: "Generate Error"
    });
}
/* harmony default export */ const ErrorButton_ErrorButton = (ErrorButton);

// EXTERNAL MODULE: ./src/Components/DataviewItem/Dataview.module.css
var Dataview_module = __webpack_require__(144);
var Dataview_module_default = /*#__PURE__*/__webpack_require__.n(Dataview_module);
;// CONCATENATED MODULE: ./src/context/context.tsx

const Context = /*#__PURE__*/ external_react_default().createContext({});

;// CONCATENATED MODULE: ./src/Components/DataviewItem/DataviewItem.tsx





function DataviewItem(props) {
    const { getDetailsData  } = (0,external_react_.useContext)(Context);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Dataview_module_default()).dataviewItem,
        "data-testid": "dataview-item",
        children: [
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: `Name: ${props.name}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Height: ${props.height}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Mass: ${props.mass}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Birth year: ${props.birth_year}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Hair color: ${props.hair_color}`
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_router_dom_.Link, {
                to: "/details",
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    "data-testid": "open-details-btn",
                    className: (Dataview_module_default()).detailsBtn,
                    onClick: ()=>{
                        getDetailsData(props.url?.slice(29) || "");
                    },
                    children: "Details"
                })
            })
        ]
    });
}
/* harmony default export */ const DataviewItem_DataviewItem = (DataviewItem);

// EXTERNAL MODULE: ./src/Components/DataviewList/DataviewList.module.css
var DataviewList_module = __webpack_require__(584);
var DataviewList_module_default = /*#__PURE__*/__webpack_require__.n(DataviewList_module);
// EXTERNAL MODULE: ./src/store/cardsApi.ts + 1 modules
var cardsApi = __webpack_require__(961);
;// CONCATENATED MODULE: ./src/Components/LoadSpinner/LoadSpinner.tsx

const LoadSpinner = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("img", {
        src: "../assets/load-spinner.svg",
        width: "50",
        height: "50",
        alt: "spinner",
        "data-testid": "load-spinner"
    });
};

;// CONCATENATED MODULE: ./src/Components/DataviewList/DataviewList.tsx









function DataviewList() {
    const cardsData = useAppSelector((state)=>state.search.cardsData);
    const searchValue = useAppSelector((state)=>state.search.searchValue);
    const currentPage = useAppSelector((state)=>state.search.currentPage);
    const dispatch = useAppDispatch();
    const { data , isLoading  } = (0,cardsApi/* useGetCardsQuery */.WH)({
        searchValue: localStorage.getItem("searchValue") || "",
        page: currentPage
    });
    (0,external_react_.useEffect)(()=>{
        if (data) {
            dispatch((0,searchSlice/* setCardsData */.po)(data));
            dispatch((0,searchSlice/* updatePageCount */.SS)(data.count));
        }
    }, [
        searchValue,
        data,
        currentPage,
        isLoading,
        dispatch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (DataviewList_module_default()).flexContainer,
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                children: !isLoading ? cardsData.results.length ? cardsData.results.map((item)=>/*#__PURE__*/ jsx_runtime.jsx(DataviewItem_DataviewItem, {
                        name: item.name,
                        height: item.height,
                        mass: item.mass,
                        hair_color: item.hair_color,
                        birth_year: item.birth_year,
                        url: item.url
                    }, item.name)) : /*#__PURE__*/ jsx_runtime.jsx("h2", {
                    children: "There is no results for this search"
                }) : /*#__PURE__*/ jsx_runtime.jsx(LoadSpinner, {})
            }),
            /*#__PURE__*/ jsx_runtime.jsx("div", {
                className: (DataviewList_module_default()).detailsPage,
                children: /*#__PURE__*/ jsx_runtime.jsx(external_react_router_dom_.Outlet, {})
            })
        ]
    });
}
/* harmony default export */ const DataviewList_DataviewList = (DataviewList);

// EXTERNAL MODULE: ./src/Components/Pagination/Pagination.module.css
var Pagination_module = __webpack_require__(746);
var Pagination_module_default = /*#__PURE__*/__webpack_require__.n(Pagination_module);
;// CONCATENATED MODULE: ./src/Components/Pagination/Pagination.tsx






const Pagination = (props)=>{
    const [searchParams, setSearchParams] = (0,external_react_router_dom_.useSearchParams)();
    const pageCount = useAppSelector((state)=>state.search.pageCount);
    const currentPage = useAppSelector((state)=>state.search.currentPage);
    const dispatch = useAppDispatch();
    (0,external_react_.useEffect)(()=>{
        if (searchParams.get("page")) {
            dispatch((0,searchSlice/* updateCurrentPage */.RZ)(Number(searchParams.get("page"))));
        } else {
            dispatch((0,searchSlice/* updateCurrentPage */.RZ)(1));
        }
    }, [
        searchParams,
        dispatch
    ]);
    function setNextPage() {
        console.log(currentPage);
        dispatch((0,searchSlice/* updateCurrentPage */.RZ)(currentPage + 1));
        setSearchParams({
            search: localStorage.getItem("searchValue") || "",
            page: (currentPage + 1).toString()
        });
    }
    function setPreviousPage() {
        dispatch((0,searchSlice/* updateCurrentPage */.RZ)(currentPage - 1));
        setSearchParams({
            search: localStorage.getItem("searchValue") || "",
            page: (currentPage - 1).toString()
        });
    }
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (Pagination_module_default()).paginationContainer,
        style: props.hidden ? {
            display: "none"
        } : {},
        children: [
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                "data-testid": "open-previous-page-btn",
                className: (Pagination_module_default()).paginationBtn,
                onClick: setPreviousPage,
                disabled: currentPage === 1,
                children: "<"
            }),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    currentPage,
                    "/",
                    Math.ceil(pageCount / 10)
                ]
            }),
            /*#__PURE__*/ jsx_runtime.jsx("button", {
                "data-testid": "open-next-page-btn",
                className: (Pagination_module_default()).paginationBtn,
                onClick: setNextPage,
                disabled: currentPage === Math.ceil(pageCount / 10),
                children: ">"
            })
        ]
    });
};
/* harmony default export */ const Pagination_Pagination = (Pagination);

// EXTERNAL MODULE: ./src/Components/ItemDetails/ItemDetails.module.css
var ItemDetails_module = __webpack_require__(157);
var ItemDetails_module_default = /*#__PURE__*/__webpack_require__.n(ItemDetails_module);
;// CONCATENATED MODULE: ./src/Components/ItemDetails/ItemDetails.tsx









function ItemDetails() {
    const { detailsId  } = (0,external_react_.useContext)(Context);
    const { data , isLoading  } = (0,cardsApi/* useGetDetailsQuery */.ZH)(detailsId);
    const detailsData = useAppSelector((state)=>state.search.detailsData);
    const dispatch = useAppDispatch();
    (0,external_react_.useEffect)(()=>{
        if (data) {
            dispatch((0,searchSlice/* setDetailsData */.dz)(data));
        }
    }, [
        data,
        dispatch
    ]);
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: (ItemDetails_module_default()).dataviewItem,
        children: [
            !isLoading ? detailsData ? /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx("h2", {
                        children: `Name: ${detailsData.name || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Height: ${detailsData.height || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Mass: ${detailsData.mass || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Birth year: ${detailsData.birth_year || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Hair color: ${detailsData.hair_color || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Skin color: ${detailsData.skin_color || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Gender: ${detailsData.gender || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Eye color: ${detailsData.eye_color || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Created: ${detailsData.created || ""}`
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("p", {
                        children: `Edited: ${detailsData.edited || ""}`
                    })
                ]
            }) : /*#__PURE__*/ jsx_runtime.jsx("h3", {
                children: "No data"
            }) : /*#__PURE__*/ jsx_runtime.jsx(LoadSpinner, {}),
            /*#__PURE__*/ jsx_runtime.jsx(external_react_router_dom_.Link, {
                to: "/",
                children: /*#__PURE__*/ jsx_runtime.jsx("button", {
                    "data-testid": "details-close-btn",
                    className: (ItemDetails_module_default()).detailsBtn,
                    children: "Close"
                })
            })
        ]
    });
}
/* harmony default export */ const ItemDetails_ItemDetails = (ItemDetails);

;// CONCATENATED MODULE: ./src/Components/ErrorPage404/ErrorPage404.tsx

function ErrorPage404() {
    return /*#__PURE__*/ jsx_runtime.jsx("h2", {
        "data-testid": "error-page",
        children: "Wrong url"
    });
}

;// CONCATENATED MODULE: ./src/pages/AppContainer.tsx












function AppContainer() {
    const [responseData] = (0,external_react_.useState)();
    const [isLoading, setIsLoading] = (0,external_react_.useState)(false);
    const [detailsId, setDetailsId] = (0,external_react_.useState)("");
    const [searchValue, setSearchValue] = (0,external_react_.useState)("");
    const data = useAppSelector((state)=>state.search.cardsData);
    function updateLoadingStatus(isLoading) {
        setIsLoading(isLoading);
    }
    function sendDetailsQuery(id) {
        setDetailsId(id);
    }
    const contextValue = {
        searchValue,
        getSearchValue: setSearchValue,
        detailsId,
        getDetailsData: sendDetailsQuery
    };
    return /*#__PURE__*/ jsx_runtime.jsx(Context.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "App",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(external_react_router_dom_.Routes, {
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(external_react_router_dom_.Route, {
                        path: "/",
                        element: /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex-container",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                                className: "content-container",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx(Search_Search, {
                                        updateLoadingStatus: updateLoadingStatus,
                                        disabled: isLoading
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(ErrorButton_ErrorButton, {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("hr", {}),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "dataview-container",
                                        children: /*#__PURE__*/ jsx_runtime.jsx(DataviewList_DataviewList, {})
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx(Pagination_Pagination, {
                                        previousPage: responseData?.previous,
                                        nextPage: responseData?.next,
                                        hidden: isLoading || !Boolean(data?.results.length)
                                    })
                                ]
                            })
                        }),
                        children: /*#__PURE__*/ jsx_runtime.jsx(external_react_router_dom_.Route, {
                            path: "/details",
                            element: /*#__PURE__*/ jsx_runtime.jsx(ItemDetails_ItemDetails, {})
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(external_react_router_dom_.Route, {
                        path: "/*",
                        element: /*#__PURE__*/ jsx_runtime.jsx(ErrorPage404, {})
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const pages_AppContainer = (AppContainer);


/***/ }),

/***/ 961:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pT": () => (/* binding */ cardsApi),
  "WH": () => (/* binding */ useGetCardsQuery),
  "ZH": () => (/* binding */ useGetDetailsQuery)
});

// EXTERNAL MODULE: external "@reduxjs/toolkit/query/react"
var react_ = __webpack_require__(335);
;// CONCATENATED MODULE: ./src/constants/api.ts
const apiUrl = "https://swapi.dev/api/people";

;// CONCATENATED MODULE: ./src/store/cardsApi.ts


const cardsApi = (0,react_.createApi)({
    reducerPath: "cardsApi",
    baseQuery: (0,react_.fetchBaseQuery)({
        baseUrl: apiUrl
    }),
    endpoints: (build)=>({
            getCards: build.query({
                query: ({ searchValue ="" , page ="1"  })=>({
                        url: "",
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


/***/ }),

/***/ 95:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RZ": () => (/* binding */ updateCurrentPage),
/* harmony export */   "SS": () => (/* binding */ updatePageCount),
/* harmony export */   "ZP": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "dz": () => (/* binding */ setDetailsData),
/* harmony export */   "po": () => (/* binding */ setCardsData),
/* harmony export */   "vz": () => (/* binding */ updateSearchValue)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialCardsData = {
    count: 0,
    results: [],
    previous: "",
    next: ""
};
const initialDetailsData = {
    name: "",
    mass: "",
    height: "",
    birth_year: "",
    hair_color: "",
    skin_color: "",
    gender: "",
    eye_color: "",
    created: "",
    edited: "",
    url: ""
};
const searchSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "search",
    initialState: {
        searchValue: "",
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (searchSlice.reducer);


/***/ }),

/***/ 27:
/***/ (() => {



/***/ })

};
;