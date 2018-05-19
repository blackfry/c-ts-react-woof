import * as React from 'react';
import { IImageListProps } from './ImageListProps';

const ImageList = ({ message }: IImageListProps) => {
  return <h1>{`ImageList ${message}`}</h1>;
};

export default ImageList;
