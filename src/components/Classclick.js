import React, { Component } from 'react'

class Classclick extends Component {
    
    clickHanlder () {
        console.log('Clicked the button')
    }
    
    render() {
        return (
            <div>
                <button onClick={this.clickHanlder}>Click ME!!</button>                
            </div>
        )
    }
}

export default Classclick
