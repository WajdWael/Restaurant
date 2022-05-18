import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import { useState } from 'react';


const Navbar = () => {
  const [toggoleMenu, setToggleMenu] = useState(false);
  return (
    <nav className='app__navbar'>
      {/* Logo */}
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app logo" />
      </div>

      {/* Links */}
      <ul className='app__navbar-links'>
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#about">About</a></li>
        <li className="p__opensans"><a href="#menu">Menu</a></li>
        <li className="p__opensans"><a href="#awards">Awards</a></li>
        <li className="p__opensans"><a href="#contact">Contact</a></li>
      </ul>

      {/* logoin */}
      <div className="app__navbar-login">
        <a href="#login" className="p__opensans">Log in / Register</a>
        <div />
        <a href='/' className='p__opensans'>Book Table</a>
      </div>

      {/* smallScreen */}
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu className="burgericon" color='#fff' fontSize={27} onClick={() => {setToggleMenu(true)}} />

        {toggoleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => { setToggleMenu(false) }} />
            {/* Links */}
            <ul className='app__navbar-smallscreen-links'>
              <li className="p__opensans"><a href="#home">Home</a></li>
              <li className="p__opensans"><a href="#about">About</a></li>
              <li className="p__opensans"><a href="#menu">Menu</a></li>
              <li className="p__opensans"><a href="#awards">Awards</a></li>
              <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
          </div>
        )}

      </div>
    </nav>
  )
};

export default Navbar;
