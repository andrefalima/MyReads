import React from 'react';

export const BooksContext = React.createContext();

export default class index extends React.Component {
  constructor() {
    super();
    this.state = {
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addBooks: books => {
        const currentlyReading = books.filter(book => book.shelf === 'currentlyReading');
        const read = books.filter(book => book.shelf === 'read');
        const wantToRead = books.filter(book =>book.shelf === 'wantToRead');
        this.setState({ books, currentlyReading, wantToRead, read })
      },
      changeBookShelf: (book, bookShelf, status) => {
        const newStatus = this.state.books.map( books => {
          const IDs = status[bookShelf].find(
            bookId => bookId === books.id
          );
          if(IDs) {
            books.shelf = bookShelf
          }
          return books;
        });
        this.state.addBooks(newStatus);
      }
    }
  }
  render() {
    return (
      <BooksContext.Provider value={{...this.state}} >
        {this.props.children}
      </BooksContext.Provider>
    )
  }
}
