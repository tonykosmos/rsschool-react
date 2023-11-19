import { useEffect } from 'react';
import classes from './Pagination.module.css';
import { PaginationProps } from './types';
import { useSearchParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateCurrentPage } from '../../store/searchSlice';

const Pagination = (props: PaginationProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const pageCount = useAppSelector((state) => state.search.pageCount);
  const currentPage = useAppSelector((state) => state.search.currentPage);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (searchParams.get('page')) {
      dispatch(updateCurrentPage(Number(searchParams.get('page'))));
    } else {
      dispatch(updateCurrentPage(1));
    }
  }, [searchParams, dispatch]);

  function setNextPage() {
    console.log(currentPage);
    dispatch(updateCurrentPage(currentPage + 1));
    setSearchParams({
      search: localStorage.getItem('searchValue') || '',
      page: (currentPage + 1).toString(),
    });
  }

  function setPreviousPage() {
    dispatch(updateCurrentPage(currentPage - 1));
    setSearchParams({
      search: localStorage.getItem('searchValue') || '',
      page: (currentPage - 1).toString(),
    });
  }

  return (
    <div
      className={classes.paginationContainer}
      style={props.hidden ? { display: 'none' } : {}}
    >
      <button
        data-testid="open-previous-page-btn"
        className={classes.paginationBtn}
        onClick={setPreviousPage}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div>
        {currentPage}/{Math.ceil(pageCount / 10)}
      </div>
      <button
        data-testid="open-next-page-btn"
        className={classes.paginationBtn}
        onClick={setNextPage}
        disabled={currentPage === Math.ceil(pageCount / 10)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
