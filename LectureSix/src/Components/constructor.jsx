import React from 'react'

class Constructor extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Name : 'abdur rahman' ,
            Age : 18 ,
            Blood : 'o+'
        }
    }
    render(){
        return(
            <>
                <p>My name is {this.state.Name}</p>
                <p>I am {this.state.Age} years old</p>
                <p>My blood group{this.state.Blood}</p>
            </>
        )
    }
}

export default Constructor