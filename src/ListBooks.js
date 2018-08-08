import React , { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import BookShelf from './BookShelf';


class ListBooks extends Component {
  static propTypes= {
    currentlyReading:PropTypes.array.isRequired,
    wantToRead:PropTypes.array.isRequired,
    read:PropTypes.array.isRequired,
    shelfUpdate:PropTypes.func.isRequired
  }
  render() {
    const {currentlyReading,wantToRead,read,shelfUpdate}=this.props
        return (
        <div className="list-books">
                <div className="list-books-title">
                  <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                    <BookShelf bookList ={ currentlyReading } shelfName="Currently Reading" shelfUpdate={ shelfUpdate } /> 
                    <BookShelf bookList={ wantToRead } shelfName="Want to Read" shelfUpdate={ shelfUpdate } />
                    <BookShelf bookList={ read } shelfName="Read" shelfUpdate={ shelfUpdate } />
                    </div>
                </div>
              <div className="open-search">
                  <Link to="/search">Add a book</Link>
              </div>
              </div>
    )
  }
}

export default ListBooks;