/* tslint:disable:no-empty-interface */
import React from 'react';

import './Footer.scss';

export interface IFooterProps {}

export interface IFooterState {}

class Footer extends React.Component<IFooterProps, IFooterState> {
  constructor(props: IFooterProps) {
    super(props);
  }

  public render() {
    return (
      <div className="footer">
        Component name: Footer
      </div>
    );
  }
}

export default Footer;
