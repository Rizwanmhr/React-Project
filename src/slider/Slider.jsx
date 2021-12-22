import React,{useState} from 'react'
import {Data} from './Data'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import './index.css'
const Slider = () => {
    const [people, setPeople] = useState(Data);
    const [index, setIndex] = React.useState(0);

    return (
        <section className="section">
          <div className="title">
            <h2>
              <span>/</span>reviews
            </h2>
          </div>
          <div className="section-center">
            {people.map((person, personIndex) => {
              const { id, image, name, title, quote } = person;
    
              let position = 'nextSlide';
              if (personIndex === index) {
                position = 'activeSlide';
              }
              if (
                personIndex === index - 1 ||
                (index === 0 && personIndex === people.length - 1)
              ) {
                position = 'lastSlide';
              }
    
              return (
                <article className={position} key={id}>
                  <img src={image} alt={name} className="person-img" />
                  <h4>{name}</h4>
                  <p className="title">{title}</p>
                  <p className="text">{quote}</p>
                  {/* <FaQuoteRight className="icon" /> */}
                </article>
              );
            })}
            <button className="prev" onClick={() => setIndex(index - 1)}>
             <ArrowBackIosIcon />
            </button>
            <button className="next" onClick={() => setIndex(index + 1)}>
            <ArrowForwardIosIcon />
            </button>
          </div>
        </section>
      );
}

export default Slider
