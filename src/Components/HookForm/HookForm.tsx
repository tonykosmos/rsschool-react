import classes from './HookForm.module.css';
import { countriesList } from '../../constants/countries';
import { CountriesListItem, FormDataType } from './types';
import { Link, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { schema } from '../../constants/schema';
import { updateFormData } from '../../store/FormSlice';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';

export default function HookForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    setValue,
  } = useForm({ resolver: yupResolver(schema), mode: 'onChange' });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const formData = useAppSelector((store) => store.formData.formData);

  const [imageUrl, setImageUrl] = useState<string>('');

  function onSubmit(data: FormDataType) {
    if (isValid) {
      dispatch(
        updateFormData([
          ...formData,
          { id: new Date().toISOString(), ...data, imageUrl },
        ])
      );
      navigate('/');
    }
  }

  function setUploadedFile(event: React.ChangeEvent<HTMLInputElement>) {
    if (event.target.files) {
      const file = event.target.files[0];
      setImageUrl(URL.createObjectURL(file));
      setValue('image', file);
      trigger('image');
    }
  }

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <Link to="/">
        <button className={classes.formBtn}>Go to main page</button>
      </Link>
      <label htmlFor="name">
        Name:
        <input
          type="text"
          className={classes.formInput}
          id="name"
          {...register('name')}
        />
        {errors.name ? (
          <span className={classes.errorMessage}>{errors.name.message}</span>
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
          {...register('age')}
        />
        {errors.age ? (
          <span className={classes.errorMessage}>{errors.age.message}</span>
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
          {...register('email')}
        />
        {errors.email ? (
          <span className={classes.errorMessage}>{errors.email.message}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          className={classes.formInput}
          id="password"
          {...register('password')}
        />
        {errors.password ? (
          <div className={classes.errorMessage}>{errors.password.message}</div>
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
          {...register('confirmPassword')}
        />
        {errors.confirmPassword ? (
          <span className={classes.errorMessage}>
            {errors.confirmPassword.message}
          </span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="gender">
        Gender:
        <select
          className={classes.formSelect}
          id="gender"
          {...register('gender')}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        {errors.gender ? (
          <span className={classes.errorMessage}>{errors.gender.message}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="country">
        Country:
        <input
          className={classes.formInput}
          list="countries"
          id="country"
          {...register('country')}
        />
        <datalist id="countries">
          {countriesList.map((item: CountriesListItem) => {
            return <option key={item.code} value={item.name} />;
          })}
        </datalist>
        {errors.country ? (
          <span className={classes.errorMessage}>{errors.country.message}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label htmlFor="image">
        Image
        <input
          id="image"
          type="file"
          {...register('image')}
          onChange={(e) => {
            setUploadedFile(e);
          }}
        />
        {imageUrl ? (
          <img
            className={classes.formImage}
            src={imageUrl}
            alt="image"
            {...register('image')}
          />
        ) : (
          ''
        )}
        {errors.image ? (
          <span className={classes.errorMessage}>{errors.image.message}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <label>
        Accept T&C:
        <input
          type="checkbox"
          id="accept"
          {...register('accept')}
          className={classes.formCheckbox}
        />
        {errors.accept ? (
          <span className={classes.errorMessage}>{errors.accept.message}</span>
        ) : (
          <span className={classes.errorMessage}></span>
        )}
      </label>
      <button className={classes.formBtn} type="submit" disabled={!isValid}>
        Submit
      </button>
    </form>
  );
}
