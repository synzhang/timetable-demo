import React from 'react';
import App, { Container } from 'next/app';
import { Provider } from 'react-redux';
import withReduxStore from '@/lib/with-redux-store';
import CoreLayout from '@/layouts/Core';

class Root extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Container>
        <Provider store={reduxStore}>
          <CoreLayout>
            <Component {...pageProps} />
          </CoreLayout>
        </Provider>
      </Container>
    )
  }
};

export default withReduxStore(Root);
