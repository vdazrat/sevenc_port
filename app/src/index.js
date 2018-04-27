import React from 'react';
import ReactDOM from 'react-dom';
import { useStrict } from 'mobx';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

useStrict(true);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
