
import React, { Component } from 'react'


class Form extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username: '',
             comments: '',
             topic: ''
        }
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleCommentsChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }
    handleTopicChange = (event) => {
        this.setState ({
            topic:event.target.value
        })
    }
handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    event.preventDefault()
}
    
    render() {
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username:  </label>
                    <input 
                    type="text" 
                    value={username} 
                    onChange={this.handleUsernameChange} />
                    <br />
                    <br />
                    <br />
                    <label>Comments: </label>
                    <textarea 
                    value={comments}
                    onChange={this.handleCommentsChange}>
                    </textarea>
                    <br />
                    <br />
                    <br />
                    <label>Topic:  </label>
                    <select value={topic} onChange={this.handleTopicChange} >
                        <option value='React'>React</option>
                        <option value='angular'>angular</option>
                        <option value='Vue'>Vue</option>
                    </select>
                    <br />
                    <br/>
                    <button type="submit">Submit</button>
                </div>              
            </form>
        )
    }
}

export default Form
