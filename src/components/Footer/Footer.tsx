import * as React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/mark-dickie-1bb23b17/"  target="_blank">
        {`Linkedin | `}
      </a>
      <a href="https://github.com/blackfry/c-ts-react-woof" target="_blank">
        Source Code
      </a>
    </div>
  );
};

export default Footer;
