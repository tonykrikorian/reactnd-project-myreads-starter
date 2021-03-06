import React from "react";
import "./App.css";
import { getAll, update } from "./BooksAPI";
import MainContainer from "./Components/MainContainer";
import { Route, Switch } from "react-router-dom";
import SearchPage from "./Components/SearchPage";

class BooksApp extends React.Component {
  state = {
    bookshelfs: {
      currentlyReading: [],
      wantToRead: [],
      read: [],
      none: []
    },
    allBooks: [],
    shelfToMove: ""
  };

  componentDidMount = async () => {
    const bookshelfs = { ...this.state.bookshelfs };
    const allBooks = await getAll();

    console.log(allBooks);
    bookshelfs["currentlyReading"] = allBooks.filter(
      x => x.shelf === "currentlyReading"
    );
    bookshelfs["wantToRead"] = allBooks.filter(x => x.shelf === "wantToRead");
    bookshelfs["read"] = allBooks.filter(x => x.shelf === "read");

    this.setState({ bookshelfs, allBooks });
  };

  handleOnChangeBookShelf = async (shelfToMove, bookId, bookToMove) => {
    console.log({ bookToMove });
    const bookshelfs = { ...this.state.bookshelfs };

    /*
     * Manage BookShelfChanger state value
     */
    this.setState({ shelfToMove });

    /**
     * Selected book to move and shelf to move
     */
    let shelf = "";
    if ("shelf" in bookToMove) {
      shelf = bookToMove.shelf;
    } else {
      shelf = "none";
    }

    //Change the shelfe of the book to move and set the new value
    bookToMove.shelf = shelfToMove;

    bookshelfs[shelf][bookToMove] = bookToMove;

    console.log({ bookToMove, shelf, shelfToMove });

    bookshelfs[shelfToMove].push(bookToMove);

    bookshelfs[shelf] = bookshelfs[shelf].filter(x => x.shelf === shelf);
    this.setState({ bookshelfs });

    await update(bookToMove, shelfToMove);
  };

  render() {
    const {
      bookshelfs: { currentlyReading, wantToRead, read, none },
      shelfToMove,
      allBooks
    } = this.state;

    const data = { currentlyReading, wantToRead, read, shelfToMove, none };
    return (
      <div className="app">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <MainContainer
                {...data}
                handleOnChangeBookShelf={this.handleOnChangeBookShelf}
              />
            )}
          ></Route>
          <Route
            path="/search"
            render={() => (
              <SearchPage
                allBooks={allBooks}
                handleOnChangeBookShelf={this.handleOnChangeBookShelf}
              />
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
