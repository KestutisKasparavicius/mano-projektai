import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './normalize.css'
import App from './App.jsx'
import Auditorium from './pages/Auditorium.jsx';


import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error/>
   },
   {
    path: "/auditorium",
    element: <Auditorium/>,
    errorElement: <Error/>,
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