import React,{useState} from 'react'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

const SingleQuestion = ({title,info}) => {
    const [toggle, setToggle] = useState(false)
    return (
        <article className='question'>
          <header>
            <h4>{title}</h4>
            <button className='btn' onClick={() => setToggle(!toggle)}>
                {
                    toggle ? <RemoveIcon /> : <AddIcon/>
                }
            </button>
          </header>
          {
              toggle &&  <p>{info}</p>
          }
         
        </article>
      );
}

export default SingleQuestion
