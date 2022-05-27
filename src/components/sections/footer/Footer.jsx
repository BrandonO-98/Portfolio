import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Developer } from 'assets/icons/web.svg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as Twitter } from 'assets/icons/twitter.svg';
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg';
import { Link, Media } from 'lib/Proptypes';

// complex footer seems to be done. Maybe a gradient should be placed on the
// instagram icon and how to use transitions for svg fill (it doesn't seem to work).

export default function Footer({ links, logo, socials }) {
  const socialIcons = [<Facebook className="stroke-white h-6 duration-300 hover:fill-darkBlue md:h-8" />,
    <Instagram className="stroke-white h-6 duration-300 hover:fill-danger md:h-8" />,
    <Twitter className="stroke-white h-6 duration-300 hover:fill-lightBlue md:h-8" />,
    <Linkedin className="stroke-white h-6 duration-300 hover:fill-darkBlue md:h-8" />];

  return (
    <div className="grid h-50 bg-green-600 w-full max-w-full">
      {/* footer-container */}
      <div className="grid grid-cols-1 justify-items-center ">
        {/* link-container */}
        {/* 'double for loop' to create 8 links total */}

        <ul className="grid grid-rows-4 text-white justify-items-center pt-2 w-full text-lg font-bold lg:grid-cols-4 lg:pt-0 lg:h-20">
          {/* links-headers */}
          {links.map((link) => (
            <li className="text-white w-full font-normal h-8 duration-200 ease-in
            lg:h-20 lg:w-40 hover:font-bold hover:border-y-4 hover:border-white"
            >
              {/* links */}
              <a href={link.url} alt="hi" target="_blank" rel="noreferrer" className="grid w-full h-full items-center justify-items-center">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

      </div>
      <div className="h-12 grid grid-cols-2 items-center justify-items-center lg:grid-cols-3">
        {/* footer-bar */}
        <div className="flex items-center justify-items-center">
          {/* footer-logo-container */}
          <Developer className="ml-2 w-8 h-8 fill-white" />
          <h1 className="text-white text-xl font-bold w-full pl-4">{logo.brand}</h1>

        </div>
        <p className="hidden text-white lg:grid">Copyright © 2022 Brandon Oscar Shew</p>
        <ul className="w-full h-full grid grid-cols-4 items-center justify-items-center px-4 max-w-xs lg:px-8">
          {socials.map((social, index) => (
            <li className="grid items-center justify-items-center w-full h-full">
              <a
                href={social.url}
                alt={social.label}
                target="_blank"
                className="grid items-center justify-items-center w-full h-full duration-200 ease-in hover:translate-x-1 hover:-translate-y-1"
                rel="noreferrer"
              >
                {socialIcons[index]}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Footer.propTypes = {
  links: PropTypes.arrayOf(Link),
  logo: Media,
  socials: PropTypes.arrayOf(Link),

};

Footer.defaultProps = {
  links: [{ url: 'https://www.google.com/', label: 'Home' }, { url: 'https://www.bing.com/', label: 'About' },
    { url: 'https://yahoo.com/?lang=en', label: 'Resume' }, { url: 'https://www.duckduckgo.com/', label: 'Projects' }],
  logo: {
    url: 'https://flowbite.com/docs/images/logo.svg',
    brand: 'Brandon O. Shew',
  },
  socials: [{ url: 'https://www.facebook.com/brandon.shew.9/', label: 'social1' }, { url: 'https://www.instagram.com/brandon_o.shew/', label: 'social2' },
    { url: 'https://twitter.com/Brandon43696011', label: 'social3' }, { url: 'www.linkedin.com/in/brandon-shew-a9572bb2', label: 'social4' }],
};
