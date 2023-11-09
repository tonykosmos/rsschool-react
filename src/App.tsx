import { BrowserRouter } from 'react-router-dom';
import AppContainer from './pages/AppContainer';
import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';

function App() {
  return (
    <>
      <ErrorBoundary>
        <BrowserRouter>
          <AppContainer />
        </BrowserRouter>
      </ErrorBoundary>
    </>
  );
}

export default App;
