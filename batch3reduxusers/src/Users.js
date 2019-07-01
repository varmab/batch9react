import React, {Component} from 'react';
import {store,loadUsers} from './redux_users'

class Users extends Component{
    constructor(){
        super();
        this.state={
            users:[],
            loading:true
        }

        store.subscribe(()=>{
            var state=store.getState();
            this.setState({
                users:state.users,
                loading:state.loading,
                error:state.error
            })
        })
    }

    render(){
        if(this.state.loading==true){
            return(
                <div>Loading...</div>
            )
        }
        // if(!this.state.error){
        //     return(
        //         <div>Sorry.. We are unable to get data. Please try again</div>
        //     )
        // }
        return(
            <div>
                <ul>
                    {
                        this.state.users.map((user)=>{
                            return <li key={user.id}>{user.name}</li>
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount(){
        store.dispatch(loadUsers());
    }
}

export default Users;