import React from 'react';
import { ErrorBoundaryProps, ErrorBoundaryState } from '../../types/types';

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error) {
    this.setState({
      hasError: true,
      error,
    });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Get an error during app render</h2>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
