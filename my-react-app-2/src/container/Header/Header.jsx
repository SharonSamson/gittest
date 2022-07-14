import React from 'react';

import {SubHeading} from '../../components';
import {images} from '../../constants';
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper sectino__padding' id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavour" />
      <h1 className='app__header-h1'>Excite Your Taste Buds With us</h1>
      <p className='p__opensans' style={{margin: '2rem 0'}}>All four elements were happening in equal measure - the cuisine, the wine, the service, and the overall ambience. It taught me that dining could happen at a spiritual level</p>
      <button type="button" className='custom__button'>Explore Menu</button>    
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header img"/>
    </div>
  </div>
);

export default Header;
