import React from 'react';
import PropTypes from 'prop-types';
import Card from 'components/elements/Card';

export default function Cards({ cardData }) {
  return (
    <div className="grid grid-cols-2 items-center justify-items-center max-w-[850px] w-[850px]">
      {cardData.map((item) => (
        <Card data={item} />
      ))}
    </div>
  );
}

Cards.defaultProps = {
  cardData: [
    {
      img: 'water.jpg',
      header: 'Meme Generator',
      desc: `On button click a random image is displayed after a set is fetched on 
      page render. Meme top and bottom text are accessible by the user.`,
      linkLabel: 'label',
      linkPath: 'https://google.com',
    },
    {
      img: 'water.jpg',
      header: 'Tenzies Game',
      desc: `Clicking start begins the game. Dice are randomized periodically, freeze all at
      the same value to win.`,
      linkLabel: 'label',
      linkPath: 'https://google.com',
    },
    {
      img: 'water.jpg',
      header: 'Notes',
      desc: 'This web app built in Es6 JS allows the user to create, update and delete notes.',
      linkLabel: 'label',
      linkPath: 'https://google.com',
    },
    {
      img: 'water.jpg',
      header: 'Restaurant Guide',
      desc: `On map change, a set of restaurants are fetched from an API. Restaurant information 
      is displayed for the user. The map can be changed by dragging, or searching in form.`,
      linkLabel: 'label',
      linkPath: 'https://google.com',
    },
  ],
};

Cards.propTypes = {
  cardData: PropTypes.arrayOf({
    img: PropTypes.string,
    header: PropTypes.string,
    desc: PropTypes.string,
    linkLabel: PropTypes.string,
    linkPath: PropTypes.string,
  }),
};
