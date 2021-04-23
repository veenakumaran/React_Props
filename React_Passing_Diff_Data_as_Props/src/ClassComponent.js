import React, { Component } from 'react'


 class ClassComponentProps extends Component {

    render() {
        return (
            <div style ={{textAlign : 'center'}}>
                <h3><u> PROPS IN CLASS COMPONENT  :</u> </h3>
                name : {this.props.name}
                <br></br>
                age : {this.props.age}
                <br></br>
                gender : {this.props.gender}
               <br></br><br></br>
                Hobbies : {this.props.hobbies.map(item =><li>{item}</li> )}
                <br></br>
                Professional Information : {this.props.profession.experience} years experience as a {this.props.profession.job}

                <hr></hr>
            </div>
        )
    }
}
export default ClassComponentProps;