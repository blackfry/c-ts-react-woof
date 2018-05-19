import * as React from 'react';
import { hot } from 'react-hot-loader';
import { IAppProps } from './AppProps';

const App = ({ message }: IAppProps ) => {
    return <h1>Hello {message}</h1>;
};

export default hot(module)(App);
