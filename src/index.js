import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App work="25" break="5" cycles="1"/>, document.getElementById('root'));
registerServiceWorker();
