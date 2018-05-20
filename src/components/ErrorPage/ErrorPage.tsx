import * as React from 'react';
import './ErrorPage.scss';

interface IErrorPage {
  message: string;
}

const ErrorPage = ({ message }: IErrorPage) => {
  return (
    <div className="error-page">
      <div className="error-message">
        <h3>{message}</h3>
      </div>
    </div>
  );
};

export default ErrorPage;
