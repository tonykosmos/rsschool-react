import { useAppSelector } from '../../store/hooks';
import FormDataCard from '../FormDataCard/FormDataCard';
import { FormDataCardProps } from '../FormDataCard/types';

const FormDataCardsList = () => {
  const formsData = useAppSelector((store) => store.formData.formData);
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
            imageUrl={item.imageUrl}
          />
        ))
      ) : (
        <h2>There is no submitted forms</h2>
      )}
    </div>
  );
};

export default FormDataCardsList;
