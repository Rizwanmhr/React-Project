import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
const Home = () => {
  return (
    <main>
      <button className='sidebar-toggle'>
      <MenuIcon />
      </button>
      <button className='btn'>
        show modal
      </button>
    </main>
  );
};

export default Home;