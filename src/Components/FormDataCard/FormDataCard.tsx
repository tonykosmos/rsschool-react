import React from 'react';
import classes from './FormDataCard.module.css';

const FormDataCard = () => {
  return (
    <div className={classes.dataviewItem}>
      <div>
        {/* <h2>{`Name: ${props.name}`}</h2>
        <p>{`Age: ${props.height}`}</p>
        <p>{`Mass: ${props.mass}`}</p>
        <p>{`Birth year: ${props.birth_year}`}</p>
        <p>{`Hair color: ${props.hair_color}`}</p> */}
        <h2>{`Name: Felix`}</h2>
        <p>{`Age: 23`}</p>
        <p>{`Email: a.kosmovskiy@gmail.com`}</p>
        <p>{`Password: 123456789`}</p>
        <p>{`Gender: Male`}</p>
        <p>{`Password: 123456789`}</p>
        <p>{`Country: Belarus`}</p>
      </div>
    </div>
  );
};

export default FormDataCard;
