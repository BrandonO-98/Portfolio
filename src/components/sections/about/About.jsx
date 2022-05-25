import React from 'react';
import closeup from 'assets/images/formal.jpg';

export default function About() {
  return (
    <div className="grid h-screen w-screen items-center justify-items-center">
      <div className="grid w-10/12 my-12 h-[750px] bg-white shadow-lg lg:max-w-6xl">
        <div className="grid">
          <img src={closeup} alt="closeup" className="h-20 w-20" />
          <h2 className="p-4 text-lg font-bold">My Journey</h2>
          <p className="p-4">
            Just in case you missed it, I&apos;m Brandon and I have a passion for programming but
            this wasn&apos;t always the case.
          </p>
          <p className="p-4">
            {`On admission into the Physics program at the University of Toronto in 2016 I intended to pursue a career in teaching 
          and this remained true for quite some time. It wasn't until I volunteered in a Physics lab in my 3th year when I was 
          first exposed to programming. I was tasked with identifying particles in an image captured by a TIRF microscope. Long 
          story short, many sleepless nights debugging was actually fun, especially when my program ran.`}
          </p>
          <p className="p-4">
            {`Discovering this passion, I did a MSc in Computational Physics where I sharpened my skills in MATLAB, Python, C++, and 
          Shell Scripting. Outside of academia, I also completed intermediate/advanced courses on Javascript (Es6 and React) as 
          well as HTML/CSS. Since then I have decided to lean toward web-development instead of data analysis.`}
          </p>
          <p className="p-4">
            {`Hobbywise, I enjoy watching movies, no matter how new or old, and spending time outdoors with family and friends. I also 
          dig aquatic activities and hope to learn how to surf in the near future.`}
          </p>
        </div>
      </div>
    </div>
  );
}
