import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';




function func(a, b) {
  var sum = a + b;
  return sum;
  // return <p>{sum}</p>
}

// const func=(a, b)=>
// {
//   var sum = a + b;
//    return sum;
// }

var obj=
{
  Maths : 20,
  Science : 50,
}


function Message(props) {
  // function func(a, b) {
  //   var sum = a + b;
  //   return sum;
  // }

  // const func=(a,b)=> {
  //   var sum = a + b;
  //   return sum;
  // }
  return (
    <div>
      <h1 style={{ backgroundColor: 'purple', color: 'cornsilk', fontFamily: 'rubyPosition', textAlign: "center" }}> My Webpage </h1>
      <p> {props.msg} we shall redirect in <b>{props.min}</b> mins, <b>{props.name}</b></p>   {/*jsx systax for binding properties to tag */}
      <p>total is : {func(props.Maths, props.Science)}</p>
       
    </div>
  )

}

ReactDOM.render(
  <Message msg="welcome to my page!....." min={10}         //in JSX, for string we give the value in " ", if not string we give the value in {}
  Maths = {obj.Maths}
  Science = {obj.Science}
  />,  
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
