/* tslint:disable:no-empty-interface */
import * as React from 'react';

import './Header.scss';

export interface IHeaderProps {}

export interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  public render() {
    return (
      <div className="header pure-g">
        <div className="pure-u-1">
          <a className="pure-button pure-button-primary" href="#">Show More Dogs</a>
        </div>
      </div>
    );
  }
}

export default Header;
