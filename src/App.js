import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Home from "./views/Home"
import Search from "./views/Search"
import Provider, { BooksContext } from "./provider/books"

import './App.css'

const BooksApp = props => 
  (
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

export default BooksApp
