import React from "react";
import ReactDOM from "react-dom";
import store from './store'
import { Provider } from 'react-redux';
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styled.css';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById("root"));
