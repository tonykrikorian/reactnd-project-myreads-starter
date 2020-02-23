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
    allBooks: []
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

    this.setState({ bookshelfs });
  };

  handleOnChangeBookShelf = (e, bookId) => {
    const allBooks = [...this.state.allBooks];
    const state = { ...this.state };
    const {
      currentTarget: { value }
    } = e;

    const booksToMove = allBooks.filter(x => x.id == bookId);
    let [bookToMove] = booksToMove;
    console.log(bookToMove);
  };
  render() {
    const {
      bookshelfs: { currentlyReading, wantToRead, read }
    } = this.state;

    const data = { currentlyReading, wantToRead, read };
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
