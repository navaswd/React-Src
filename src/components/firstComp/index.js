import React,{Component} from 'react';
import scrollToComponent from 'react-scroll-to-component';
import SecondComp from '../secondComp';
import ThirdComp from '../thirdComp';
import './style.css';

class FirstComp extends Component{
    constructor(props){
        super(props);
        //this.test = this.test.bind(this);
    }
       
  
     test=()=>{
        //alert();
        scrollToComponent(this.red);
      }
   render(){
    var myStyle = {
        height:900,
        backgroundColor: 'green',
        textAlign:'center',
        color:'white'
     }
      return(
        
         <div>
            <div style={myStyle}>
            <h1>First Component</h1>
            <button className="testname" onClick={()=>this.test()}>Down</button>
            </div>
            <SecondComp className='red' ref={(section) => { this.red = section; }}/>
            <ThirdComp/>                     
         </div>

      );
   }
}
export default FirstComp;