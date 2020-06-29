import React from 'react'
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 30,
            skill: 'React'
        },
        {
            id: 1,
            name: 'Diana',
            age: 30,
            skill: 'React'
        }
    ]
const personlist = persons.map(person => (<Person person={person} />))
    return (
        <div>{personlist}</div>
    )
}

export default NameList
