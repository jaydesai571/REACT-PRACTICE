import React from 'react'

function Functionclick() {
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )

    function clickHandler() {
        console.log('Button Clicked')
    }
}

export default Functionclick