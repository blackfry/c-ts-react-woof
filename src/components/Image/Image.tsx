import * as React from 'react';
import { IImageProps } from './ImageProps';
import './image.scss';

const Image = ({ image }: IImageProps) => {
  return (
    <div>
      <img src={image} className="image" />
    </div>
  );
};

export default Image;
