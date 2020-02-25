import React, { Component } from "react";

class BookShelfChanger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shelfToMoveValue: props.actualShelf
    };
  }

  handleOnChangeBookshelf = e => {
    const { handleOnChangeBookShelf, bookId, book } = this.props;
    const {
      currentTarget: { value: shelfToMoveValue }
    } = e;
    console.log({ shelfToMoveValue });
    this.setState({ shelfToMoveValue });
    handleOnChangeBookShelf(shelfToMoveValue, bookId, book);
  };
  render() {
    return (
      <div className="book-shelf-changer">
        <select
          value={this.state.shelfToMoveValue}
          onChange={e => {
            this.handleOnChangeBookshelf(e);
          }}
        >
          <option disabled>Move to...</option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default BookShelfChanger;
