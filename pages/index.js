import React from 'react';
import configureStore from '@/redux/store';
import App from '@/components/App';

const store = configureStore()

const Root = () => (
  <App store={store} />
);

export default Root;
