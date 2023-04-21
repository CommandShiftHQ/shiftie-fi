import React from 'react';
import PropTypes from 'prop-types';
import {
  CloseButton,
  CloseIcon,
  ModalContainer,
  Overlay,
} from './Modal.styled';

const Modal = ({ onClose = () => {}, children }) => (
  <Overlay>
    <ModalContainer>
      <CloseButton onClick={onClose}>
        <CloseIcon name="close" />
      </CloseButton>
      {children}
    </ModalContainer>
  </Overlay>
);

Modal.propTypes = {
  onClose: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Modal;
