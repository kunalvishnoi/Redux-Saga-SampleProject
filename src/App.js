import React, { Component, Fragment } from 'react';
import configureStore from './store';
import Header from './components/Header';
import ImageGrid from './components/ImageGrid';
import { Provider } from 'react-redux';
const store = configureStore();
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Fragment>
                    <Header />
                    <ImageGrid />
                </Fragment>
            </Provider>
        );
    }
}

export default App;
