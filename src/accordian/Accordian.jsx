import React,{useState} from 'react'
import SingleQuestion from './SingleQuestion'
import Questions from './Questions'
import './index.css'
const Accordian = () => {
    const [questions, setQuestions] = useState(Questions)
    return (
        <div>
         {
             questions.map((question) => {
                 return(
                 <SingleQuestion key={questions.id} {...question}/>
                 )
             })
         }
        </div>
    )
}

export default Accordian
