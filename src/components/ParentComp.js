import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComponents from './PureComponents'

class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'jay'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Jay Desai'
            })
        }, 2000)
    }
    
    render() {
        return (
            <div>
                Parent Component is working.
                <RegComp name={this.state.name} />
                <PureComponents name={this.state.name} />            
            </div>
        )
    }
}

export default ParentComp