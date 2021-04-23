import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



//CASE 1 : Pasing the props to a function outside the component i.e to a global function
//********here we can use both normal functions and arrow functions_with_const ******************//
// var marks = {
//         Maths : 100,
//         Science : 98,
//         Social : 50,
//         Computers : "pass"
    
//     }
    

//     function percentage(Maths,Science,Social)

//     {
//           var perc = (Maths+Science+Social)/3;  // u need to define the value in a var only then u can return
//          return perc;

//     }

    
//     // const percentage=(Maths,Science,Social)=>

//     // {
//     //     var perc = (Maths+Science+Social)/3;  // u need to define the value in a var only then u can return
//     //      return perc;

//     // }
//     class Marks extends React.Component
//     {

//       render()
//       {
//           return (
//               <div style={{color : 'darkolivegreen'}}>
//               <h1 style ={{backgroundColor :'cornflowerblue', color :'darkblue', textAlign:'center'}}> My Performance </h1>
//               <ul>Maths : {this.props.Maths}</ul>
//               <ul>Science : {this.props.Science}</ul>
//               <ul>Social : {this.props.Social}</ul>
//               <ul>English : {this.props.English}</ul>
//               <ul>Computers : {this.props.Computers}</ul>
//               <ul>Drawing : {this.props.Drawing}</ul>
//               <ul>Percentage : {percentage(this.props.Maths,this.props.Science,this.props.Social)}</ul>
//               </div>
    
//           )
//       }
    
//     }
    
//     ReactDOM.render(
//         <Marks
//         Maths = {marks.Maths}
//         Science = {marks.Science}
//         Social = {marks.Social}
//         Computers = {marks.Computers}
//         English = {0}
//         Drawing = "fail"
//         />,
//         document.getElementById("root")
//     )
    







//CASE 2 : Pasing the props to a function inside the component but outside the render function
//**********here we can use only a spl type of function i.e the arrow_func_without_const************// 
//and it needs to be called as this.functionname and value needs to be returned fron the fucntion as return this.value */
// var marks = {
//     Maths : 100,
//     Science : 98,
//     Social : 50,
//     Computers : "pass"

// }

// class Marks extends React.Component
// {
//     //we can also return value by storing it in variable or by using this keyword
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






//CASE 3 : Pasing the props to a function inside the component and inside the render function
//**********here we can use both normal functions and arrow_function_with_const************// 

// var marks = {
//     Maths : 100,
//     Science : 98,
//     Social : 50,
//     Computers : "pass"

// }

// class Marks extends React.Component
// {
//     //we can also return value by storing it in variable or by using this keyword
//     // percentage=(Maths,Science,Social)=>
//     // { 
//     //     var perc = (Maths + Science +Social)/3;
//     //     return perc;
        
//     // }

//   render()
//   {

//     function percentage(Maths,Science,Social)
//     { 
//         var perc = (Maths + Science +Social)/3;  //u need to define the value in a var only then u can return
//         return perc;
        
//     }
//     // const percentage=(Maths,Science,Social)=>
//     // { 
//     //     var perc = (Maths + Science +Social)/3;  //u need to define the value in a var only then u can return
//     //     return perc;
        
//     // }
//       return (
//           <div style={{color : 'darkolivegreen'}}>
//           <h1 style ={{backgroundColor :'cornflowerblue', color :'darkblue', textAlign:'center'}}> My Performance </h1>
//           <ul>Maths : {this.props.Maths}</ul>
//           <ul>Science : {this.props.Science}</ul>
//           <ul>Social : {this.props.Social}</ul>
//           <ul>English : {this.props.English}</ul>
//           <ul>Computers : {this.props.Computers}</ul>
//           <ul>Drawing : {this.props.Drawing}</ul>
//           <ul>Percentage : {percentage(this.props.Maths,this.props.Science,this.props.Social)}</ul>
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
