import React from 'react'

const Del = ({DeleteData,id}) => {
    return (
        <div>
            <button onClick={() => DeleteData(id)}>Delete</button>
        </div>
    )
}

export default Del
