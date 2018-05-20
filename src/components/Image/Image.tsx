import * as React from 'react';
import { IImageProps } from './ImageProps';
import './Image.scss';

const Image = ({ image, isVideo }: IImageProps) => {
  if (isVideo) {
    return (
      <div className="pure-u-sm-1-1 pure-u-xl-1-4 image-container">
        <video controls className="image">
          <source src={image} type="video/mp4" />
          <source src={image} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
    );
  }
  return (
    <div className="pure-u-sm-1-1 pure-u-xl-1-4 image-container">
      <div className="image" style={{ backgroundImage: `url(${image})` }} />
    </div>
  );
};

export default Image;
