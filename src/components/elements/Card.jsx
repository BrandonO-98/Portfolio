/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

export default function Card({
  data: {
    vid, header, desc, tech, linkLabel, linkPath,
  },
}) {
  return (
    <div className="grid justify-items-start bg-white h-96 w-80 shadow-2xl rounded-2xl overflow-hidden my-8
    ease-in duration-100 hover:-translate-x-2 hover:-translate-y-2 sm:w-96 md:w-80 lg:w-96"
    >
      <video src={vid} autoPlay muted loop type="video/mp4" className="w-full" />
      <h2 className="font-bold text-md px-4 pt-2 pb-0">{header}</h2>
      <p className="justify-self-center text-sm px-4">{desc}</p>
      <p className="justify-self-center text-xs px-4">{`Technologies: ${tech}`}</p>
      <a
        href={linkPath}
        alt="Link to Project"
        className="justify-self-center self-center text-black border border-black rounded-full px-2 py-1 hover:text-green-700"
      >
        {linkLabel}

      </a>
    </div>
  );
}

Card.propTypes = {
  data: {
    vid: PropTypes.string,
    header: PropTypes.string,
    desc: PropTypes.string,
    tech: PropTypes.string,
    linkLabel: PropTypes.string,
    linkPath: PropTypes.string,
  }.isRequired,
};
