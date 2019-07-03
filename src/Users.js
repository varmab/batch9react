import React, { Component } from 'react'

import User from './User'

class Users extends Component {
    constructor() {
        super();

        this.state = {
            users: [],
            loading:true,
            error:false
        }
    }

    componentWillMount(){

    }

    render() {
        if(this.state.loading==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Please wait, Loading..</p>
                </div>
            )
        }

        if(this.state.error==true){
            return(
                <div>
                    <h1>Users</h1>
                    <p>Sorry, Failed to load. Please come back later..</p>
                </div>
            )
        }
        return (
            <div>
                <h1>Users</h1>
                <div>
                    {
                        this.state.users.map((u) => {
                            return <User key={u.id} user={u}/>
                        })
                    }
                </div>
            </div>
        )
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({
                users:data,
                loading:false
            })
        })
        .catch(()=>{
            this.setState({
                error:true,
                loading:false
            })
        })

    }

}

export default Users;