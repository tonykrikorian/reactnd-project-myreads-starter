import React, { Component } from "react";
import MainBar from "../Components/mainBar";
import Bookshelf from "../Components/Bookshelf";
import OpenSearchButton from "../Components/OpenSearchButton";

class MainContainer extends Component {
  state = {};
  render() {
    const { currentlyReading, wantToRead, read } = this.props;
    return (
      <div className="list-books">
        <MainBar />
        <div className="list-books-content">
          <div>
            <Bookshelf
              title={"Currently Reading"}
              dataBooks={currentlyReading}
            />
            <Bookshelf title={"Want to Read"} dataBooks={wantToRead} />
            <Bookshelf title={"Done"} dataBooks={read} />
          </div>
        </div>
        <OpenSearchButton />
      </div>
    );
  }
}

export default MainContainer;
