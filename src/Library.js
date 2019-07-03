import React, {Component} from 'react'
import BookList from './BookList';

class Library extends Component{
    constructor(){
        super();

        var myBooks=[
            {
                id:1,
                title:"JavaScript Fundamentals"
            },
            {
                id:2,
                title:"React Pro"
            },
            {
                id:3,
                title:"HTML/CSS Beginner"
            }
        ]

        this.state={
            books:myBooks,
            wishList:[]
        }
    }

    addToWishlist=(book)=>{
        console.log(book)
        this.setState({
            wishList:[
                ...this.state.wishList,
                book
            ]
        })
    }

    render(){
        return(
            <React.Fragment>
                <h1>Library</h1>
                <p>Wishlist:{this.state.wishList.length}</p>
                <BookList books={this.state.books} addToWishlist={this.addToWishlist}/>
            </React.Fragment>
        )
    }
}

export default Library;