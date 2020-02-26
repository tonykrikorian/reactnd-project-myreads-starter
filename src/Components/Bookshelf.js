import React from "react";
import BookShelfChanger from "../Components/BookShelfChanger";
import PropTypes from "prop-types";

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
          {"error" in dataBooks ? (
            <span>There's no results</span>
          ) : (
            <React.Fragment>
              {dataBooks.map(book => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 193,
                          backgroundImage: `url(${
                            !book.imageLinks ? "" : book.imageLinks.thumbnail
                          })`
                        }}
                      ></div>
                      <BookShelfChanger
                        handleOnChangeBookShelf={handleOnChangeBookShelf}
                        bookId={book.id}
                        book={book}
                        shelfToMove={shelfToMove}
                        actualShelf={book.shelf ? book.shelf : "none"}
                      />
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
              ))}
            </React.Fragment>
          )}
        </ol>
      </div>
    </div>
  );
};
Bookshelf.propTypes = {
  dataBooks: PropTypes.array.isRequired,
  handleOnChangeBookShelf: PropTypes.func.isRequired,
  shelfToMove: PropTypes.string
};
export default Bookshelf;
