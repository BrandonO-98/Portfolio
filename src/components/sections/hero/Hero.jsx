import React from 'react';
// import closeup from 'assets/images/closeup.jpg';
import bodyshot from 'assets/images/bodyshot.jpg';

export default function Hero() {
  return (
    <section className="grid h-[750px] w-full max-w-full justify-items-center items-center my-11">
      <div className=" grid bg-code bg-cover w-11/12 h-full justify-items-center items-center shadow-2xl rounded-md">
        <div className="bg-white grid grid-cols-1 w-10/12 h-5/6 justify-items-center items-center rounded-2xl overflow-hidden md:h-4/6 md:grid-cols-2 lg:max-w-5xl">
          <div className="grid justify-items-center">
            <h2 className="h-8 m-8 text-green-500 font-bold text-3xl md:mt-0 md:text-5xl">Welcome!</h2>
            <p className="m-8 font-serif text-md md:m-10 lg:text-lg">
              I&#39;m Brandon Oscar Shew, a Computational Physicist turned Web Developer
              specializing in the front-end.
            </p>
            <ul className="grid grid-cols-2 items-center justify-items-center">
              <li className="grid">
                <a
                  href="/"
                  className="ease-in duration-300 text-sm border border-green-500 bg-green-500 py-2 px-8 text-white rounded-full font-bold
                  hover:text-black hover:bg-white md:px-6 lg:text-lg lg:mr-2"
                >
                  Resume
                </a>

              </li>
              <li className="grid">
                <a
                  href="/"
                  className="ease-in duration-300 border border-green-500 py-2 px-8 rounded-full font-bold
                  hover:text-white hover:bg-green-500 md:px-6 lg:text-lg lg:px-8 lg:mr-2"
                >
                  Projects
                </a>

              </li>
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
