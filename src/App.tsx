import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import UncontrolledForm from './Components/UncontrolledForm/UncontrolledForm';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/uncontrolledForm" element={<UncontrolledForm />} />
            <Route path="/reactHooksForm" element={<div>Form 2</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
