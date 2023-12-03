import { useId } from 'react';
import { useAppSelector } from '../../store/hooks';
import { FormDataType } from '../UncontrolledForm/types';
import FormDataCard from '../FormDataCard/FormDataCard';
import { FormDataCardProps } from '../FormDataCard/types';

const FormDataCardsList = () => {
  const formsData = useAppSelector((store) => store.formData.formData);
  const id = useId();
  return (
    <div>
      {formsData.length ? (
        formsData.map((item: FormDataCardProps) => (
          <FormDataCard
            key={item.id}
            id={item.id}
            name={item.name}
            age={item.age}
            email={item.email}
            password={item.password}
            gender={item.gender}
            country={item.country}
          />
        ))
      ) : (
        <h2>There is no submitted forms</h2>
      )}
    </div>
  );
};

export default FormDataCardsList;
