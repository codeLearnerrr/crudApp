import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Main from './components/Main';
import SignIn from './mongoDB/providers/AuthProvider';

const App: () => React$Node = () => {
  return (
    <>
      <Provider store={store}>
        <SignIn />
      </Provider>
    </>
  );
};


export default App;
