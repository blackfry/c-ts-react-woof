/* tslint:disable:no-empty-interface */
import * as React from 'react';

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
        <a href="https://www.linkedin.com/in/mark-dickie-1bb23b17/"  target="_blank">
          {`Mark Dickie   |   `}
        </a>
        <a href="https://github.com/blackfry/c-ts-react-woof" target="_blank">
          Source Code
        </a>
      </div>
    );
  }
}

export default Footer;
