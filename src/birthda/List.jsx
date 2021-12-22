import React from 'react'

const List = ({people}) => {
    return (
        <div>
            {
                people.map((currVal) => {
                    const {id,name,age,image} = currVal
                 return(
                     <article key={id} className='person'>
                     <img src={image} alt="pic" />,
                    <h4> {name} </h4>,
                     <p>{age} Year</p>
                </article>


                 )
                })
            }
        </div>
    )
}

export default List
