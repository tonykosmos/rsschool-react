import { useEffect, useState } from 'react';
import classes from './ErrorButton.module.css';

function ErrorButton() {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (hasError) {
      throw new Error('Rendering error');
    }
  });

  return (
    <button
      onClick={() => {
        setHasError(true);
      }}
      className={classes.errorBtn}
    >
      Generate Error
    </button>
  );
}

export default ErrorButton;
