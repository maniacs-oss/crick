/* @flow */
import AppBar from 'material-ui/AppBar';
import React from 'react';

import Auth from '../Auth';
import Errors from '../Errors';
import './index.css';

type Props = {
  children: React$Element<*>,
};

const App = (props: Props) => (
  <div className="App">
    <AppBar title="Crick.io" iconElementRight={<Auth />} />
    <div className="App-content">
      {props.children}
    </div>

    <Errors />
  </div>
);

export default App;
