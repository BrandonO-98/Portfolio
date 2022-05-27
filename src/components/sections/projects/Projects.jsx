import React from 'react';
import Cards from 'components/elements/Cards';
import SectionHeader from 'components/elements/SectionHeader';

export default function Projects() {
  return (
    <div className="grid mt-16 mb-6 w-full items-center justify-items-center">
      <SectionHeader header="Projects" />
      <Cards />
    </div>
  );
}
