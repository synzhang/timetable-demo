import React from 'react';
import { Provider } from 'react-redux';
import CoreLayout from '@/layouts/Core';

class App extends React.Component {
  render() {
    let { store } = this.props;

    return (
      <Provider store={store}>
        <CoreLayout>
          Hello, world.
        </CoreLayout>
      </Provider>
    );
  }
};

export default App;
