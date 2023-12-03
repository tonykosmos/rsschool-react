import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import UncontrolledForm from './Components/UncontrolledForm/UncontrolledForm';
import { store } from './store';
import { Provider } from 'react-redux';
import HookForm from './Components/HookForm/HookForm';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/uncontrolledForm" element={<UncontrolledForm />} />
            <Route path="/reactHookForm" element={<HookForm />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
