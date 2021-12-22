import React, { useState } from 'react';
import reviews from './ReviewData'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Reviewitems = () => {
  const [index, setIndex] = useState(0)
  const {name, image, job, text,} = reviews[index]

  const checkNumber = (number) => {
    if (number > reviews.length - 1) {
      return 0;
    }
    if (number < 0) {
      return reviews.length - 1;
    }
    return number;
  };

const leftSide = () => {
  setIndex((index) => {
      const newSlide = index + 1
      return checkNumber(newSlide);
  })
}
const rightSide = () => {
    setIndex((index) => {
      const newSlide = index - 1;
      return checkNumber(newSlide);
    })
}

const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * reviews.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <ArrowBackIosIcon onClick={leftSide} />
        </button>
        <button className='next-btn' >
          <ChevronRightIcon onClick={rightSide} />
        </button>
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
};

export default Reviewitems;