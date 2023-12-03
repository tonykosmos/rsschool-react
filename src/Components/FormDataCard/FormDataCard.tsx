import classes from './FormDataCard.module.css';
import { FormDataCardProps } from './types';

const FormDataCard = (props: FormDataCardProps) => {
  return (
    <div className={classes.dataviewItem}>
      <div>
        <h2>{`Name: ${props.name}`}</h2>
        <p>{`Age: ${props.age}`}</p>
        <p>{`Email: ${props.email}`}</p>
        <p>{`Password: ${props.password}`}</p>
        <p>{`Gender: ${props.gender}`}</p>
        <p>{`Country: ${props.country}`}</p>
      </div>
    </div>
  );
};

export default FormDataCard;
