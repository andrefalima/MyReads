import React from 'react';
import { Redirect } from 'react-router-dom'

import Book from '../components/Book';
import { search } from '../BooksAPI';

class Search extends React.Component {
  state = {
    goBack: false,
    query: '',
    books: []
  }

  fetchBooks = event => {
    const query = event.target.value;
    this.setState({ query: query });

    if(query) {
      search(query)
        .then(books => {
        books.length > 0
        ? this.setState({ books: books })
        : this.setState({ books: []})
        }).catch(err => {
        console.log(err);
      });
    }
  }

  render() {
    const { query } = this.state;

    if(this.state.goBack) {
      this.setState({ goBack: false });
      return <Redirect to='/' />
    }
    return ( 
    <div className="search-books">
    <div className="search-books-bar">
      <a className="close-search" onClick={() => this.setState({ goBack: true })}>Close</a>
      <div className="search-books-input-wrapper">
        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input type="text" placeholder="Search by title or author" value={query} onChange={this.fetchBooks} />

      </div>
    </div>
    <div className="search-books-results">
      { this.state.books.length > 0 && (
        <div>
          <h2> There are { this.state.books.length } results...</h2>
          <ol className="books-grid">
            { this.state.books.map(book => <Book key={book.id} {...book} changeBookShelf={this.props.changeBookShelf} />)}
          </ol>
        </div>
      )}
      { this.state.books.length <= 0 && (
        <div>
          <h2>No books found, please try again...</h2>
        </div>
      )}
    </div>
  </div>
   );
  }
}
 
export default Search;
