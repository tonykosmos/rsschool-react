import { useEffect, useState } from 'react';
import classes from './Pagination.module.css';
import { PaginationProps } from './types';
import { useSearchParams } from 'react-router-dom';

const Pagination = (props: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get('page')) {
      setCurrentPage(Number(searchParams.get('page')));
    } else {
      setCurrentPage(1);
    }
  }, [searchParams]);

  function setNextPage() {
    setCurrentPage(currentPage + 1);
    props.changePage(props.nextPage);
    setSearchParams({
      search: localStorage.getItem('searchValue') || '',
      page: (currentPage + 1).toString(),
    });
  }

  function setPreviousPage() {
    setCurrentPage(currentPage - 1);
    props.changePage(props.previousPage);
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
        className={classes.paginationBtn}
        onClick={setPreviousPage}
        disabled={currentPage === 1}
      >
        &lt;
      </button>
      <div>
        {currentPage}/{Math.ceil(props.pageCount / 10)}
      </div>
      <button
        className={classes.paginationBtn}
        onClick={setNextPage}
        disabled={currentPage === Math.ceil(props.pageCount / 10)}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
