import React, {Component} from 'react'

const Book=(props)=>{
    return <div>
        <h1>{props.book}</h1>
    </div>
}

class Books extends Component{
    constructor(){
        super();

        var myBooks=[
            "JS Fundamentals",
            "React Beginner",
            "HTML/CSS Pro"
        ]

        this.state={
            books:myBooks
        }
    }

    render(){
        return(
            <div>
                <h1>Books</h1>
                <ul>
                {
                    this.state.books.map(function(book,index){
                        return <Book key={index} book={book}/>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default Books;