import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './components/Book'
import SearchBookButton from './components/SearchBookButton'
import Shelf from './components/Shelf'
import Home from './views/Home'
import Search from './views/Search'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }

  render() {
    return (
      <div>
        <Home />
        <Search />
        <Book />
        <SearchBookButton />
        <Shelf />
      </div>
    )
  }
}

export default BooksApp
