import React from 'react'
import { Switch, Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Home from "./views/Home"
import Search from "./views/Search"

import './App.css'

class BooksApp extends React.Component {
  state = {  }

  render() {
    return (
      <div className="app">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/search"} component={Search} />
      </Switch>
      </div>
    )
  }
}

export default BooksApp
