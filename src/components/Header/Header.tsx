import * as React from 'react';
import './Header.scss';

export interface IHeaderProps {
  handleFetchImages: () => void;
}

const Header = ({ handleFetchImages }: IHeaderProps) => {
  return (
    <div className="header">
      <div className="pure-u-1">
        <div
          id="button"
          className="pure-button pure-button-primary"
          onClick={() => handleFetchImages()}>
          Show More Dogs
        </div>
      </div>
    </div>
  );
};

export default Header;
