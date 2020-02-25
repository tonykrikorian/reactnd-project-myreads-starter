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
      handleOnChangeBookShelf,
      shelfToMove
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
              shelfToMove={shelfToMove}
            />
            <Bookshelf
              title={"Want to Read"}
              dataBooks={wantToRead}
              handleOnChangeBookShelf={handleOnChangeBookShelf}
              shelfToMove={shelfToMove}
            />
            <Bookshelf
              title={"Done"}
              dataBooks={read}
              handleOnChangeBookShelf={handleOnChangeBookShelf}
              shelfToMove={shelfToMove}
            />
          </div>
        </div>
        <OpenSearchButton />
      </div>
    );
  }
}

export default MainContainer;
