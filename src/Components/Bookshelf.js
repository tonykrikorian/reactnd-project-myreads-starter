import React from "react";
import BookShelfChanger from "../Components/BookShelfChanger";

const Bookshelf = ({
  title,
  dataBooks,
  handleOnChangeBookShelf,
  shelfToMove
}) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {dataBooks.map(book => (
            <li key={book.id}>
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`
                    }}
                  ></div>
                  <BookShelfChanger
                    handleOnChangeBookShelf={handleOnChangeBookShelf}
                    bookId={book.id}
                    shelfToMove={shelfToMove}
                    actualShelf={book.shelf ? book.shelf : "none"}
                  />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
