import {
    createStore,
    applyMiddleware
} from 'redux'

import thunk from 'redux-thunk'

//Actions
const GET_USERS_STARTED='GET_USERS_STARTED'
const GET_USERS_SUCCESS='GET_USERS_SUCCESS'
const GET_USERS_FAILED='GET_USERS_FAILED'

export function getUsersStarted(){
    return {
        type:GET_USERS_STARTED
    }
}

export function getUsersSuccess(users){
    return {
        type:GET_USERS_SUCCESS,
        users
    }
}

export function getUsersFailed(error){
    return {
        type:GET_USERS_FAILED,
        error
    }
}

//Reducer
var users=(state={},action)=>{

    switch(action.type){
        case GET_USERS_STARTED:
            return {
                loading:true,
                users:[],
                error:null
            }
        case GET_USERS_SUCCESS:
            return {
                loading:false,
                users:action.users,
                error:null
            }
        case GET_USERS_FAILED:
            return {
                loading:false,
                users:[],
                error:action.error
            }
        default:
            return state;
    }
}

//thunk action
export function loadUsers(){
    return (dispatch)=>{
        console.log('calling api')
        dispatch(getUsersStarted());
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then((users)=>{
            dispatch(getUsersSuccess(users))
        })
        .catch((err)=>{
            dispatch(getUsersFailed(err));
        })
    }
}

//Store
export const store=createStore(users,
                                applyMiddleware(thunk))
