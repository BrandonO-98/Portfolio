import React from 'react';
import PropTypes from 'prop-types';
import { ReactComponent as Developer } from 'assets/icons/web.svg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg';
import { Link, Media } from 'lib/Proptypes';

// complex footer seems to be done. Maybe a gradient should be placed on the
// instagram icon and how to use transitions for svg fill (it doesn't seem to work).

export default function Footer({ logo, socials }) {
  const socialClassName = 'stroke-white h-8 duration-300 hover:fill-green-400 sm:h-9';
  const socialIcons = [<Facebook className={socialClassName} />,
    <Instagram className={socialClassName} />,
    <Github className={socialClassName} />,
    <Linkedin className={socialClassName} />];

  return (
    <div className="grid h-20 bg-green-600 w-full max-w-full">
      {/* footer-container */}
      <div className="grid grid-cols-1 justify-items-center ">
        {/* link-container */}
        {/* 'double for loop' to create 8 links total */}

      </div>
      <div className="h-12 grid grid-cols-2 items-center justify-items-center lg:grid-cols-3">
        {/* footer-bar */}
        <div className="flex items-center justify-items-center">
          {/* footer-logo-container */}
          <Developer className="ml-2 w-10 h-10 fill-white" />
          <h1 className="text-white text-md font-bold w-full pl-4 sm:text-2xl">{logo.brand}</h1>

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
  logo: Media,
  socials: PropTypes.arrayOf(Link),

};

Footer.defaultProps = {
  logo: {
    url: 'https://flowbite.com/docs/images/logo.svg',
    brand: 'Brandon O. Shew',
  },
  socials: [{ url: 'https://www.facebook.com/brandon.shew.9/', label: 'social1' }, { url: 'https://www.instagram.com/brandon_o.shew/', label: 'social2' },
    { url: 'https://github.com/BrandonO-98', label: 'social3' }, { url: 'https://www.linkedin.com/in/brandon-shew-a9572bb2', label: 'social4' },
  ],
};
