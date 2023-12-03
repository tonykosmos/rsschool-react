import classes from './UncontrolledForm.module.css';
import { countriesList } from '../../constants/countries';
import { CountriesListItem, FormDataType, ValidationErrorsObj } from './types';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { schema } from '../../constants/schema';
import { updateFormData } from '../../store/FormSlice';
import * as yup from 'yup';

export default function UncontrolledForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);
  const genderRef = useRef<HTMLSelectElement>(null);
  const countryRef = useRef<HTMLInputElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const confirmPasswordRef = useRef<HTMLInputElement>(null);
  const acceptRef = useRef<HTMLInputElement>(null);

  const [validationErrors, setValidationErrors] = useState<ValidationErrorsObj>(
    {}
  );
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formData = useAppSelector((store) => store.formData.formData);

  const [imageUrl, setImageUrl] = useState<string>('');
  const [imageFile, setImageFile] = useState<File>();
  const [strengthIndicatorClass, setStrengthIndicatorClass] =
    useState<string>('');

  function changeStrengthIndicator(value: string) {
    if (
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/.test(
        value
      )
    ) {
      setStrengthIndicatorClass('rgb(0, 145, 0)');
    } else if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
      setStrengthIndicatorClass('rgb(255, 165, 0)');
    } else if (
      /^(?=.*[a-z])(?=.*[A-Z])/.test(value) ||
      /^(?=.*[a-z])(?=.*\d)/.test(value)
    ) {
      setStrengthIndicatorClass('rgb(255, 255, 0)');
    } else {
      setStrengthIndicatorClass('rgb(255, 0, 0)');
    }
  }

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(imageFile);
    const data = {
      name: nameRef.current?.value,
      age: Number(ageRef.current?.value),
      email: emailRef.current?.value,
      password: passwordRef.current?.value,
      confirmPassword: confirmPasswordRef.current?.value,
      gender: genderRef.current?.value,
      country: countryRef.current?.value,
      accept: acceptRef.current?.checked,
      image: imageFile,
    };

    if (validate(data)) {
      dispatch(
        updateFormData([
          ...formData,
          { id: new Date().toISOString(), ...data, imageUrl },
        ])
      );
      navigate('/');
    }
  }

  function validate(data: FormDataType) {
    try {
      schema.validateSync(data, { abortEarly: false });
      return true;
    } catch (e) {
      if (e instanceof yup.ValidationError) {
        const allErrorsList: Record<string, string> = {};
        e.inner.forEach((error) => {
          if (error.path) {
            allErrorsList[error.path] = error.message;
          }
        });
        setValidationErrors(allErrorsList);
        return false;
      }
    }
  }

  function setUploadedFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = event.target.files[0];
      setImageUrl(URL.createObjectURL(file));
      setImageFile(file);
    }
  }

  return (
    <form className={classes.form} onSubmit={onSubmit}>
      <Link to="/">
        <button className={classes.formBtn}>Go to main page</button>
      </Link>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          className={classes.formInput}
          id="name"
          ref={nameRef}
        />
        {validationErrors.name ? (
          <span className={classes.errorMessage}>{validationErrors.name}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="age">
        Age:
        <input
          type="text"
          className={classes.formInput}
          id="age"
          ref={ageRef}
        />
        {validationErrors.age ? (
          <span className={classes.errorMessage}>{validationErrors.age}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="text"
          className={classes.formInput}
          id="email"
          ref={emailRef}
        />
        {validationErrors.email ? (
          <span className={classes.errorMessage}>{validationErrors.email}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="password">
        <div className={classes.spaceBetween}>
          <div>Password</div>
          <div className={classes.passwordStrenthBlock}>
            Strength:{' '}
            <div
              className={classes.strengthIndicator}
              style={{ background: strengthIndicatorClass }}
            ></div>
          </div>
        </div>
        <input
          type="password"
          className={classes.formInput}
          id="password"
          ref={passwordRef}
          onChange={(e) => changeStrengthIndicator(e.target.value)}
        />
        {validationErrors.password ? (
          <div className={classes.errorMessage}>
            {validationErrors.password}
          </div>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="confirmPassword">
        Confirm password:
        <input
          type="password"
          className={classes.formInput}
          id="confirmPassword"
          ref={confirmPasswordRef}
        />
        {validationErrors.confirmPassword ? (
          <span className={classes.errorMessage}>
            {validationErrors.confirmPassword}
          </span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="gender">
        Gender:
        <select className={classes.formSelect} id="gender" ref={genderRef}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {validationErrors.gender ? (
          <span className={classes.errorMessage}>
            {validationErrors.gender}
          </span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="country">
        Country:
        <input
          className={classes.formInput}
          list="countries"
          name="country"
          id="country"
          ref={countryRef}
        />
        <datalist id="countries">
          {countriesList.map((item: CountriesListItem) => {
            return <option key={item.code} value={item.name} />;
          })}
        </datalist>
        {validationErrors.country ? (
          <span className={classes.errorMessage}>
            {validationErrors.country}
          </span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label>
        Accept T&C:
        <input
          type="checkbox"
          id="accept"
          ref={acceptRef}
          className={classes.formCheckbox}
        />
        {validationErrors.accept ? (
          <span className={classes.errorMessage}>
            {validationErrors.accept}
          </span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="image">
        Image
        <input
          id="image"
          type="file"
          onChange={(e) => {
            setUploadedFile(e);
          }}
        />
        {imageUrl ? (
          <img
            className={classes.formImage}
            src={imageUrl}
            alt="image"
            ref={imageRef}
          />
        ) : (
          ''
        )}
        {validationErrors.image ? (
          <span className={classes.errorMessage}>{validationErrors.image}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <button className={classes.formBtn} type="submit">
        Submit
      </button>
    </form>
  );
}
