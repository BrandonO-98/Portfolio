/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import { cardDataProps } from 'lib/Proptypes';

export default function Card({
  data,
}) {
  return (
    <div className="grid justify-items-center bg-white h-96 w-80 shadow-2xl rounded-2xl overflow-hidden my-8
    ease-in duration-100 hover:-translate-x-2 hover:-translate-y-2 sm:w-96 md:w-80 lg:w-96"
    >
      <video
        src={data.vid}
        autoPlay
        muted
        loop
        type="video/mp4"
        className="w-full"
      />
      <h2 className="justify-self-start font-bold text-md px-4 pt-2 pb-0">{data.header}</h2>
      <p className=" text-sm px-4">{data.desc}</p>
      <p className=" text-xs px-4">{`Technologies: ${data.tech}`}</p>
      <div className="">
        <a
          href={data.linkPath}
          target="_blanck"
          alt="Link to Project"
          className="text-black border border-black rounded-full px-2 py-1 mx-2
        hover:text-green-700 hover:border-green-600"
        >
          {data.linkLabel}

        </a>
        {/* <a
          href={data.docPath}
          alt="Link to Project"
          className=" text-black border border-black rounded-full px-2 py-1 mx-2
        hover:text-green-700 hover:border-green-600"
        >
          {data.docLabel}

        </a> */}
      </div>
    </div>
  );
}

Card.propTypes = {
  data: cardDataProps.isRequired,
};
