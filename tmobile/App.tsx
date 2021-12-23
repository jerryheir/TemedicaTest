import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import Dashboard from './src/pages/Dashboard';
import {Provider} from 'react-redux';
import {store} from './src/store';
import {BASE_URL} from './src/config';

const client = new ApolloClient({
  uri: BASE_URL,
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Dashboard />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
