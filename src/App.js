import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import { getAll } from "./BooksAPI";

import MainContainer from "./Components/MainContainer";
import { Router, Route, Switch } from "react-router-dom";
import SearchPage from "./Components/SearchPage";

class BooksApp extends React.Component {
  state = {
    bookshelfs: {
      currentlyReading: [],
      wantToRead: [],
      read: []
    },
    allBooks: [],
    shelfToMove: ""
  };

  componentDidMount = async () => {
    const bookshelfs = { ...this.state.bookshelfs };
    const allBooks = await getAll();

    console.log(allBooks);
    bookshelfs["currentlyReading"] = allBooks.filter(
      x => x.shelf == "currentlyReading"
    );
    bookshelfs["wantToRead"] = allBooks.filter(x => x.shelf == "wantToRead");
    bookshelfs["read"] = allBooks.filter(x => x.shelf == "read");

    this.setState({ bookshelfs, allBooks });
  };

  handleOnChangeBookShelf = (e, bookId) => {
    const allBooks = [...this.state.allBooks];
    const bookshelfs = { ...this.state.bookshelfs };
    const {
      currentTarget: { value: shelfToMove }
    } = e;
    this.setState({ shelfToMove });
    const bookToMove = allBooks.find(x => x.id === bookId);
    const { shelf } = bookToMove;
    bookToMove.shelf = shelfToMove;
    bookshelfs[shelf][bookToMove] = bookToMove;
    console.log({ bookToMove, shelf, shelfToMove });
    bookshelfs[shelfToMove].push(bookToMove);
    bookshelfs[shelf] = bookshelfs[shelf].filter(x => x.shelf == shelf);
    this.setState({ bookshelfs });
  };
  render() {
    const {
      bookshelfs: { currentlyReading, wantToRead, read },
      shelfToMove
    } = this.state;

    const data = { currentlyReading, wantToRead, read, shelfToMove };
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
          <Route path="/search" render={() => <SearchPage />}></Route>
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
