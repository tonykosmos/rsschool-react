import { BrowserRouter } from 'react-router-dom';
import AppContainer from './pages/AppContainer';

function App() {
  return (
    <>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </>
  );
}

export default App;
