import React, {Component} from 'react'

class Book extends Component{
    constructor(props){
        super();

        this.state={
            book:props.book
        }
    }

    addBook=()=>{
        this.props.addToWishlist(this.state.book)
    }

    render(){
        return(
            <React.Fragment>
                <h1>{this.state.book.title}</h1>
                <button onClick={this.addBook}>Add To Wishlist</button>
            </React.Fragment>
            
        )
    }
}

export default Book;