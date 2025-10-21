import React from 'react';
import { useNavigate } from 'react-router-dom';
import LogosContainer from './LogosContainer'; 

const GoogleAuthScreen = () => {
const navigate = useNavigate();

// Replaces the inline JS selectAccount function
    const selectAccount = (email) => {
    console.log('Selected account:', email);
    alert('Simulating sign-in with ' + email + '. This would typically lead to a dashboard.');
    };

// Replaces the inline JS useAnotherAccount function
    const useAnotherAccount = () => {
        console.log('Redirecting to login-screen-3.html.');
// 🔑 Use navigate to /signin (login-screen-3)
        navigate('/signin'); 
    };
    
// Static data for the accounts list
    const accounts = [
    { initial: 'A', name: 'Account Name', email: 'email@gmail.com' },
    { initial: 'B', name: 'Another Account', email: 'another.email@gmail.com' },
    ];

    return (
        <div className="google-auth-container">
            <div className="google-card">
                <header className="google-header">
                    <span>Sign in with Google</span>
                </header>

                <div className="card-content">
                    <h2>Choose an account</h2>
                    <p className="to-continue">to continue to <a href="#" className="app-name">AGHAMazing Quest CMS</a></p>

                    <ul className="account-list">
                        {accounts.map((account, index) => (
                            <li 
                                key={index} 
                                className="account-item" 
                                onClick={() => selectAccount(account.email)}
                            >
                                <div className="avatar-circle">{account.initial}</div>
                                <div className="account-details">
                                    <div className="account-name-text">{account.name}</div>
                                    <div className="account-email">{account.email}</div>
                                </div>
                            </li>
                        ))}
                        
                        {/* Use another account item */}
                        <li className="account-item use-another-account" onClick={useAnotherAccount}>
                            <div className="icon-circle">
                                {/* Using a placeholder for the user icon */}
                                <img src="https://github.com/Marianne-101/pictures/blob/main/user-icon.png?raw=true.png" alt="User icon" className="user-icon" />
                            </div>
                            <div className="account-details">
                                <div className="account-name-text">Use another account</div>
                            </div>
                        </li>
                    </ul>

                    <p className="privacy-notice">
                        To continue, Google will share your name, email address, language preference,
                        and profile picture with Company. Before using this app, you can review
                        Company's <a href="#">privacy policy</a> and <a href="#">terms of service</a>.
                    </p>
                </div>
            </div>

            <footer className="google-footer">
                <div className="footer-links">
                    <span className="language-selector">English (United States)</span>
                    <a href="#">Help</a>
                    <a href="#">Privacy</a>
                    <a href="#">Terms</a>
                </div>
            </footer>
            
            <LogosContainer />
        </div>
    );
};

export default GoogleAuthScreen;