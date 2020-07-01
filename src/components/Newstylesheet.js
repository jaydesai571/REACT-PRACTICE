import React from 'react'
import './myStyle.css'

function Newstylesheet(props) {
    let className = props.primary ? 'primary' : ''
    return (
        <div>
            <h2 className= {`${className} font-xl`}>Style Sheet</h2>
        </div>
    )
}

export default Newstylesheet