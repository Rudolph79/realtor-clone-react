import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgotPassword';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


const App =() => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profil' element={<Profile />} />
          <Route path='/inscription' element={<SignUp />} />
          <Route path='/connexion' element={<SignIn />} />
          <Route path='/mot-de-passe-oublie' element={<ForgotPassword />} />
          <Route path='/offres' element={<Offers />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
