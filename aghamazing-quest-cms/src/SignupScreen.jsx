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
            // Replaced alert() with showMessage
            showMessage('Validation Error', 'Please enter your email address to sign up.');
            return;
        }

        if (trimmedEmail.endsWith('@dost.gov.ph')) {
            console.log('Initiating DOST sign-up for:', trimmedEmail);
            // Replaced alert() with showMessage
            showMessage('DOST Verification', `Redirecting for DOST verification for email: ${trimmedEmail}`);
            
            // Trigger the fade-out effect 
            setIsDostFading(true); 

            // In a real app, you might navigate or call an API here.
            
        } else {
            console.log('Redirecting to sign-in screen.');
            // 🔑 This is the clickable navigation logic
            navigate('/signin'); 
        }
    };
    
    const handleGoogleSignup = () => {
        console.log('Initiating Google sign-up/login flow. Redirecting to Google Auth Screen.');
        // 🔑 This is the clickable navigation logic
        navigate('/google-auth'); 
    };

    return (
        <div className="auth-container p-6 mx-auto max-w-sm md:max-w-md w-full">
            <header className="app-header" />
            
            <main className="login-box text-center bg-white rounded-xl shadow-lg p-6">
                <h1 className="text-2xl font-semibold mb-8 text-gray-900">AGHAMazing Quest CMS</h1>
                
                {/* Logo Icons Container (Styled with Tailwind) */}
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
                    
                    {/* Controlled Input (Styled with Tailwind) */}
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="email@domain.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => console.log('Email input field is focused.')}
                        className="w-full p-3 mb-4 border border-gray-300 rounded-lg bg-gray-100 text-gray-900 outline-none focus:ring-2 focus:ring-blue-500 box-border"
                    />
                    
                    <p className="text-sm text-gray-600 mb-6 flex justify-start">
                        Already have an account? 
                        {/* 🔑 Sign In Link - Uses navigate prop */}
                        <a 
                            href="/signin" 
                            onClick={(e) => { e.preventDefault(); navigate('/signin'); }} 
                            className="sign-in-link ml-1 text-blue-600 hover:underline font-semibold cursor-pointer"
                        >
                            Sign In
                        </a> 
                    </p>

                    <button 
                        className={`w-full p-3 rounded-lg font-bold transition duration-300 
                            ${isDostFading 
                                ? 'opacity-50 bg-gray-400 cursor-not-allowed' 
                                : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                        onClick={handleDostSignup}
                        disabled={isDostFading}
                    >
                        Sign up with DOST email
                    </button>
                </section>

                <div className="my-5 text-sm text-gray-500">or continue with</div>

                {/* 🔑 Google Button - Uses handleGoogleSignup (which calls navigate) */}
                <button 
                    className="google-signup-btn w-full p-3 rounded-lg font-bold border border-gray-300 bg-white text-gray-900 hover:bg-gray-100 flex items-center justify-center transition duration-150" 
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