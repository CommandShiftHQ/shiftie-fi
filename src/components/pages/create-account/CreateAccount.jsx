import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import { auth } from '../../../config/firebase';
import {
  FormContainer,
  Heading,
  Input,
  InputContainer,
  Label,
  SubmitButton,
} from '../../_forms/Form.styled';
import Modal from '../../_utils/modal/Modal';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match')
    .required(),
});

const CreateAccount = ({ onSetUser }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

    // handle firebase account creation
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        const { user } = userCredential;
        toast.success('Welcome to Shiftie-Fi!');
        onSetUser(user);
        navigate('/');
      })
      .catch((error) => {
        toast.error('There was a problem creating the account.');
      });

    // setTimeout(() => {
    //   setIsSubmitting(false);
    // }, 2000);
  };

  return (
    <Modal>
      <FormContainer>
        <Heading>✨ Create Account</Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <Input {...register('email')} id="email" type="text" autoFocus />
            {errors.email && <span>{errors.email.message}</span>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="password">Password</Label>
            <Input {...register('password')} id="password" type="password" />
            {errors.password && <span>{errors.password.message}</span>}
          </InputContainer>
          <InputContainer>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              {...register('confirmPassword')}
              id="confirmPassword"
              type="password"
            />
            {errors.confirmPassword && (
              <span>{errors.confirmPassword.message}</span>
            )}
          </InputContainer>
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Please wait...' : 'Create Account'}
          </SubmitButton>
        </form>
      </FormContainer>
    </Modal>
  );
};

CreateAccount.propTypes = {
  onSetUser: PropTypes.func.isRequired,
};

export default CreateAccount;
