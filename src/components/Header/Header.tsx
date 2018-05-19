/* tslint:disable:no-empty-interface */
import React from 'react';

import './Header.scss';

export interface IHeaderProps {}

export interface IHeaderState {}

class Header extends React.Component<IHeaderProps, IHeaderState> {
  constructor(props: IHeaderProps) {
    super(props);
  }

  public render() {
    return (
      <div className="header">
        Component name: HeaderComponent
      </div>
    );
  }
}

export default Header;
