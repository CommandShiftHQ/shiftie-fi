import React from 'react';
import PropTypes from 'prop-types';
import { AddIcon, Card, Text } from './AddCard.styled';

const AddCard = ({ onClick, text }) => (
  <Card role="button" onClick={onClick}>
    <AddIcon name="add" />
    <Text>{text}</Text>
  </Card>
);

AddCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default AddCard;
