import React from 'react';
// import closeup from 'assets/images/closeup.jpg';
import bodyshot from 'assets/images/formal.jpg';

export default function Hero() {
  return (
    <section className="grid h-[750px] w-screen justify-self-center justify-items-center">
      <div className="grid grid-cols-2 m-10 w-10/12 h-11/12 shadow-lg justify-items-center items-center lg:max-w-5xl">
        <div className="grid justify-items-center">
          <h2 className="h-4 text-blue-500 mb-5 text-5xl font-bold">Welcome!</h2>
          <p className="m-10 font-serif text-lg">
            I&#39;m Brandon Oscar Shew, a Computational Physicist turned Web Developer
            specializing in the front-end.
          </p>
          <ul className="grid grid-cols-2 items-center justify-items-center">
            <li className="grid"><a href="/" className="bg-blue-500 text-white px-8 py-2 mr-1 rounded-full">Resume</a></li>
            <li className="grid"><a href="/" className="border-black border px-8 py-2 ml-1 rounded-full">Projects</a></li>
          </ul>
        </div>
        <div className="grid bg-blue-200 h-full w-full items-center justify-items-center">
          <img src={bodyshot} alt="Close-up of Brandon" className="w-5/6 object-fit rounded-full border-4 border-white mx-4" />
        </div>

      </div>
    </section>
  );
}
