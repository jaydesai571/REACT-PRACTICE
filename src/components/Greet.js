import React from 'react'

// function Greet() {
//     return <h1>Hello Vishwas</h1>
// }
////FUNCTIONAL COMPONENT EXTRA
const Greet = props => {
    const {name, heroName} = props
    return (
        <div>
            <h1>Hello {name} A.K.A {heroName}</h1>
            {/* {props.children}  */}
        </div>
    )
}
export default Greet