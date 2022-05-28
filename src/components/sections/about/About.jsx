import React from 'react';
import PropTypes from 'prop-types';
import closeup from 'assets/images/formal.jpg';
import { ReactComponent as Tailwind } from 'assets/icons/tailwind.svg';
import { ReactComponent as Reactl } from 'assets/icons/reactl.svg';
import { ReactComponent as Python } from 'assets/icons/python.svg';
import SectionHeader from 'components/elements/SectionHeader';

export default function About({ about }) {
  return (
    <div ref={about} className="grid w-full max-w-full items-center justify-items-center mb-12">
      <SectionHeader header="About" />
      <div className="grid w-10/12 pb-5 mt-12 bg-white shadow-lg lg:max-w-6xl">
        <div className="relative grid items-center justify-items-center">
          {/* <h2 className="p-8 pb-0 text-lg font-bold justify-self-start ">About</h2> */}
          {/* <div className="grid items-center justify-items-center
          bg-water bg-cover w-10/12 h-full rounded-xl shadow-xl"></div> */}
          <img src={closeup} alt="closeup" className="h-80 w-80 rounded-full border-4 border-green-500" />
          <div className="absolute w-24 h-24 top-[0] -left-[3px] border-2 rounded-full border-green-400 shadow-2xl bg-white
          sm:left-[60px] md:left-[150px] lg:left-[200px]"
          >
            <Reactl className=" w-full h-full" />
          </div>
          <div className="absolute w-24 h-24 top-[200px] -left-[5px] border-2 rounded-full border-green-400 shadow-2xl bg-white
          sm:w-32 sm:h-32 sm:left-[50px] md:left-[100px] lg:left-[135px]"
          >
            <Tailwind className=" w-full h-full" />
          </div>
          <div className="absolute w-24 h-24 top-[100px] -right-[25px] border-2 rounded-full border-green-400 shadow-2xl bg-white
          sm:w-40 sm:h-40 sm:right-[0px] md:right-[50px] lg:right-[95px]"
          >
            <Python className=" w-full h-full " />
          </div>

        </div>
        <div className="grid items-start justify-items-center mt-8 md:grid-cols-2">
          <p className="px-6 indent-6">
            Previous to admission into the Physics program at the University of Toronto in
            2016, I intended to pursue a career in teaching
            and this remained true for quite some time. It wasn&apos;t until I volunteered in a
            Physics lab in my third year when I was
            first exposed to programming. I was tasked with identifying particles in an
            image captured by a TIRF microscope. Long
            story short, many sleepless nights debugging came with unexpected gratification
            and excitement, especially when my program ran -
            <span className="italic"> on ocassion. </span>
            Discovering this new passion, I went on to earn a MSc in Computational
            Physics
            where I sharpened my skills in
            <span className="text-green-600 font-bold"> MATLAB</span>
            ,
            <span className="text-green-600 font-bold"> Python</span>
            ,
            <span className="text-green-600 font-bold"> C++ </span>
            and
            <span className="text-green-600 font-bold"> Shell Scripting</span>
            .
          </p>
          <div>
            <p className="px-6 py-4 indent-6 md:pb-4 md:pt-0">
              Outside of academia, I also completed intermediate/advanced courses on
              <span className="text-green-600 font-bold"> Javascript (ES6/React) </span>
              as  well as
              <span className="text-green-600 font-bold"> HTML/CSS</span>
              . Since then, I have decided
              to lean towards web-development instead of data analysis. I hope to
              be able to call myself a full-stack developer within the comming years.
            </p>
            <p className="px-6 indent-6">
              {`Hobbywise, I enjoy watching movies, no matter how new or old, and spending time outdoors with family and friends. I also 
          dig aquatic activities and hope to learn how to surf in the near future.`}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

About.propTypes = {
  about: PropTypes.number.isRequired,
};
