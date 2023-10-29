import React from 'react';
import DataviewItem from '../DataviewItem/DataviewItem';
import { DataviewListProps } from './types';
import { Person } from '../DataviewItem/types';

class DataviewList extends React.Component<DataviewListProps> {
  constructor(props: DataviewListProps) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.data.map((item: Person) => (
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
    );
  }
}

export default DataviewList;
