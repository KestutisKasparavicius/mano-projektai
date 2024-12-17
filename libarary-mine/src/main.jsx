import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './normalize.css'
import App from './App.jsx'



import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Error from './components/Error.jsx'
import ReadingRoom from './pages/ReadingRoom.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
   },
   {
    path: "/reading-room",
    element: <ReadingRoom/>,
    children: [
      {
        path: "auditorium/book/:bookID",
        element: <ReadingRoom/>
      }
    ]
   },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>
);