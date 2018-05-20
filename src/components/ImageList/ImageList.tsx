/* tslint:disable:no-empty-interface */
import * as React from 'react';
import * as _ from 'lodash';
import Image from '../Image';
import { IImageListProps } from './ImageListProps';
import './ImageList.scss';
export interface IImageListState { images: string[]; }

class ImageList extends React.Component<IImageListProps, IImageListProps> {
  private videoTypes = ['mp4', 'webm'];

  constructor(props: IImageListProps) {
    super(props);
    this.state = {
      images: props.images,
    };
  }

  public renderImages = () => {
    return this.props.images.map((image: string, i: number) => {
      const fileType: string = _.last(image.slice(image.length - 4, image.length).split('.'));
      return <Image key={i} image={image} isVideo={_.includes(this.videoTypes, fileType)} />;
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
