import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Spa from './spa';

render(<Spa />, document.getElementById('app'));
