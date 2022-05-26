import PropTypes from 'prop-types';

export const Link = PropTypes.shape({
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export const Media = PropTypes.shape({
  url: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
});

const customProps = {
  Link,
  Media,
};

export default customProps;
