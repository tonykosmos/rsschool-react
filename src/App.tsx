import ErrorBoundary from './Components/ErrorBoundary/ErrorBoundary';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import UncontrolledForm from './Components/Form/UncontrolledForm';
import { store } from './store';
import { Provider } from 'react-redux';

function App() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/form1" element={<UncontrolledForm />} />
            <Route path="/form2" element={<div>Form 2</div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
