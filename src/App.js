import React from 'react';
import {render} from 'react-dom';
import HeaderAppBar from './components/Header';
import AppRouter from './routers/AppRouter';
import './styles/styles.css';

const App = () => (
    <AppRouter />
);


export default App;