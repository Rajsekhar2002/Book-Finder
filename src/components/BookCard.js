import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
    : 'https://via.placeholder.com/150x200?text=No+Cover';

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} />
      <div className="book-details">
        <h3>{book.title}</h3>
        <p><strong>Author:</strong> {book.author_name ? book.author_name.join(', ') : 'Unknown'}</p>
        <p><strong>First Published:</strong> {book.first_publish_year || 'N/A'}</p>
        <p><strong>Publisher:</strong> {book.publisher ? book.publisher[0] : 'N/A'}</p>
      </div>
    </div>
  );
};

export default BookCard;
