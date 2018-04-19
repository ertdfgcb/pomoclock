import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import PomoClock from './PomoClock';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<PomoClock work="25" break="5" cycles="1"/>, document.getElementById('root'));
registerServiceWorker();
