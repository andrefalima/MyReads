import React from 'react';
import { Redirect } from 'react-router-dom'

class SearchBookButton extends React.Component {
  state = {
    showSearchPage: false,
  }

  render() {
    if(this.state.showSearchPage) {
      this.setState({ showSearchPage: false });
      return <Redirect to='/search' />
    }
    return ( 
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    );
  }
}
 
export default SearchBookButton;
