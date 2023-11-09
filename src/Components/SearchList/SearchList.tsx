// const SearchList = () => {
//   return (
//     <div className="flex-container">
//       <div className="content-container">
//         <Search
//           updateData={sendSearchQuery}
//           updateLoadingStatus={updateLoadingStatus}
//           disabled={isLoading}
//           value={localStorage.getItem('searchValue') || ''}
//         />
//         <ErrorButton />
//         <hr />
//         {isLoading ? (
//           <div className="loadSpinner">
//             <LoadSpinner />
//           </div>
//         ) : (
//           <div className="dataview-container">
//             {data?.length ? (
//               <Context.Provider value={sendDetailsQuery}>
//                 <DataviewList data={data} />
//               </Context.Provider>
//             ) : (
//               <h2 className="">There is no results for this search</h2>
//             )}
//           </div>
//         )}
//         <Pagination
//           pageCount={pageCount}
//           changePage={changePage}
//           previousPage={responseData?.previous}
//           nextPage={responseData?.next}
//           hidden={isLoading || !Boolean(data?.length)}
//         />
//       </div>
//     </div>
//   );
// };

// export default SearchList;
