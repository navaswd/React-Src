import React,{Component} from 'react';
//import './style.css';

class ThirdComp extends Component{
   render(){
    var myStyle = {
        height:800,
        backgroundColor: 'blue',
        textAlign:'center',
        color:'white'
     }
      return(
         <div style = {myStyle}>
            <h1>Third Component</h1>
         </div>
      );
   }
}
export default ThirdComp;