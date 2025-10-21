import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogosContainer from './LogosContainer'; 

const SignInScreen = () => {
    const navigate = useNavigate();
    // 🔑 State for controlled components
    const [email, setEmail] = useState('email@gmail.com');
    const [rememberMe, setRememberMe] = useState(true);

    const handleContinue = () => {
        console.log('Continue clicked. Email:', email, 'Remember Me:', rememberMe);
        alert(`Simulating login for ${email}. Remember Me: ${rememberMe}.`);
        // Real logic: authenticate, then navigate to dashboard
    };

    const handleGoogleLogin = () => {
        console.log('Google login clicked on Login Screen 3. Redirecting to Google Auth Screen.');
        // 🔑 Redirect to login-screen-2 equivalent
        navigate('/google-auth'); 
    };

    return (
        <div className="login3-container">
            <div className="login3-card">
                
                {/* Controlled Input */}
                <input 
                    type="email" 
                    id="login3-email" 
                    placeholder="email@gmail.com" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}
                    className="login3-input"
                />

                <div className="login3-remember-me">
                    {/* Controlled Checkbox */}
                    <input 
                        type="checkbox" 
                        id="remember-me" 
                        checked={rememberMe} 
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    {/* htmlFor replaces 'for' */}
                    <label htmlFor="remember-me">Remember me on this computer</label>
                </div>

                {/* Event Handler */}
                <button className="login3-continue-btn" onClick={handleContinue}>Continue</button>
                
                {/* Event Handler */}
                <button className="login3-google-btn-alt" onClick={handleGoogleLogin}>
                    <img src="https://github.com/Marianne-101/pictures/blob/main/google-icon.png?raw=true" alt="Google Icon" className="google-icon" />
                </button>

                <p className="login3-terms-alt"> By signing in, you agree to <a href="#">Terms & Policy</a>
                </p>
            </div>
            
            <LogosContainer />
        </div>
    );
};

export default SignInScreen;