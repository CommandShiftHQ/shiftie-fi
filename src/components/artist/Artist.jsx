import React from 'react';
import PropTypes from 'prop-types';
import { Card, Image, Name, User } from './Artist.styled';

const Artist = ({ name, user, image }) => (
  <Card>
    <Image src={image} alt={name} />
    <Name>{name}</Name>
    <User>Added by {user || 'Anonymous'}</User>
  </Card>
);

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default Artist;
