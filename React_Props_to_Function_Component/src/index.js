import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


//While passing props to function components, need to pass props as arg and access the props using props.name 
//no need for this keyword
var obj={

  name : "Veena",
  age : '10',

}


function Message(props)
{
    return(
      <div>
      <h1 style={{backgroundColor:'purple', color:'cornsilk', fontFamily : 'rubyPosition', textAlign:"center"}}> My Webpage </h1>
      <p> {props.msg} we shall redirect in <b>{props.min}</b> mins, <b>{props.name}</b> -- age : {props.getage.age} </p>   {/*jsx systax for binding properties to tag */}
      </div>
    )

}

ReactDOM.render(
  <Message msg="welcome to my page!....." min = {10} name = {obj.name}  getage ={obj} />,  //in JSX, for string we give the value in " ", if not string we give the value in {}
  document.getElementById('root')

)







// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
