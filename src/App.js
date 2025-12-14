import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchBooks = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const response = await fetch(`https://openlibrary.org/search.json?title=${query}`);
      const data = await response.json();
      setBooks(data.docs);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>📚 Book Finder</h1>
      <SearchBar onSearch={searchBooks} />
      {loading ? <p>Loading...</p> : <BookList books={books} />}
    </div>
  );
}

export default App;
