import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import Project from './pages/Project';
import Details from './pages/Details';
import Transactions from './pages/Transactions';
import InternalTransactions from './pages/InternalTransactions';
import Contact from './pages/Contact';
import Login from './pages/Login'
import Home from './pages/Home'
import Fund from './pages/Fund'
import GetStarted from './pages/GetStarted';
import Success from './pages/Success';
import CHome from './ex/pages/CHome';
import CProject from './ex/pages/CProject';
import App1 from './ex/components/App';
import Requestp from './ex2/pages/Requestp';
import RequestMail from './ex2/pages/RequestMail';
import Requestv from './ex3/pages/Requestv';
import Funds from './ex3/pages/Funds';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "project",
    element: <Project />,
  },
  {
    path: "details",
    element: <Details />,
  },
  {
    path: "/transactions/:address",
    element: <Transactions />,
  },
  {
    path: "/internaltransactions/:address",
    element: <InternalTransactions />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
     path: "home",
    element: <Home />,
   },
   {
    path: "fund",
   element: <Fund />,
  },
  {
    path: "getstarted",
   element: <GetStarted />,
  },
  {
    path: "success",
    element: <Success />,
  },
  {
    path: "chome",
    element: <CHome/>,
  },
  {
    path: "cproject",
    element: <CProject />,
  },
  {
    path: "requestp",
    element: <Requestp />,
  },
  {
    path: "requestv",
    element: <Requestv />,
  },
  {
    path: "funds",
    element: <Funds />,
  },
  {
    path: "requestmail",
    element: <RequestMail />,
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router}/> 
   
  </React.StrictMode>
);

