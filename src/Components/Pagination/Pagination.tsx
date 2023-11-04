import { useState } from 'react';
import classes from './Pagination.module.css';
import { PaginationProps } from './types';

const Pagination = (props: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  function setNextPage() {
    setCurrentPage(currentPage + 1);
    props.changePage(props.nextPage);
  }

  function setPreviousPage() {
    setCurrentPage(currentPage - 1);
    props.changePage(props.previousPage);
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
