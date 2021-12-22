import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';

const Modal = () => {
  return (
    <div>
      <div className='modal-container'>
        <h3>modal content</h3>
        <button className='close-modal-btn'>
        <ClearIcon />
        </button>
      </div>
    </div>
  );
};

export default Modal;