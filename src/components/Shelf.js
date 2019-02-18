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
            {this.props.allBooks && this.props.allBooks.map(book => <Book key={book.id} {...book} />)}
          </ol>
        </div>
      </div>
    );
  }
}
 
export default Shelf;
