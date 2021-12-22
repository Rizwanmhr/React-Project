import React,{useState} from 'react'
import Del from './Del.jsx'
const Delete = () => {
    const [user, setUser] = useState('')
    const [addUser, setaddUser] = useState([])
    const addData = () => {
        if(!user){
        alert('write something')
        }else{
            setaddUser([...addUser,user])
            setUser('')
        }
    }
    const DeleteData = (id) => {
         const updateData = addUser.filter((ind) => {
         return ind !== id
         })
         setaddUser(updateData)
    }
    return (
        <div>
            <input placeholder='write something' value={user} onChange={(e) => setUser(e.target.value)} />
            <button onClick={addData}>Add me</button>
        {
            addUser.map((currValue,id) => {
                return(
                    <>
                    <div key={id}>
                        <p>{currValue}</p>
                    </div>
                    <button onClick={() => DeleteData(id)}>Delete</button>
                    </>
                )
            })
        }
        </div>
    )
}

export default Delete
