import './App.scss';

import { Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';

import Home from './components/Pages/Home/Home';
import SingleCharacter from './components/Pages/SingleCharacter/SingleCharacter';

const clientId = '207158088800-eec7ej52gd6tf4gmrgfkn2c1rst56skv.apps.googleusercontent.com'

function App() {

  return (
    <>
      <GoogleOAuthProvider clientId={`${clientId}`}>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:id" element={<SingleCharacter />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
