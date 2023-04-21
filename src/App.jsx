import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { onAuthStateChanged } from 'firebase/auth';
import Home from './components/pages/home/Home';
import Login from './components/pages/login/Login';
import CreateAccount from './components/pages/create-account/CreateAccount';
import { auth } from './config/firebase';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user ? <Home onSetUser={setUser} /> : <Login onSetUser={setUser} />
          }
        />
        <Route
          path="/create-account"
          element={<CreateAccount onSetUser={setUser} />}
        />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

export default App;
