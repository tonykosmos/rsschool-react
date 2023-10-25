import React from 'react';
import classes from './Dataview.module.css';
import { Person } from '../../types/types';

export class DataviewItem extends React.Component<Person> {
  constructor(props: Person) {
    super(props);
  }

  render() {
    return (
      <div className={classes.dataviewItem}>
        <h2>{`Name: ${this.props.name}`}</h2>
        <p>{`Height: ${this.props.height}`}</p>
        <p>{`Mass: ${this.props.mass}`}</p>
        <p>{`Birth year: ${this.props.birth_year}`}</p>
        <p>{`Hair color: ${this.props.hair_color}`}</p>
      </div>
    );
  }
}

export default DataviewItem;
