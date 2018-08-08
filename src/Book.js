import React , { Component } from 'react';

class Book extends Component {

  onShelfUpdate = (e) =>{
    let shelf=e.target.value
    this.props.shelfUpdate(this.props.book, shelf)

  }

 render() {
    const style = {
      width: 160,
      height: 180,
      backgroundImage: this.props.book.imageLinks ?
        `url(${this.props.book.imageLinks.thumbnail})` : ''
    }



    return(
      <div className="book">
                <div className="book-top">
                    <div className="book-cover" style = {style}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.onShelfUpdate} defaultValue={this.props.book.shelf}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{this.props.book.authors}</div>
            </div>
        )    
      
  }
}

export default Book;