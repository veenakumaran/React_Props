import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from '@testing-library/react';
import { renderIntoDocument } from 'react-dom/test-utils';




//**************************Adding Props from objects*************************
// var marks = {
//     Maths : 100,
//     Science : 98,
//     Social : 50,
//     Computers : "pass"

// }

// class Marks extends React.Component
// {
//   render()
//   {
//       return (
//           <div style={{color : 'darkolivegreen'}}>
//           <h1 style ={{backgroundColor :'cornflowerblue', color :'darkblue', textAlign:'center'}}> My Performance </h1>
//           <ul>Maths : {this.props.Maths}</ul>
//           <ul>Science : {this.props.Science}</ul>
//           <ul>Social : {this.props.Social}</ul>
//           <ul>English : {this.props.English}</ul>
//           <ul>Computers : {this.props.Computers}</ul>
//           <ul>Drawing : {this.props.Drawing}</ul>
//           </div>

//       )
//   }

// }

// ReactDOM.render(
//     <Marks
//     Maths = {marks.Maths}
//     Science = {marks.Science}
//     Social = {marks.Social}
//     Computers = {marks.Computers}
//     English = {0}
//     Drawing = "fail"
//     />,
//     document.getElementById("root")
// )

   
//**************************Adding Props from Arrays*************************
let marklist = [
    {score : 20},
    {score : 30},
    {score : 40}
]

class Marks extends React.Component
{
  render()
  {
      return (
          <div style={{color : 'darkolivegreen'}}>
          <h1 style ={{backgroundColor :'cornflowerblue', color :'darkblue', textAlign:'center'}}> My Performance </h1>
          <p>Markslist : {this.props.marks.map((item) => <li>Score : {item.score}</li>)}  </p>
          </div>

      )
  }

}

ReactDOM.render(
    <Marks marks = {marklist}/>,
    document.getElementById("root")
)



//********************************Using props with Methods/ functions ********************************//
// var marks = {
//     Maths : 100,
//     Science : 98,
//     Social : 50,
//     Computers : "pass"

// }

// class Marks extends React.Component
// {
//     // percentage=(Maths,Science,Social)=>
//     // { 
//     //     var perc = (Maths + Science +Social)/3;
//     //     return perc;
        
//     // }

//     percentage=(Maths,Science,Social)=>
//     { 
//         this.perc = (Maths + Science +Social)/3;
//         return this.perc;
        
//     }
//   render()
//   {
//       return (
//           <div style={{color : 'darkolivegreen'}}>
//           <h1 style ={{backgroundColor :'cornflowerblue', color :'darkblue', textAlign:'center'}}> My Performance </h1>
//           <ul>Maths : {this.props.Maths}</ul>
//           <ul>Science : {this.props.Science}</ul>
//           <ul>Social : {this.props.Social}</ul>
//           <ul>English : {this.props.English}</ul>
//           <ul>Computers : {this.props.Computers}</ul>
//           <ul>Drawing : {this.props.Drawing}</ul>
//           <ul>Percentage : {this.percentage(this.props.Maths,this.props.Science,this.props.Social)}</ul>
//           </div>

//       )
//   }

// }

// ReactDOM.render(
//     <Marks
//     Maths = {marks.Maths}
//     Science = {marks.Science}
//     Social = {marks.Social}
//     Computers = {marks.Computers}
//     English = {0}
//     Drawing = "fail"
//     />,
//     document.getElementById("root")
// )








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
