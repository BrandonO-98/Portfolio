/* eslint-disable react/prop-types */
import React from 'react';
// import closeup from 'assets/images/closeup.jpg';
import PropTypes from 'prop-types';
import bodyshot from 'assets/images/bodyshot.jpg';
import { ReactComponent as Facebook } from 'assets/icons/facebook.svg';
import { ReactComponent as Instagram } from 'assets/icons/instagram.svg';
import { ReactComponent as Github } from 'assets/icons/github.svg';
import { ReactComponent as Linkedin } from 'assets/icons/linkedin.svg';
import { Link } from 'lib/Proptypes';

export default function Hero({
  socials, scrollToSection, home, resume, projects,
}) {
  const socialClassName = 'stroke-black h-8 duration-300 hover:fill-green-500 sm:h-9';
  const socialIcons = [<Facebook className={socialClassName} />,
    <Instagram className={socialClassName} />,
    <Github className={socialClassName} />,
    <Linkedin className={socialClassName} />];

  return (
    <section ref={home} className="grid h-[750px] w-full max-w-full justify-items-center items-center my-12">
      <div className=" grid bg-code bg-cover w-11/12 h-full justify-items-center items-center shadow-2xl rounded-md">
        <div className="bg-white grid grid-cols-1 w-10/12 h-5/6 justify-items-center items-center rounded-2xl overflow-hidden md:h-4/6 md:grid-cols-2 lg:max-w-5xl">
          <div className="grid justify-items-center">
            <h2 className="h-8 m-8 text-green-500 font-bold text-3xl md:mt-0 md:text-5xl">Welcome!</h2>
            <p className="m-4 font-serif text-md sm:m-8 md:m-10 lg:text-lg">
              I&#39;m Brandon Oscar Shew, a Computational Physicist turned Software Engineer
              experienced in Full-Stack Web Development.
            </p>
            <ul className="grid grid-cols-2 items-center justify-items-center">
              <li className="grid">
                <button
                  onClick={() => scrollToSection(resume)}
                  type="button"
                  className="ease-in duration-300 text-sm border border-green-500 bg-green-500 py-2 px-8 text-white rounded-full font-bold
                  hover:text-black hover:bg-white md:px-6 lg:text-lg lg:mr-2"
                >
                  Resume
                </button>

              </li>
              <li className="grid">
                <button
                  onClick={() => scrollToSection(projects)}
                  type="button"
                  className="ease-in duration-300 border border-green-500 py-2 px-8 rounded-full font-bold
                  hover:text-white hover:bg-green-500 md:px-6 lg:text-lg lg:px-8 lg:mr-2"
                >
                  Projects
                </button>

              </li>
            </ul>
            <ul className="w-full h-full grid grid-cols-4 items-center justify-items-center px-8 pt-6 max-w-xs">
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
          <div className="grid bg-white h-full w-full items-center justify-items-center">
            <img src={bodyshot} alt="Close-up of Brandon" className="w-72 object-fit border-4 rounded-full border-green-500 md:w-5/6" />
          </div>
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = {
  socials: PropTypes.arrayOf(Link),
  scrollToSection: PropTypes.func.isRequired,
  home: PropTypes.shape({}).isRequired,
  resume: PropTypes.shape({}).isRequired,
  projects: PropTypes.shape({}).isRequired,

};

Hero.defaultProps = {
  socials: [{ url: 'https://www.facebook.com/brandon.shew.9/', label: 'social1' }, { url: 'https://www.instagram.com/brandon_o.shew/', label: 'social2' },
    { url: 'https://github.com/BrandonO-98', label: 'social3' }, { url: 'https://www.linkedin.com/in/brandon-oscar-shew/', label: 'social4' },
  ],
};
