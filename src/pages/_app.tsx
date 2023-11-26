import ErrorBoundary from '../Components/ErrorBoundary/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '../store';
import type { AppProps } from 'next/app';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Provider store={store}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </Provider>
    </>
  );
}

export default App;
