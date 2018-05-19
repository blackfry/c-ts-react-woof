import * as React from 'react';
import { IImageProps } from './ImageProps';

const Image = ({ message }: IImageProps) => {
  return <h1>{`Image ${message}`}</h1>;
};

export default Image;
