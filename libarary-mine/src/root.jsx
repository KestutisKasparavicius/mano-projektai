import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import './styles/index.css'
import './styles/normalize.css'
import ReadingRoom from './pages/ReadingRoom.jsx';
import Home from './pages/Home.jsx';
import Book from './components/Book.jsx';
import BookAbout from './pages/BookAbout.jsx';


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
<Routes> 

  <Route path='/' element={<Home/>}/>
  <Route path='/about/:categoryID/:bookID' element={<BookAbout/>}/>
    
  <Route path='reading-room' element={<ReadingRoom/>}>
    <Route path=':categoryID/:bookID'element={<Book/>}/>
  </Route>

 
</Routes>
  </BrowserRouter>
);
