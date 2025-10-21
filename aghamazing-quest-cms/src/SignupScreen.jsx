const SignupScreen = ({ navigate, showMessage }) => {
    const [email, setEmail] = useState('');
    const [isDostFading, setIsDostFading] = useState(false);

    // Placeholder image URLs for robustness
    const DOST_STII_LOGO = "https://placehold.co/100x40/000/fff?text=DOST+STII";
    const NU_LOGO = "https://placehold.co/100x40/000/fff?text=NU+Logo";
    const GOOGLE_ICON = "https://github.com/Marianne-101/pictures/blob/main/google-icon.png?raw=true";

    const handleDostSignup = () => {
        const trimmedEmail = email.trim();

        if (trimmedEmail === '') {
            showMessage('Validation Error', 'Please enter your email address to sign up.');
            return;
        }

        if (trimmedEmail.endsWith('@dost.gov.ph')) {
            console.log('Initiating DOST sign-up for:', trimmedEmail);
            showMessage('DOST Verification', `Redirecting for DOST verification for email: ${trimmedEmail}`);
            setIsDostFading(true); 
            
        } else {
            console.log('Redirecting to sign-in screen.');
            navigate('/signin'); 
        }
    };
    
    const handleGoogleSignup = () => {
        console.log('Initiating Google sign-up/login flow. Redirecting to Google Auth Screen.');
        navigate('/google-auth'); 
    };

    return (
        <div className="auth-container p-6 mx-auto max-w-sm md:max-w-md w-full relative z-10">
            <header className="app-header" />
            
            <main className="login-box text-center bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-2xl font-semibold mb-8 text-gray-900">AGHAMazing Quest CMS</h1>
                
                {/* Logo Icons Container */}
                <div className="flex flex-col items-center my-5 w-full">
                    <div className="flex justify-center items-center mb-2 w-full space-x-2">
                        <img src={DOST_STII_LOGO} onError={(e) => e.target.src=DOST_STII_LOGO} alt="DOST STII Logo" className="h-10 w-auto max-w-[45%] object-contain rounded-md" />
                        <img src={DOST_STII_LOGO} onError={(e) => e.target.src=DOST_STII_LOGO} alt="DOST STII Library Logo" className="h-10 w-auto max-w-[45%] object-contain rounded-md" />
                    </div>
                    <div className="flex justify-center items-center w-full space-x-2">
                        <img src={NU_LOGO} onError={(e) => e.target.src=NU_LOGO} alt="NU Logo" className="h-10 w-auto max-w-[45%] object-contain rounded-md" />
                        <img src={NU_LOGO} onError={(e) => e.target.src=NU_LOGO} alt="Asia Pacific College Logo" className="h-10 w-auto max-w-[45%] object-contain rounded-md" />
                    </div>
                </div>
                
                <section className="create-account-form pt-4">
                    <h2 className="text-xl font-medium mb-1 text-gray-900">Create an account</h2>
                    <p className="text-sm text-gray-600 mb-4">Enter your email to sign up for this app</p>
                    
                    {/* Controlled Input */}
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 box-border"
                    />
                    
                    <p className="text-sm text-gray-600 mb-6 flex justify-start">
                        Already have an account? 
                        {/* Link for Sign In: now has explicit cursor-pointer */}
                        <a 
                            href="/signin" 
                            onClick={(e) => { e.preventDefault(); navigate('/signin'); }} 
                            className="sign-in-link ml-1 text-blue-600 hover:underline font-semibold cursor-pointer z-20"
                        >
                            Sign In
                        </a> 
                    </p>

                    <button 
                        className={`w-full p-3 rounded-lg font-bold transition duration-300 z-20 
                            ${isDostFading 
                                ? 'opacity-50 bg-gray-400 cursor-not-allowed' 
                                : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'}`}
                        onClick={handleDostSignup}
                        disabled={isDostFading}
                    >
                        Sign up with DOST email
                    </button>
                </section>

                <div className="my-5 text-sm text-gray-500">or continue with</div>

                {/* Button for Google Sign Up: now has explicit cursor-pointer */}
                <button 
                    className="google-signup-btn w-full p-3 rounded-lg font-bold border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 flex items-center justify-center transition duration-150 cursor-pointer z-20" 
                    onClick={handleGoogleSignup}
                >
                    <img src={GOOGLE_ICON} onError={(e) => e.target.src=GOOGLE_ICON} alt="Google Icon" className="w-5 h-5 mr-2" /> Google
                </button>

                <p className="text-xs text-gray-500 mt-5 leading-relaxed">
                    By clicking continue, you agree to our <a href="#" className="text-blue-600 font-bold hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 font-bold hover:underline">Privacy Policy</a>
                </p>
            </main>
        </div>
    );
};

// --------------------------------------------------
// --- Screen 2: Google Account Selection ---
// --------------------------------------------------
const GoogleAuthScreen = ({ navigate, showMessage }) => {
    const GOOGLE_USER_ICON = "https://github.com/Marianne-101/pictures/blob/main/user-icon.png?raw=true";

    const selectAccount = (email) => {
        showMessage('Sign-in Successful', `Simulating sign-in with ${email}. Redirecting to Dashboard.`);
    };

    const useAnotherAccount = () => {
        navigate('/signin'); 
    };

    return (
        <div className="google-auth-container flex flex-col items-center w-full min-h-screen pt-12 md:pt-20 bg-gray-50 relative z-10">
            <div className="google-card w-full max-w-sm md:max-w-md border border-gray-200 rounded-xl p-6 shadow-xl bg-white">
                <header className="mb-6">
                    <span className="text-xl font-medium text-gray-800">Sign in with Google</span>
                </header>

                <div className="card-content">
                    <h2 className="text-2xl font-normal mb-2 text-gray-900">Choose an account</h2>
                    <p className="text-base text-gray-600 mb-6">to continue to <span className="text-blue-600 font-medium">AGHAMazing Quest CMS</span></p>

                    <ul className="list-none p-0 m-0 space-y-2">
                        {['account1@gmail.com', 'account2@gmail.com'].map((email, index) => (
                            <li 
                                key={index}
                                onClick={() => selectAccount(email)}
                                className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200 border border-transparent"
                            >
                                <div className="w-9 h-9 rounded-full bg-purple-700 text-white flex items-center justify-center font-medium text-lg mr-4">
                                    {email[0].toUpperCase()}
                                </div>
                                <div className="text-left">
                                    <div className="font-medium text-gray-900">Account Name {index + 1}</div>
                                    <div className="text-sm text-gray-600">{email}</div>
                                </div>
                            </li>
                        ))}
                        <li 
                            onClick={useAnotherAccount}
                            className="flex items-center p-3 rounded-lg cursor-pointer hover:bg-gray-100 transition duration-200"
                        >
                            <div className="w-9 h-9 rounded-full border border-gray-400 flex items-center justify-center mr-4">
                                <img src={GOOGLE_USER_ICON} onError={(e) => e.target.src=GOOGLE_USER_ICON} alt="User icon" className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                                <div className="font-medium text-blue-600">Use another account</div>
                            </div>
                        </li>
                    </ul>

                    <p className="text-xs text-gray-600 mt-6 leading-relaxed">
                        To continue, Google will share your name, email address, language preference, and profile picture with Company...
                    </p>
                </div>
            </div>
            
            <button 
                onClick={() => navigate('/')} 
                className="mt-6 text-sm text-gray-600 hover:text-gray-800 hover:underline transition duration-150"
            >
                ← Back to Sign Up
            </button>
        </div>
    );
};