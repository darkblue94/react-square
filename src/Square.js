import React from 'react';
import  './Square.css'

class Square extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count : 0 ,
            isHovering:false
        }
    };
    updateCount = () => {
        this.setState({count:this.state.count + 1})
    }
    render(){
        const {bgCol, textCol } =this.props ;
        const style_var= (this.state.isHovering)? {
            backgroundColor:bgCol,
            border: ` 8px solid ${this.props.textCol}`,
            borderRadius: "40px",
            width:"60%",
            } : {
            backgroundColor:bgCol,
            border:`2px solid ${this.props.bgCol}`,
            }
        return(
            // we created the onClick event to be a call back function, so it only FIRES when clicked as opposed to FIREing during the load of the DOM.
           <div
            onMouseEnter={()=> this.setState({isHovering:true})}
            onMouseLeave={()=> this.setState({isHovering:false})}
            onClick={this.updateCount} style={style_var} className="square">


            <h2 style={{color:textCol}}> {textCol} on {bgCol} </h2>
            <h1 style={{color:textCol}}> {this.state.count}</h1>
            </div>
        );
    }
}
export default Square;