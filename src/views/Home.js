import React from 'react';
import Shelf from "../components/Shelf";
import SearchBookButton from "../components/SearchBookButton";

import {getAll} from "../BooksAPI";

class Home extends React.Component {
  state = {  };

  async componentDidMount() {
    try {
      const allBooks = await getAll();
      const currentlyReading = allBooks.filter(book => book.shelf === 'currentlyReading');
      const read = allBooks.filter(book => book.shelf === 'read');
      const wantToRead = allBooks.filter(book => book.shelf === 'wantToRead');
      console.log(currentlyReading);
      console.log(read);
      console.log(wantToRead);
    }catch(err){
      console.log(err);
    }
  };

  render() { 
    return (
      <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf title="Currently Reading" />
              <Shelf title="Wants to Read" />
              <Shelf title="Read" />
            </div>
            <SearchBookButton/>
          </div>
   );
  }
}
 
export default Home;
