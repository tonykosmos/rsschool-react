import classes from './UncontrolledForm.module.css';
import { countriesList } from '../../constants/countries';
import { CountriesListItem } from './types';
import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export default function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLInputElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);

  const [error, setError] = useState({});
  const dispatch = useAppDispatch();
  const formData = useAppSelector((store) => store.formData);

  return (
    <div className={classes.form}>
      <Link to="/">
        <button className={classes.formBtn}>Go to main page</button>
      </Link>
      <label htmlFor="name">
        Name:
        <input type="text" className={classes.formInput} />
      </label>
      <label htmlFor="age">
        Age:
        <input type="text" className={classes.formInput} />
      </label>
      <label htmlFor="email">
        Email:
        <input type="text" className={classes.formInput} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" className={classes.formInput} />
      </label>
      <label htmlFor="confirmPassword">
        Confirm password:
        <input type="password" className={classes.formInput} />
      </label>
      <label htmlFor="gender">
        Gender:
        <select className={classes.formSelect}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label htmlFor="country">
        Country:
        <input
          className={classes.formInput}
          list="countries"
          name="country"
          id="country"
          ref={countryRef}
          // onChange={() => handleInputChange('country')}
        />
        <datalist id="countries">
          {countriesList.map((item: CountriesListItem) => {
            return <option key={item.code} value={item.name} />;
          })}
        </datalist>
      </label>
      <label>
        Accept T&C:
        <input
          type="checkbox"
          id="t&c"
          name="t&c"
          className={classes.formCheckbox}
        />
      </label>
      <button className={classes.formBtn} type="submit">
        Submit
      </button>
    </div>
  );
}
