import React from 'react'

function Column() {
    return (
        <React.Fragment>
            {
                items.maps( item => (
                    <React.Fragment key={item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            <td>Name</td>
            <td>Jay Desai</td>
        </React.Fragment>
    )
}

export default Column
