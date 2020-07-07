import React, { PureComponent } from 'react'

class PureComponents extends PureComponent {
    render() {
        return (
            <div>
                Pure Component is working {this.props.name}
            </div>
        )
    }
}

export default PureComponents
