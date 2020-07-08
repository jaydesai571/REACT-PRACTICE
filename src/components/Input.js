import React, { Component } from 'react'

class Input extends Component {
    constructor(props) {
        super(props)
             this.inputRef = React.createRef()
        }


    focusInput() {
        this.inputRef.curren.focus()
    }
    
    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
            </div>
        )
    }
}

export default Input
