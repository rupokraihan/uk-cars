/* eslint-disable import/order */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { router } from './routes/App.Routes';
import { RouterProvider } from 'react-router-dom';
import 'aos/dist/aos.css';

ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />);