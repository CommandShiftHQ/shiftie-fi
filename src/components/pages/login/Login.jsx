import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { toast } from 'react-hot-toast';
import {
  FormContainer,
  Heading,
  Input,
  InputContainer,
  Label,
  Links,
  SubmitButton,
} from '../../_forms/Form.styled';
import Modal from '../../_utils/modal/Modal';
import { auth } from '../../../config/firebase';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = ({ onSetUser }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setIsSubmitting(true);

    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        console.log(userCredential);
        const { user } = userCredential;
        console.log(user.accessToken);
        window.localStorage.setItem('firebaseToken', user.accessToken);
        toast.success('Welcome back');
        onSetUser(user);
      })
      .catch((error) => {
        console.error(error);
        toast.error("Couldn't sign in");
        setIsSubmitting(false);
      });
  };

  return (
    <Modal>
      <FormContainer>
        <Heading>🔐 Login</Heading>
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
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Please wait...' : 'Login'}
          </SubmitButton>
          <Links>
            Don't have an account? <Link to="/create-account">Sign up now</Link>
          </Links>
        </form>
      </FormContainer>
    </Modal>
  );
};

Login.propTypes = {
  onSetUser: PropTypes.func.isRequired,
};

export default Login;
