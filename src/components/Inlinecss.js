import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inlinecss() {
    return (
        <div>
            <h2 style={heading}>Inline CSS</h2>
            
            {/* Line 15 codes means we can use appstyle.css file into any component we just need to make sure that 
            we are using className instead of styles as in Inline CSS */}
            <h1 className='error'>Error</h1> 


        </div>
    )
}

export default Inlinecss
