import React, { useState, useEffect } from 'react';
import { signOut } from 'firebase/auth';
import Grid from '../../_utils/Grid';
import Artist from '../../artist/Artist';
import AddCard from '../../add-card/AddCard';
import { Header, Heading, Logo, SignOut } from './Home.styled';
import Modal from '../../_utils/modal/Modal';
import AddArtistForm from '../../_forms/add-artist-form/AddArtistForm';
import { auth } from '../../../config/firebase';

const Home = ({ onSetUser }) => {
  const [artists, setArtists] = useState([]);
  const [artistModelOpen, setArtistModelOpen] = useState(false);

  useEffect(() => {
    const getArtists = async () => {
      const response = await fetch(`http://localhost:3000/artists`);
      const data = await response.json();

      setArtists(data);
    };

    getArtists();
  }, []);

  const handleCloseModal = () => setArtistModelOpen(false);

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        console.log('User signed out.');
        onSetUser(null);
      })
      .catch((error) => {
        console.error(error);
        // An error happened.
      });
  };

  return (
    <>
      <Header>
        <Logo src="/images/logo.svg" alt="Shiftie-Fi" />
        <Heading>Shiftie-Fi</Heading>
        <SignOut onClick={handleLogout}>Log Out</SignOut>
      </Header>
      <Grid>
        {artists.map((artist) => (
          <Artist
            key={artist.id}
            name={artist.name}
            image={artist.image}
            user={artist.user}
          />
        ))}
        <AddCard
          text="Add a new artist"
          onClick={() => setArtistModelOpen(true)}
        />
        {artistModelOpen && (
          <Modal onClose={handleCloseModal}>
            <AddArtistForm onSuccess={handleCloseModal} />
          </Modal>
        )}
      </Grid>
    </>
  );
};

export default Home;
