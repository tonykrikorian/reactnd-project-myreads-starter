import React, { Component } from "react";
import MainBar from "../Components/mainBar";
import Bookshelf from "../Components/Bookshelf";
import OpenSearchButton from "../Components/OpenSearchButton";

class MainContainer extends Component {
  state = {};
  render() {
    const { CurrentlyReading, WantToRead, Read } = this.props;
    return (
      <div className="list-books">
        <MainBar />
        <div className="list-books-content">
          <div>
            <Bookshelf
              title={"Currently Reading"}
              dataBooks={CurrentlyReading}
            />
            <Bookshelf title={"Want to Read"} dataBooks={WantToRead} />
            <Bookshelf title={"Done"} dataBooks={Read} />
          </div>
        </div>
        <OpenSearchButton />
      </div>
    );
  }
}

export default MainContainer;
