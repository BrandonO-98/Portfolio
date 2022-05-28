import React from 'react';
import PropTypes from 'prop-types';
import Cards from 'components/elements/Cards';
import SectionHeader from 'components/elements/SectionHeader';

export default function Projects({ projects }) {
  return (
    <div ref={projects} className="grid mb-4 w-full items-center justify-items-center">
      <SectionHeader header="Projects" />
      <Cards />
    </div>
  );
}

Projects.propTypes = {
  projects: PropTypes.shape({}).isRequired,
};
