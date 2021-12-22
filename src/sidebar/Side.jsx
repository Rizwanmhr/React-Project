import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
const Side = () => {

  return (
    <aside className='sidebar'>
      <div className='sidebar-header'>
        <button className='close-btn'>
        <MenuIcon />
        </button>
      </div>
      
    </aside>
  );
};

export default Side;