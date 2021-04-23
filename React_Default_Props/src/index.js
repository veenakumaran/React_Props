import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import propTypes from 'prop-types'

////*************************PROPS FROM PARENT --> CHILD *********************
let bookList =[
  {title : 'C', author : 'Dennis Ritchie'},
  {title : 'C ++', author : 'Mark David'},
  {title : 'MBA', author : 'Veena Kumaran'},
  
];



class Library extends React.Component{

  static defaultProps = {        //object
    books : [  //key 
      {'title' : 'default title' , 'author' : 'default author'}  //values

    ] 

 } 


    

  state ={
    open : 'true'
  }

  handleClick=()=>
  {
      this.setState ({open : !this.state.open})
      
  }


  render()
  {
    return(
      <div>
       <h1 style = {{backgroundColor : 'orange', textAlign : "center"}}> Welcome to Library </h1>
       <p>THE LIBRARY IS <b>{this.state.open ? 'open' : 'closed'} </b></p>
       <button className = 'btn-primary' onClick ={this.handleClick} style ={{float : 'right'}}>change</button>
       <br></br>
       <h4> Here are the list of available books.... </h4>
       

      {this.props.books.map(
        book => <Book title = {book.title} author = {book.author}/>
      )

      }
       {/* <Book title = "Harry Potter" author ="JK rowling" /> */}


      </div>
      

    )
  }


}


class Book extends React.Component{


 render()
 {
  
   return(
     <div>
      
       <br></br>
       <ul>
       <li>Title :{this.props.title}</li>
       <li>Author : {this.props.author}</li>
    
       </ul>
       <hr></hr>
     </div>

   )
 }

}


Library.propTypes ={
    title : propTypes.string,
    pages : propTypes.number
}

ReactDOM.render(
<Library />,
 document.getElementById('root')
)





////*************************PROPS TO CHILD DIRECTLY *********************/
// let bookList =[
//   {title : 'C', author : 'Dennis Ritchie'},
//   {title : 'C ++', author : 'Mark David'},
//   {title : 'MBA', author : 'Veena Kumaran'},
  
// ];


// class Library extends React.Component{

//   state ={
//     open : 'true'
//   }

//   handleClick=()=>
//   {
//       this.setState ({open : !this.state.open})
      
//   }


//   render()
//   {
//     return(
//       <div>
//        <h1 style = {{backgroundColor : 'orange', textAlign : "center"}}> Welcome to Library </h1>
//        <p>THE LIBRARY IS <b>{this.state.open ? 'open' : 'closed'} </b></p>
//        <button className = 'btn-primary' onClick ={this.handleClick} style ={{float : 'right'}}>change</button>
//        <br></br>
//        <h4> Here are the list of available books.... </h4>
       
//        {/* no need to pass an props here so that  we can use default props */}
//         <Book/> 
     
//        {/* <Book title = "Harry Potter" author ="JK rowling" /> */}


//       </div>
      

//     )
//   }


// }


// class Book extends React.Component{


//   //in which ever component you are using this.props --> 
// //there you can simple remove your props in class component call and give default props
// //inorder to access the default values in the list
//   static defaultProps ={
//     books : [  //key 
//      {'title' : 'default title' , 'author' : 'default author'},  //values
//     // {'title' : 'default title' , 'author' : 'default author'}  // can give multiple default values as well
//     ]
//   } 

//  render()
//  {
  
//    return(
//      <div>
      
//       {this.props.books.map(boo => <li>{boo.title} by {boo.author} </li>)}
//        <hr></hr>
//      </div>

//    )
//  }

// }


// ReactDOM.render(
// <Library/>,
//  document.getElementById('root')
// )



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
