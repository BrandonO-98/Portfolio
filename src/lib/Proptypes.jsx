import PropTypes from 'prop-types';

export const Link = PropTypes.shape({
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

export const Media = PropTypes.shape({
  brand: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
});

const customProps = {
  Link,
  Media,
};

export default customProps;
