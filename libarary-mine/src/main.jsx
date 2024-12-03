import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Auditorium from './pages/Auditorium.jsx';


import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   },
   {
    path: "/auditorium",
    element: <Auditorium/>,
    children: [
      {
        path: "auditorium/book/:bookID",
        element: <Auditorium/>
      }
    ]
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
);