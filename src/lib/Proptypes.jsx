import PropTypes from 'prop-types';

export const Link = PropTypes.shape({
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  ext: PropTypes.bool,
});

export const Media = PropTypes.shape({
  alt: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

const customProps = {
  Link,
  Media,
};

export default customProps;
