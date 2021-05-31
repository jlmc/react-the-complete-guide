import ReactDOM from 'react-dom';

import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>,
    document.getElementById('root'));

// our-domain.com/welcome => Welcome Component
// our-domain.com/products => Products Component
