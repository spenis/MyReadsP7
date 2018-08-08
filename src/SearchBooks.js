import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

import * as BooksAPI from './BooksAPI'
import { DebounceInput } from 'react-debounce-input'

class SearchBooks extends Component {
  state = {
    query:'',
    books:[],
    showBooks:[]
  }

  updateQuery(query) {
    this.setState({ query: query.trim() })
  }

  search(query) {
    this.updateQuery(query)
    if(query) {
      BooksAPI.search(query).then((searchedBooks) => {
        
        if(searchedBooks.error === "No results") {
          this.setState({ books:[] })
        }
        searchedBooks = searchedBooks.filter(r => r.imageLinks)
        searchedBooks = searchedBooks.map(b => {
          b.shelf = this.findShelf(b)
          return b
        })
        let books = searchedBooks
        this.setState({ books })
      }).catch(err => {
        this.setState({ books: [] })
      }) 
    } else {
      this.setState({ books:[], query:''});
      }
    }

  findShelf = (b) => {
    return this.props.books.filter(book => 
    	b.id===book.id).length ? 
    	this.props.books.filter(book => 
    	b.id===book.id)[0].shelf : 'none'
  }

  render() {

    const {books,query} = this.state
    return (
      <div className="search-books">
      <div className="search-books-bar">
        
      <div className="search-books-input-wrapper">
      <DebounceInput  minLength={1} placeholder="Search by title or author" onChange={(e) => this.search(e.target.value)}/>
      </div>
      </div>

        {/*
          NOTES: The search from BooksAPI is limited to a particular set of search terms.
          You can find these search terms here:
          https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

          However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
          you don't find a specific author or title. Every search is limited by search terms.
        */}
        <input 
        	type="text" 
        	placeholder="Search by title or author"
        	value={this.state.query}
        	onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>
    

        <div className="search-books-results">
          <ol className="books-grid">
            {books.length>0 ? 
              (books.map((book) => (
                <li key={book.id}>
                  <Book book={book} shelfUpdate={ this.props.shelfUpdate } />
                </li>)
              )):(query.length === 0) ?(<p>No books to display</p>) : (<p>No books found</p>)}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks;