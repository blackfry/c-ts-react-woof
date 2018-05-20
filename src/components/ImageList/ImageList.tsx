/* tslint:disable:no-empty-interface */
import * as React from 'react';
import Image from '../Image';
import { IImageListProps } from './ImageListProps';
import './ImageList.scss';
export interface IImageListState { images: string[]; }

class ImageList extends React.Component<IImageListProps, IImageListProps> {
  public images = [
    'https://random.dog/2ee86ac3-9bc3-49bb-998d-1bb7a1a913e9.jpg',
    'https://random.dog/1892f3f4-897e-442e-a442-9e53be29e827.gif',
    'https://random.dog/32367-2062-4347.jpg',
    'https://random.dog/9efba242-fbba-4789-96a0-3b9c4a76cc17.mp4',
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
    return this.state.images.map((image: string, i: number) => {
      const fileType = image.slice(image.length - 3, image.length);
      return <Image key={i} image={image} isVideo={fileType === 'mp4'} />;
    });
  }

  public render() {
    return(
      <div className="pure-g image-list" >
        {this.renderImages()}
      </div >
    );
  }
}

export default ImageList;
