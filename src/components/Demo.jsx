// import React, { Component } from 'react'

// export default class ChildComp extends Component {
//   // khởi tạo constructor
//   constructor() {
//     // khai báo super
//     super() ;
//     //khai báo state
//     this.state = {
//       studentA : "quân" ,
//       studentB : "tướng" ,
//       address : {
//         city : "HN" ,
//       }
//     }
//   }

//   handleClick = () => {
//     console.log("Click") ;
//     // để cập nhật state lại state thì chúng ta dùng setstate  
//     this.setState({
//       studentA : "A quân local boy " ,
//     })
//   } ;
//   render() {

//     return (
//       <div className='App'>
//         <h4>{this.props.company}</h4>
//         <h4>{this.props.title}</h4>
//         <h4>{this.props.children}</h4> 
//         <h2>{this.state.studentA} đi chơi ở {this.state.address.city} không rủ {this.state.studentB} !!!</h2> 
//         <button onClick={this.handleClick} >Click Me !!!</button>  
//       </div> 
//     )
//   }
// }

import React from "react";
class Demo extends React.Component {
    constructor() {
      super();
      this.state = {color: "tên tôi là : Quân"};
    }
    render() {
      return <h2>Xin chào các bạn {this.state.color} !</h2>; 
    }
  }
export default Demo ;
