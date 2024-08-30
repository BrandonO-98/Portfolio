import React from 'react';
import PropTypes from 'prop-types';
import { cardDataProps } from 'lib/Proptypes';
import Card from 'components/elements/Card';

export default function Cards({ cardData }) {
  return (
    <div className="grid mt-4 items-center justify-items-center md:grid-cols-2 md:w-[700px] lg:max-w-[900px] lg:w-[900px]">
      {cardData.map((item) => (
        <Card data={item} key={item.id} />
      ))}
    </div>
  );
}

Cards.defaultProps = {
  cardData: [
    {
      id: 1,
      vid: 'amazingwords.mov',
      header: 'Amazing Words - The Bible Made Simple',
      desc: 'Fully functional ecommerce site featuring bible scripts, workbooks and more.',
      tech: 'Shopify, Klayvio, Recharge, Loox, Fireflare',
      linkLabel: 'Amazing Words',
      linkPath: 'https://www.amazingwords.com/',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      id: 2,
      vid: 'Notes.mov',
      header: 'Reminder - Something to Note?',
      desc: `The user can create, update and delete notes.
      Notes are saved to local storage.`,
      linkLabel: 'Reminder',
      tech: 'JS, HTML/CSS',
      linkPath: 'https://remarkable-sawine-af096d.netlify.app',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      id: 3,
      vid: 'Restau.mov',
      header: 'Foodie - Find Your Taste!',
      desc: 'Locate the most popular restaurants using the search bar or by dragging the map.',
      tech: 'React, Bootstrap, GCP, Netlify',
      linkLabel: 'Foodie',
      linkPath: 'https://stellar-gumption-d40773.netlify.app/',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
    {
      id: 4,
      vid: 'Campr.mov',
      header: 'CAMPR - Camping for All',
      desc: 'Review and locate campgrounds around the globe. You must be registered for full access.',
      tech: 'JS (Node, EJS), Mongoose/Mongo, Mapbox, Cloudinary',
      linkLabel: 'CAMPR',
      linkPath: 'https://campr-wlkt.onrender.com',
      docLabel: 'Build Docs',
      docPath: 'https://docs.google.com/document/d/1roaeQUtpA5UeB5AHVdRUiGeCQD6tLdmzMKE9Um14i0Q/edit?usp=sharing',
    },
  ],
};

Cards.propTypes = {
  cardData: PropTypes.arrayOf(cardDataProps),
};
