import React from 'react';
import Shelf from "../components/Shelf";
import SearchBookButton from "../components/SearchBookButton";

import {getAll} from "../BooksAPI";

class Home extends React.Component {
  state = {  };

  async componentDidMount() {
    try {
      const allBooks = await getAll();
      this.props.addBooks(allBooks);
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
              <Shelf title="Currently Reading" books={this.props.currentlyReading} />
              <Shelf title="Want to Read" books={this.props.wantToRead} />
              <Shelf title="Read" books={this.props.read} />
            </div>
            <SearchBookButton/>
          </div>
   );
  }
}
 
export default Home;
