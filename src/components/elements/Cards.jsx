import React from 'react';
import PropTypes from 'prop-types';
import { cardDataProps } from 'lib/Proptypes';
import Card from 'components/elements/Card';

export default function Cards({ cardData }) {
  return (
    <div className="grid mt-4 items-center justify-items-center md:grid-cols-2 md:w-[700px] lg:max-w-[900px] lg:w-[900px]">
      {cardData.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
}

Cards.defaultProps = {
  cardData: [
    {
      vid: 'MemeGen.mp4',
      header: 'Meme Generator',
      desc: `On button click a random image is displayed after a set is fetched on 
      page render. Meme top and bottom text are accessible to the user.`,
      tech: 'React, HTML/CSS',
      linkLabel: 'Meme Generator App',
      linkPath: 'https://leafy-kleicha-5ef554.netlify.app',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      vid: 'Tenzies.mp4',
      header: 'Tenzies Game',
      desc: `Clicking start begins the game. Dice are randomized periodically, freeze all dice at
      the same value to win.`,
      tech: 'React, HTML/CSS',
      linkLabel: 'Tenzies App',
      linkPath: 'https://beautiful-cheesecake-ed61f7.netlify.app',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      vid: 'Notes.mp4',
      header: 'Notes',
      desc: 'This web app built in ES6 JS allows the user to create, update and delete notes.',
      linkLabel: 'Notes App',
      tech: 'JS ES6, HTML/CSS',
      linkPath: 'https://remarkable-sawine-af096d.netlify.app',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      vid: 'video1.mp4',
      header: 'Restaurant Guide - Comming Soon',
      desc: `On map change, a set of restaurants are fetched from an API. Restaurant information 
      is displayed for the user. The map can be changed by dragging, or by form entry.`,
      tech: 'React, HTML, Tailwind CSS, Axios',
      linkLabel: 'Restaurant Guide App',
      linkPath: 'https://google.com',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
  ],
};

Cards.propTypes = {
  cardData: PropTypes.arrayOf(cardDataProps),
};
