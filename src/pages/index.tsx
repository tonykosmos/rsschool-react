import { ApiResponse } from '../Components/DataviewItem/types';
import { store } from '../store';
import { getCards } from '../store/cardsApi';
import { queryContext } from '../types/types';
import Layout from './layout';

export const getServerSideProps = async (context: queryContext) => {
  const { search, page } = context.query;
  const cards = await store.dispatch(
    getCards.initiate({
      page: page || '1',
      searchValue: search,
    })
  );

  return {
    props: {
      cards: cards.data,
    },
  };
};

export default function AppContainer(props: { cards: ApiResponse }) {
  return <Layout data={props} />;
}
