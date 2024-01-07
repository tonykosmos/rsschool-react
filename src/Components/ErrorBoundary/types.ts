export interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export interface ErrorBoundaryProps {
  children?: React.ReactNode;
}

export interface ErrorButtonProps {
  error: Error | null;
}
