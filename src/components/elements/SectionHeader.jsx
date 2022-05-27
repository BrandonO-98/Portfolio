import React from 'react';
import PropTypes from 'prop-types';

export default function SectionHeader({ header }) {
  return (
    <div className="grid justify-items-center">
      {header}
      <div className="border border-t-1 border-black h-0 w-80" />
    </div>
  );
}

SectionHeader.propTypes = {
  header: PropTypes.string.isRequired,
};
