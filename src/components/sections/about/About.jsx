import React from 'react';
import closeup from 'assets/images/formal.jpg';
import { ReactComponent as Tailwind } from 'assets/icons/tailwind.svg';
import { ReactComponent as Reactl } from 'assets/icons/reactl.svg';
import { ReactComponent as Python } from 'assets/icons/python.svg';

export default function About() {
  return (
    <div className="grid h-screen w-screen items-center justify-items-center">
      <div className="grid w-10/12 my-12 h-[750px] bg-white shadow-lg lg:max-w-6xl">
        <div className="relative grid items-center justify-items-center">
          <h2 className="p-8 pb-0 text-lg font-bold justify-self-start ">About Me</h2>
          {/* <div className="grid items-center justify-items-center
          bg-water bg-cover w-10/12 h-full rounded-xl shadow-xl"></div> */}
          <img src={closeup} alt="closeup" className="h-80 w-80 rounded-full border-4 border-green-500" />
          <div className="absolute w-24 h-24 top-[80px] left-[200px] border-2 rounded-full border-green-400 shadow-2xl">
            <Reactl className=" w-full h-full" />
          </div>
          <div className="absolute w-32 h-32 top-[275px] left-[200px] border-2 rounded-full border-green-400 shadow-2xl">
            <Tailwind className=" w-full h-full" />
          </div>
          <div className="absolute w-40 h-40 top-[175px] right-[150px] border-2 rounded-full border-green-400 shadow-2xl">
            <Python className=" w-full h-full " />
          </div>

        </div>
        <div className="grid grid-cols-2 items-start justify-items-center mt-8">
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
            <span className="text-green-600 font-bold"> MATLAB, Python, C++, and Shell Scripting</span>
            .
          </p>
          <div>
            <p className="px-6 pb-4 indent-6">
              Outside of academia, I also completed intermediate/advanced courses on
              <span className="text-green-600 font-bold"> Javascript (Es6 and React)</span>
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
