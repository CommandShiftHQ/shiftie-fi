import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'react-hot-toast';
import {
  FormContainer,
  Heading,
  Input,
  InputContainer,
  Label,
  SubmitButton,
} from '../Form.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  image: yup.string().url().required(),
  genre: yup.string().required(),
});

const AddArtistForm = ({ onSuccess }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values) => {
    setIsSubmitting(true);

    fetch(`http://localhost:3000/artists`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${window.localStorage.getItem('firebaseToken')}`,
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then(() => {
        toast.success('Artist added successfully');
        onSuccess();
      })
      .catch(() => toast.error('Something went wrong'));
  };

  return (
    <FormContainer>
      <Heading>🧑‍🎤 Add Artist</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputContainer>
          <Label htmlFor="artist-name">Name</Label>
          <Input {...register('name')} id="artist-name" type="text" autoFocus />
          {errors.name && <span>{errors.name.message}</span>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="artist-image">Image</Label>
          <Input {...register('image')} id="artist-image" type="text" />
          {errors.image && <span>{errors.image.message}</span>}
        </InputContainer>
        <InputContainer>
          <Label htmlFor="artist-genre">Genre</Label>
          <Input {...register('genre')} id="artist-genre" type="text" />
          {errors.genre && <span>{errors.genre.message}</span>}
        </InputContainer>
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </SubmitButton>
      </form>
    </FormContainer>
  );
};

AddArtistForm.propTypes = {
  onSuccess: PropTypes.func.isRequired,
};

export default AddArtistForm;
