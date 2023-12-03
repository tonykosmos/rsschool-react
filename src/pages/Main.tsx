import '../styles/App.css';
import { Link } from 'react-router-dom';
import FormDataCardsList from '../Components/FormDataCardsList/FormDataCardsList';

function Main() {
  return (
    <div className="main-page-container">
      <div className="route-btn-container">
        <Link to="/uncontrolledForm">
          <button className="route-btn">Uncontrolled Form</button>
        </Link>
        <Link to="/reactHooksForm">
          <button className="route-btn">React Hooks Form</button>
        </Link>
      </div>
      <FormDataCardsList />
    </div>
  );
}

export default Main;
