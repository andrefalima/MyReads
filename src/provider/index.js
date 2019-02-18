import React from 'react';
export const MyContext = React.createContext();

export default class index extends React.Component {
  constructor() {
    super();
    this.state = { 
      books: [],
      currentlyReading: [],
      wantToRead: [],
      read: [],
      addBooks: allBooks => {
        const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading');
        const read = allBooks.filter(book => book.shelf === 'read');
        const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead');

        this.setState({allBooks, currentlyReading, read, wantToRead})
      }
     }
  }
  render() { 
    return <MyContext.Provider value={{...this.state}} >
      {this.props.children}
    </MyContext.Provider>
  }
}
 