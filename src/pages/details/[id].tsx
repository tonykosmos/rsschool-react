import { store } from '../../store';
import { getCards, getDetails } from '../../store/cardsApi';
import ItemDetails from '../../Components/ItemDetails/ItemDetails';
import Layout from '../layout';
import { ApiResponse, Person } from '../../Components/DataviewItem/types';

interface queryContext {
  query: {
    search: string;
    page: string;
    id?: string;
  };
}

export interface cardsData {
  cards: ApiResponse;
  cardDetails: Person;
}

export const getServerSideProps = async (context: queryContext) => {
  const { search, page, id } = context.query;
  const cards = await store.dispatch(
    getCards.initiate({
      page: page || '1',
      searchValue: search,
    })
  );

  const cardDetails = await store.dispatch(getDetails.initiate(id as string));

  return {
    props: {
      cards: cards.data,
      cardDetails: cardDetails.data,
    },
  };
};

export default function AppContainer(props: cardsData) {
  return (
    <Layout data={props}>
      <ItemDetails data={props.cardDetails} />
    </Layout>
  );
}
