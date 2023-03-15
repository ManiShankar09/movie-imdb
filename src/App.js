import './App.css';
import MovieDetails from './components/MovieDetails';
import MovieList from './components/MovieList';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' element={<MovieList />}></Route>
        <Route path="/Movies/:imdbID" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
