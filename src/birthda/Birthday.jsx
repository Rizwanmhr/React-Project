import React,{useState} from 'react'
import List from './List'
import {data} from './Data'

const Birthday = () => {
    const [people, setPeople] = useState(data)
    // const removeAll = () => {
    //     setPeople([])
    // }
    return (
        <div className='container'>
           <h1> {people.length} Birthday wishes</h1>
            <List people={people} />
            <button onClick={() => setPeople([])}>Remove All</button>
        </div> 
    )
}

export default Birthday
