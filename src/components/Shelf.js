import React from 'react';
import Book from "./Book";

class Shelf extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            { this.props.books && this.props.books.map(book => <Book key={book.id} {...book} changeBookShelf={this.props.changeBookShelf} />) }
          </ol>
        </div>
      </div>
    );
  }
}
 
export default Shelf;
