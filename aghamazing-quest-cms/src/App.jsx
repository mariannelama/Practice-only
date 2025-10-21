import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupScreen from './SignupScreen.jsx';
import GoogleAuthScreen from './GoogleAuthScreen.jsx';
import SignInScreen from './SignInScreen.jsx';
import './styles.css';
// The styles.css import is typically in index.js, but keeping it here as a backup is fine too.
// import './styles.css'; 

function App() {
  return (
    <Router>
      <Routes>
        {/* Sign Up Screen (index.html equivalent) */}
        <Route path="/" element={<SignupScreen />} />
        
        {/* Google Auth Screen (login-screen-2.html equivalent) */}
        <Route path="/google-auth" element={<GoogleAuthScreen />} />
        
        {/* Sign In Screen (login-screen-3.html equivalent) */}
        <Route path="/signin" element={<SignInScreen />} />
      </Routes>
    </Router>
  );
}

export default App;