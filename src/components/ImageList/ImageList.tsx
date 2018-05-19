/* tslint:disable:no-empty-interface */
import React from 'react';
import Image from '../Image';
import { IImageListProps } from './ImageListProps';
import './ImageList.scss';
export interface IImageListState { images: string[]; }

class ImageList extends React.Component<IImageListProps, IImageListProps> {
  public images = [
    'https://random.dog/2ee86ac3-9bc3-49bb-998d-1bb7a1a913e9.jpg',
    'https://random.dog/ae283a08-4762-48d7-b283-3020bbef2268.JPG',
    'https://random.dog/32367-2062-4347.jpg',
    'https://random.dog/16363-19653-13623.jpg',
    'https://random.dog/f308f001-0974-4d9e-bd6e-d4da30ef38f8.jpg',
    'https://random.dog/2a6dfe0a-db12-4cac-a6c7-33cf45503939.jpg',
    'https://random.dog/28d44524-33b7-457c-a4f6-32b3294ea160.JPG',
    'https://random.dog/ae283a08-4762-48d7-b283-3020bbef2268.JPG',
  ];

  constructor(props: IImageListProps) {
    super(props);
    this.state = {
      images: this.images,
    };
  }

  public renderImages = () => {
    return this.state.images.map((image: string, i: number) => <Image key={i} image={image} />);
  }

  public render() {
    return (
      <div className="image-list">
        Component name: ImageList
        {this.renderImages()}
      </div>
    );
  }
}

export default ImageList;
