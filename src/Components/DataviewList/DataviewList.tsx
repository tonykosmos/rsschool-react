import DataviewItem from '../DataviewItem/DataviewItem';
import { DataviewListProps } from './types';
import { Person } from '../DataviewItem/types';

function DataviewList(props: DataviewListProps) {
  return (
    <div>
      <div>
        {props.data.map((item: Person) => (
          <DataviewItem
            key={item.name}
            name={item.name}
            height={item.height}
            mass={item.mass}
            hair_color={item.hair_color}
            birth_year={item.birth_year}
          />
        ))}
      </div>
    </div>
  );
}

export default DataviewList;
