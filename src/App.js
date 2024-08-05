import logo from './logo.svg';
import MovieList from './components/MovieList';
import React from 'react';
import { fetchMovies } from './api';
import './App.css';

const SearchPage = () => {
  const [movies, setMovies] = React.useState([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = React.useState(searchTerm);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  React.useEffect(() => {
    const getMovies = async () => {
      try {
        const data = await fetchMovies(debouncedSearchTerm);
        setMovies(data.Search || []);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    if (debouncedSearchTerm) {
      getMovies();
    }
  }, [debouncedSearchTerm]);

  return (
    <div className="app">
      <header className="navbar">
        <h1>Dive Into Movie Magic</h1>
        <div className="search-bar">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search for movies"
          />
          <i className="fas fa-search"></i>
        </div>
      </header>
      <main className="main-content">
        <section className="movie-list">
          <MovieList movies={movies} />
        </section>
      </main>
      <footer className="footer">
        <p>© 2024 Movie Search. All rights reserved.</p>
        <p>Suraj Prasad</p>
      </footer>
    </div>
  );
};

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
