import '../styles/App.css';
import { Link } from 'react-router-dom';
import FormDataCard from '../Components/FormDataCard/FormDataCard';

function Main() {
  return (
    <div className="main-page-container">
      <div className="route-btn-container">
        <Link to="/form1">
          <button className="route-btn">Link1</button>
        </Link>
        <Link to="/form2">
          <button className="route-btn">Link2</button>
        </Link>
      </div>
      <FormDataCard />
    </div>
  );
}

export default Main;
