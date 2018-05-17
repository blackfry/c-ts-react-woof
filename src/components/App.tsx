import * as React from 'react';
import { hot } from 'react-hot-loader'
interface AppProps {
    message: string,
};
const App = ({ message }: AppProps ) => {
    return <h1>Hello {message}</h1>;
};

export default hot(module)(App)
