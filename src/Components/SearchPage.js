import React, { Component } from "react";
import { Link } from "react-router-dom";
import { search } from "../BooksAPI";
import Bookshelf from "./Bookshelf";

class SearchPage extends Component {
  state = {
    textSearch: "",
    searchResult: []
  };

  handleOnChange = async e => {
    const {
      currentTarget: { value: textSearch }
    } = e;
    this.setState({ textSearch });

    const searchResult = await search(this.state.textSearch);

    if (searchResult) {
      this.setState({ searchResult });
      console.log(searchResult);
    }
  };
  render() {
    const { searchResult } = this.state;
    const { handleOnChangeBookShelf } = this.props;
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/">
            <button className="close-search">Close</button>
          </Link>
          <div className="search-books-input-wrapper">
            {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={async e => await this.handleOnChange(e)}
              value={this.state.textSearch}
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.textSearch === "" ? (
              <span>Search a book</span>
            ) : (
              <Bookshelf
                dataBooks={searchResult}
                handleOnChangeBookShelf={handleOnChangeBookShelf}
              />
            )}
          </ol>
        </div>
      </div>
    );
  }
}

export default SearchPage;
