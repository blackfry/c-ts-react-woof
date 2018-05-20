/* tslint:disable:no-empty-interface */
import * as React from 'react';
import { hot } from 'react-hot-loader';
import * as _ from 'lodash';
import axios from 'axios';
import ImageList from '../ImageList';
import Header from '../Header';
import Footer from '../Footer';
import ErrorPage from '../ErrorPage';
import Loader from '../Loader';
import './App.scss';

export interface IAppProps {}

export interface IAppState {
  images: string[];
  message: string;
  loading: boolean;
}

class App extends React.Component<IAppProps, IAppState> {
  private imagesToFetch: number = 8;
  private imageUrl: string = 'https://random.dog/woof.json';

  constructor(props: IAppProps) {
    super(props);
    this.state = {
      images: [],
      message: '',
      loading: false,
    };
  }

  public fetchImage = async (newImageArray: string[]) => {
    try {
      let response;
      const shouldFetch: boolean = navigator.onLine && newImageArray.length < this.imagesToFetch;
      if (shouldFetch) {
        response = await axios.get(this.imageUrl);
      }
      return _.get(response, 'data.url', 'xxxx'); // xxxx as default will fail image type validation & a trigger refetch
    } catch (err) {
      return '';
    }
  }

  public handleFetchImages = async (newImageArray: string[]): Promise<() => Promise<string[]>> => {
    if (newImageArray.length === this.imagesToFetch) {
      this.setState({
        loading: false,
        images: newImageArray,
      });
    }

    if (newImageArray.length < this.imagesToFetch) {
      try {
        const validTypes = ['jpg', 'png', 'gif', 'mp4', 'jpeg'];
        const newImage: string = await this.fetchImage(newImageArray);
        const fileType: string = _.last(newImage.slice(newImage.length - 4, newImage.length).split('.'));
        const validImage: boolean = !_.isEmpty(newImage) && _.includes(validTypes, fileType.toLocaleLowerCase());

        if (validImage) {
          newImageArray = [...newImageArray, newImage];
        }

        if (!validImage) {
          this.handleFetchImages(newImageArray);
        }
        return this.handleFetchImages(newImageArray);
      } catch (error) {
        this.setState({
          message: 'Failed to fetch a new dog, try again',
        });
      }
    } else {
      setTimeout(() => this.setState({ loading: false })), 500;
    }
  }

  public onClickHandler = () => {
    window.scrollTo(0, 0);
    this.setState({
      loading: true,
      images: [],
    });
    const newImageArray: string[] = [];
    this.handleFetchImages(newImageArray);
  }

  public render() {
    return (
      <div className={`app${this.state.loading ? ' loading' : ''}`}>
        <Header handleFetchImages={this.onClickHandler} />
        {
          this.state.loading && <Loader />
        }
        {
          !_.isEmpty(this.state.message) && _.isEmpty(this.state.images)
            ? <ErrorPage message={this.state.message} />
            : <ImageList images={this.state.images} />
        }
        <Footer />
      </div>
    );
  }
}

export default hot(module)(App);
