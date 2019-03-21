import React from 'react';
import Square from './Square'

const App = ( props )=>{
    return (
        <div className="Container">
       
        <Square textCol="red" bgCol="black"/>
        <Square textCol="salmon" bgCol="purple"/>
        <Square textCol="aqua" bgCol="pink"/>
        <Square textCol="silver" bgCol="yellow"/>
        <Square textCol="black" bgCol="orange"/>
        
        </div>
    )


};

export default App;