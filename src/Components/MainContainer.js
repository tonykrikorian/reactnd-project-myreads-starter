import React, { Component } from "react";
import MainBar from "../Components/mainBar";
import Bookshelf from "../Components/Bookshelf";
import OpenSearchButton from "../Components/OpenSearchButton";

class MainContainer extends Component {
  state = {};
  render() {
    const {
      currentlyReading,
      wantToRead,
      read,
      handleOnChangeBookShelf
    } = this.props;
    return (
      <div className="list-books">
        <MainBar />
        <div className="list-books-content">
          <div>
            <Bookshelf
              title={"Currently Reading"}
              dataBooks={currentlyReading}
              handleOnChangeBookShelf={handleOnChangeBookShelf}
            />
            <Bookshelf
              title={"Want to Read"}
              dataBooks={wantToRead}
              handleOnChangeBookShelf={handleOnChangeBookShelf}
            />
            <Bookshelf
              title={"Done"}
              dataBooks={read}
              handleOnChangeBookShelf={handleOnChangeBookShelf}
            />
          </div>
        </div>
        <OpenSearchButton />
      </div>
    );
  }
}

export default MainContainer;
