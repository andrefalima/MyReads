import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Home from "./views/Home"
import Search from "./views/Search"
import Provider, { BooksContext } from "./provider/books"

import './App.css'

class BooksApp extends React.Component {
  state = {  }

  render() {
    return (
      <div className="app">
      <Provider>
      <Switch>
        <Route exact path={"/"} render={() => (
          <BooksContext.Consumer>
            {context => <Home {...context} />}
          </BooksContext.Consumer>
        )} />
        <Route exact path={"/search"} render={() => (
          <BooksContext.Consumer>
            {context => <Search {...context} />}
          </BooksContext.Consumer>
        )} />
      </Switch>
      </Provider>
      </div>
    )
  }
}

export default BooksApp
