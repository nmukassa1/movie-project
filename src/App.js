import {useState} from 'react'

import Movie from "./compontents/pages/Movie";
import Tv from "./compontents/pages/Tv";

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import DropdownButton from "./compontents/utilities/DropdownButton";


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className="flex gap-10 absolute left-[60px] top-[30px] z-20">
          <Link to="/movie" className="text-white">Movie</Link>
          <Link to="/tv" className="text-white">Tv</Link>
        </header>
        <DropdownButton />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/movie" element={<Movie />} />
          <Route path="/tv" element={<Tv />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
