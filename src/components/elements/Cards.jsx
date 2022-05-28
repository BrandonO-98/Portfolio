import React from 'react';
import PropTypes from 'prop-types';
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
      vid: 'video1.mp4',
      header: 'Meme Generator',
      desc: `On button click a random image is displayed after a set is fetched on 
      page render. Meme top and bottom text are accessible by the user.`,
      tech: 'React, HTML/CSS',
      linkLabel: 'Meme Generator App',
      linkPath: 'https://google.com',
      docLabel: 'Build Docs',
      docPath: 'https://google.com',
    },
    {
      vid: 'video2.mp4',
      header: 'Tenzies Game',
      desc: `Clicking start begins the game. Dice are randomized periodically, freeze all at
      the same value to win.`,
      tech: 'React, HTML/CSS',
      linkLabel: 'Tenzies App',
      linkPath: 'https://google.com',
      docLabel: 'Build Docs',
      docPath: 'https://google.com',
    },
    {
      vid: 'video2.mp4',
      header: 'Notes',
      desc: 'This web app built in Es6 JS allows the user to create, update and delete notes.',
      linkLabel: 'Notes App',
      tech: 'JS ES6, HTML/CSS',
      linkPath: 'https://google.com',
      docLabel: 'Build Docs',
      docPath: 'https://google.com',
    },
    {
      vid: 'video1.mp4',
      header: 'Restaurant Guide',
      desc: `On map change, a set of restaurants are fetched from an API. Restaurant information 
      is displayed for the user. The map can be changed by dragging, or searching in form.`,
      tech: 'React, HTML, Tailwind CSS, Axios',
      linkLabel: 'Restaurant Guide App',
      linkPath: 'https://google.com',
      docLabel: 'Build Docs',
      docPath: 'https://google.com',
    },
  ],
};

Cards.propTypes = {
  cardData: PropTypes.arrayOf({
    vid: PropTypes.string,
    header: PropTypes.string,
    desc: PropTypes.string,
    tech: PropTypes.string,
    linkLabel: PropTypes.string,
    linkPath: PropTypes.string,
    docLabel: PropTypes.string,
    docPath: PropTypes.string,
  }),
};
