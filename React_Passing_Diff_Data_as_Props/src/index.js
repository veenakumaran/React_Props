import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ClassComponentProps from './ClassComponent';
import FunctionalComponentProps from './FunctionalComponent';



// ***********Adding properties to tags in components***********
// class Message extends React.Component
// {
//   render()
//   {
//     return(
//       <div>
//       <h1 style={{backgroundColor:'purple', color:'cornsilk', fontFamily : 'rubyPosition', textAlign:"center"}}> My Webpage </h1>
//       <p> {this.props.msg} we shall redirect in <b>{this.props.min}</b> mins </p>   {/*jsx systax for binding properties to tag */}
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Message msg="welcome to my page!....." min = {10} />,  //in JSX, for string we give the value in " ", if not string we give the value in {}
//   document.getElementById('root')
  
// )

// **********Adding properties to styles in components***********
// class Message extends React.Component
// {

//   render()
//   {
//     return(
//       <div>
    
//      <h1 style = {{color : this.props.color, textAlign : 'center', backgroundColor : 'black'}}> My Webpage </h1> 
//      <p> {this.props.msg} we shall redirect in {this.props.min} mins </p>   {/* jsx systax for binding properties to tag */}
//      </div>
      
//     )
//   }
// }


// ReactDOM.render(
//   <Message msg="welcome to my page!....." min = {10} color = "orange" />,  //in JSX, for string we give the value in " ", if not string we give the value in {}
//   document.getElementById('root')
  
// )





////////////////final render/////////////////

// var gender = 'F'

// var profession = {
//     job : 'software employee',
//     experience : 20
// }


// var hobbies = ['reading', 'treking', 'singing'] 

// ReactDOM.render(
//     <div>
//         <ClassComponentProps name ='veena' age= {100} gender = {gender} hobbies = {hobbies} profession ={profession}/>
//         <FunctionalComponentProps name ='Sneha' age= {200} gender = {gender} hobbies = {hobbies} profession ={profession}/>
//     </div>,
//  document.getElementById('root')
// )
