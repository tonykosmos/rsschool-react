import { useRouter } from 'next/router';
import { store } from '../../store';
import { updateCurrentPage } from '../../store/searchSlice';
import classes from './Pagination.module.css';

export default function Pagination() {
  const router = useRouter();
  const { page, search } = router.query;
  const currentPage = (page || store.getState().search.currentPage) as number;
  const pageCount = store.getState().search.pageCount;

  if (page) {
    store.dispatch(updateCurrentPage(page));
  }

  function setNextPage() {
    router.push({
      query: { page: Number(currentPage) + 1, search },
    });
    store.dispatch(updateCurrentPage(Number(currentPage) + 1));
  }

  function setPreviousPage() {
    router.push({
      query: { page: currentPage - 1, search },
    });
    store.dispatch(updateCurrentPage(Number(currentPage) - 1));
  }

  return (
    <div
      className={classes.paginationContainer}
      style={false ? { display: 'none' } : {}}
    >
      <button
        data-testid="open-previous-page-btn"
        className={classes.paginationBtn}
        onClick={setPreviousPage}
        disabled={Number(currentPage) === 1}
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
        disabled={Number(currentPage) === Math.ceil(pageCount / 10)}
      >
        &gt;
      </button>
    </div>
  );
}
