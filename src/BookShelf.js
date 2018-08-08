import React , { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

class BookShelf extends Component {
  static propTypes= {
    bookList:PropTypes.array.isRequired,
    shelfName:PropTypes.string
  }
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.bookList.map((book) =>
              (<li key={book.id}>
                <Book book={book} shelfUpdate={ this.props.shelfUpdate }/>
              </li>)
            )}
          </ol>
        </div>
      </div>
    )
  }
}


export default BookShelf; 