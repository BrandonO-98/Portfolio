import PropTypes from 'prop-types';

export const Link = PropTypes.shape({
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
});

export const Media = PropTypes.shape({
  url: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
});

export const cardDataProps = PropTypes.shape({
  vid: PropTypes.string,
  header: PropTypes.string,
  desc: PropTypes.string,
  tech: PropTypes.string,
  linkLabel: PropTypes.string,
  linkPath: PropTypes.string,
  docLabel: PropTypes.string,
  docPath: PropTypes.string,
});

const customProps = {
  Link,
  Media,
  cardDataProps,
};

export default customProps;
