import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogosContainer from './LogosContainer'; 

const SignupScreen = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [isDostFading, setIsDostFading] = useState(false);

    const handleDostSignup = () => {
        const trimmedEmail = email.trim();

        if (trimmedEmail === '') {
            alert('Please enter your email address to sign up.');
            return;
        }

        if (trimmedEmail.endsWith('@dost.gov.ph')) {
            console.log('Initiating DOST sign-up for:', trimmedEmail);
            alert(`Redirecting for DOST verification for email: ${trimmedEmail}`);
            
            // Trigger the fade-out effect 
            setIsDostFading(true); 

            // In a real app, you might navigate or call an API here.
            // For now, it stays on the page after the alert.
            
        } else {
            console.log('Redirecting to sign-in screen.');
            // 🔑 Non-DOST email redirects to the general sign-in page (login-screen-3.html)
            navigate('/signin'); 
        }
    };
    
    const handleGoogleSignup = () => {
        console.log('Initiating Google sign-up/login flow. Redirecting to Google Auth Screen.');
        // 🔑 Redirects to the Google Account selection page (login-screen-2.html)
        navigate('/google-auth'); 
    };

return (
<div className="auth-container">
    <header className="app-header" />
    
    <main className="login-box">
        <h1>AGHAMazing Quest CMS</h1>
        
        <div className="logo-icons-container">
        <div className="logo-row top-row">
            <img src="https://github.com/Marianne-101/pictures/blob/main/dost-stii-logo.png?raw=true.png" alt="DOST STII Logo" />
            <img src="https://github.com/Marianne-101/pictures/blob/main/dost-stii-library-logo.png?raw=true.png" alt="DOST STII Library Logo" />
            </div>
            <div className="logo-row bottom-row">
                <img src="https://github.com/Marianne-101/pictures/blob/main/nu-logo.png?raw=true.png" alt="NU Logo" />
                <img src="https://github.com/Marianne-101/pictures/blob/main/asia-pacific-college-logo.jpg?raw=true.png" alt="Asia Pacific College Logo" />
                </div>
                </div>
                
                <section className="create-account-form">
                    <h2>Create an account</h2>
                    <p>Enter your email to sign up for this app</p>
                    {/* Controlled Input */}
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => console.log('Email input field is focused.')}
                    />
                    
                    <p className="switch-auth-mode">
                        Already have an account? 
                        {/* Link uses React Router's navigate */}
                        <a href="/signin" onClick={(e) => { e.preventDefault(); navigate('/signin'); }} className="sign-in-link">Sign In</a> 
                    </p>

                    <button 
                        className={`dost-signup-btn ${isDostFading ? 'fade-out' : ''}`}
                        onClick={handleDostSignup}
                        disabled={isDostFading}
                    >
                        Sign up with DOST email
                    </button>
                </section>

                <div className="separator">or continue with</div>

                <button className="google-signup-btn" onClick={handleGoogleSignup}>
                    <img src="https://github.com/Marianne-101/pictures/blob/main/google-icon.png?raw=true" alt="Google Icon" className="google-icon" /> Google
                </button>

                <p className="terms-policy">
                    By clicking continue, you agree to our <a href="#">**Terms of Service**</a> and <a href="#">**Privacy Policy**</a>
                </p>
            </main>

            <footer className="logo-footer" />
        </div>
    );
};

export default SignupScreen;