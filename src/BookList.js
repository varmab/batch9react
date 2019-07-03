import React, {Component} from 'react'

import Book from './Book'

class BookList extends Component{
    constructor(props){
        super();

        this.state={
            books:props.books
        }
    }

    addToWishlist=(book)=>{
        console.log(book)
        this.props.addToWishlist(book);
    }

    render(){
        return(
            <React.Fragment>
                <h1>Book List</h1>
                {
                    this.state.books.map((myBook)=>{
                        return <Book key={myBook.id} book={myBook} addToWishlist={this.addToWishlist}/>
                    })
                }
            </React.Fragment>
        )
    }
}

export default BookList;