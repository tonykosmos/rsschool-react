import React from 'react';
import classes from './ErrorButton.module.css';

export class ErrorButton extends React.Component {
  state = {
    hasError: false,
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Rendering error');
    }

    return (
      <button
        onClick={() => {
          this.setState({ hasError: true });
        }}
        className={classes.errorBtn}
      >
        Generate Error
      </button>
    );
  }
}

export default ErrorButton;
