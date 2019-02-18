import React from 'react';

class SearchBookButton extends React.Component {
  state = {  }
  render() { 
    return ( 
      <div className="open-search">
        <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
      </div>
    );
  }
}
 
export default SearchBookButton;
