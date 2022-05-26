import React from 'react';
import PropTypes from 'prop-types';

export default function Card({
  data: {
    img, header, desc, linkLabel, linkPath,
  },
}) {
  return (
    <div className="grid justify-items-start bg-white h-80 w-80 shadow-2xl rounded-2xl overflow-hidden m-8
    ease-in duration-100 hover:-translate-x-2 hover:-translate-y-2"
    >
      <img src={img} alt={linkLabel} className="h-40 w-full" />
      <h2 className="font-bold text-md px-4 pt-2 pb-0">{header}</h2>
      <p className="justify-self-center text-sm px-4">{desc}</p>
      <a href={linkPath} alt="Link to Project" className="justify-self-center text-green-600">{linkLabel}</a>
    </div>
  );
}

Card.propTypes = {
  data: {
    img: PropTypes.string,
    header: PropTypes.string,
    desc: PropTypes.string,
    linkLabel: PropTypes.string,
    linkPath: PropTypes.string,
  }.isRequired,
};
