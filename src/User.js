import React from 'react'

const User=(props)=>{
    return (
        <div>
            <h1>{props.user.name}</h1>
            <p>Email:{props.user.email}</p>
            <p>Phone:{props.user.phone}</p>
        </div>
    )
}

export default User;