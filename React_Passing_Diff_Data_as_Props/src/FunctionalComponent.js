import React from 'react';

const FunctionalComponentProps = (props) => {
    
    return (
        <div style ={{textAlign : 'center'}}>
               <h3><u> PROPS IN FUNCTIONAL COMPONENT  :</u> </h3>
               name : {props.name}
                <br></br>
                age : {props.age}
                <br></br>
                gender : {props.gender}
                <br></br><br></br>
                Hobbies : {props.hobbies.map(item =><li>{item}</li> )}
                <br></br>
                Professional Information : {props.profession.experience} years experience as a {props.profession.job}

                <hr></hr>
        </div>
    );
}

export default FunctionalComponentProps;
