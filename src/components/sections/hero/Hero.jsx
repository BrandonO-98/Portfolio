import React from 'react';
// import closeup from 'assets/images/closeup.jpg';
import bodyshot from 'assets/images/bodyshot.jpg';

export default function Hero() {
  return (
    <section className="grid h-[750px] w-screen justify-items-center items-center my-11">
      <div className=" grid bg-code bg-cover w-11/12 h-full justify-items-center items-center shadow-2xl rounded-md">
        <div className="bg-white grid grid-cols-2 w-10/12 h-4/6 justify-items-center items-center rounded-2xl overflow-hidden lg:max-w-5xl">
          <div className="grid justify-items-center">
            <h2 className="h-4 text-green-500 mb-5 text-5xl font-bold">Welcome!</h2>
            <p className="m-10 font-serif text-lg">
              I&#39;m Brandon Oscar Shew, a Computational Physicist turned Web Developer
              specializing in the front-end.
            </p>
            <ul className="grid grid-cols-2 items-center justify-items-center">
              <li className="grid">
                <a
                  href="/"
                  className="ease-in duration-300 border border-green-500 bg-green-500 text-white px-8 py-2 mr-2 rounded-full font-bold
                  hover:text-black hover:bg-white"
                >
                  Resume
                </a>

              </li>
              <li className="grid">
                <a
                  href="/"
                  className="ease-in duration-300 border border-green-500 px-8 py-2 ml-2 rounded-full font-bold
                  hover:border-none hover:text-white hover:bg-green-500"
                >
                  Projects
                </a>

              </li>
            </ul>
          </div>
          <div className="grid bg-white h-full w-full items-center justify-items-center">
            <img src={bodyshot} alt="Close-up of Brandon" className="w-5/6 object-fit rounded-full border-4 border-green-500 mx-4" />
          </div>
        </div>

      </div>
    </section>
  );
}
