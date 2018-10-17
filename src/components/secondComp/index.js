import React,{Component} from 'react';

class SecondComp extends Component{
    
   render(){
    var myStyle = {
        height:800,
        backgroundColor: 'red',
        textAlign:'center',
        color:'white'
     }
      return(
         <div className="secondcomp" style={myStyle}>
            <h1>Second Component</h1> 
         </div>
         
         
      );
   }
}
export default SecondComp;