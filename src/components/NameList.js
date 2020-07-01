import React from 'react'
import Person from './Person'

function NameList() {
    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Bruce',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 2,
    //         name: 'Clark',
    //         age: 30,
    //         skill: 'React'
    //     },
    //     {
    //         id: 3,
    //         name: 'Diana',
    //         age: 30,
    //         skill: 'React'
    //     }
    // ]
    const names = ['Bruce', 'Clark', 'Diana']
    // const personlist = names.map(person => (<Person key={person.id} person={person} />))
const namelist = names.map((name,index) => <h2 key={index}>{name}</h2>)
    return (
        <div>{namelist}</div>
    )
}

export default NameList
