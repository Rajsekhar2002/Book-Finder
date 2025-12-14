import React from 'react';
import BookCard from './BookCard';
import './BookList.css';

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p className="no-results">No books found. Try another search.</p>;
  }

  return (
    <div className="book-list">
      {books.map((book, index) => (
        <BookCard key={index} book={book} />
      ))}
    </div>
  );
};

export default BookList;
