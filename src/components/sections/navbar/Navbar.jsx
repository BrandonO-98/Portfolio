/* eslint-disable import/no-absolute-path */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Burger } from 'assets/icons/menu.svg';
import { Link, Media } from 'lib/Proptypes';
import { ReactComponent as Cross } from 'assets/icons/menu-close.svg';
import { ReactComponent as Developer } from 'assets/icons/web.svg';
// 3 props {img, array of objs, }
export default function Navbar({
  links, logo,
}) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    // should this be width of screen or full
    <nav className="grid w-screen justify-items-center h-24 bg-white sticky top-0 drop-shadow-lg z-[1]">
      {/* navbar */}
      <div className="relative grid grid-cols-2 h-full w-full justify-items-center items-center lg:max-w-6xl">
        {/* navbar-container */}
        <div className="flex items-center h-full lg:mr-40">
          {/* logo-container */}
          <a href="/" className="pl-2">
            <Developer className="w-full h-8 fill-black" />
          </a>
          <h1 className="text-black pl-4 font-bold drop-shadow-xl">
            <a href={links[0].url} className="text-xl">{logo.brand}</a>
          </h1>
          <h2 className="text-green-600 relative top-1 left-2 font-bold">
            <span className="text-black">/ </span>
            Web Developer
          </h2>
        </div>
        <ul className={click ? 'bg-white absolute h-96 w-full -left-0 top-20 grid grid-rows-4 ease-in duration-500 lg:mr-32 lg:grid-rows-none lg:grid-cols-4 lg:static lg:h-20'
          : 'bg-white absolute h-96 w-full -left-full top-20 grid grid-rows-4 ease-in duration-500 lg:mr-32 lg:grid-rows-none lg:grid-cols-4 lg:static lg:h-full'}
        >
          {links.map((link, index) => (
            <li
              key={link.label}
              className={index === (links.length - 1) ? 'grid h-full self-center items-center justify-items-center'
                : 'grid h-full'}
            >
              <a
                href={link.url}
                className={index === (links.length - 1)
                  ? 'grid w-80 h-10 bg-white text-black items-center justify-items-center border-2 border-white rounded-3xl lg:w-full hover:text-white hover:font-bold hover:bg-green-500 ease-in duration-300'
                  : 'grid text-black h-full items-center justify-items-center ease-in duration-100 hover:text-green-400 hover:border-b-4 hover:border-green-500 lg:h-full'}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          type="button"
          className="grid bg-white h-full w-15 lg:hidden items-center justify-center"
          onClick={handleClick}
        >
          {click ? <Cross className="w-full h-15 stroke-black" /> : <Burger className="w-full h-15 stroke-black" />}
        </button>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  links: PropTypes.arrayOf(Link),
  logo: Media,
};

Navbar.defaultProps = {
  links: [
    {
      url: 'https://google.com',
      label: 'Home',
    },
    {
      url: 'https://bing.com',
      label: 'About',
    },
    {
      url: 'https://ca.yahoo.com',
      label: 'Resume',
    },
    {
      url: 'https://duckduckgo.com/',
      label: 'Projects',
    },
  ],
  logo: {
    url: 'https://flowbite.com/docs/images/logo.svg',
    brand: 'Brandon O. Shew',
  },
};
