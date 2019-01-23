import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import peaks from './peaks.json'
import LiveSearch from './components/live-search';

ReactDOM.render(<LiveSearch characters={peaks} />, document.getElementById('root'));


