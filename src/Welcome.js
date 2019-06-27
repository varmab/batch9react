import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Welcome extends Component{
    constructor(){
        super();

        this.state={
            clicks:0
        }
    }

    onTitleClick=()=>{
        this.setState({
            clicks:this.state.clicks+1
        })
    }

    render(){
        return(
            <h1 onClick={this.onTitleClick}>Welcome to {this.props.title} ({this.state.clicks}) - {this.props.year}</h1>
        )
    }
}

Welcome.propTypes={
    title(props, propName, component){
        if(!(propName in props)){
          return new Error(`missing ${propName}`)
        }
        if(props[propName].length < 3){
          return new Error(`${propName} was too short`)
        }
      },
    year:PropTypes.number.isRequired
}

Welcome.defaultProps={
    title:"Batch 9",
    year:2020
}

export default Welcome;