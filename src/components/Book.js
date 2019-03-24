import React from 'react';
import { update } from '../BooksAPI';

class Book extends React.Component {
  state = {  }
  shelfChange = async toShelf => {
    try {
      const book = this.props;
      const shelf = toShelf.target.value;
      const status = await update(book, shelf);
      this.props.changeBookShelf(book, shelf, status);
    } catch (err) {
      console.log(err);
    }
  }
  render() {
    return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${this.props.imageLinks.thumbnail})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.shelfChange} value={this.props.shelf}>
              <option value="move" disabled>Move to...</option>
              <option hidden value=''></option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">Remove</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.title}</div>
        <div className="book-authors">{this.props.authors}</div>
      </div>
    </li>
    );
  }
}

export default Book;
