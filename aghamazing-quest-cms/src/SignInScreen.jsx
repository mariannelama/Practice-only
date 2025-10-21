const SignInScreen = ({ navigate, showMessage }) => {
    const [email, setEmail] = useState('user@dost.gov.ph');
    const [rememberMe, setRememberMe] = useState(true);
    const GOOGLE_ICON = "https://github.com/Marianne-101/pictures/blob/main/google-icon.png?raw=true";

    const handleContinue = () => {
        const trimmedEmail = email.trim();
        showMessage(
            'Login Attempt', 
            `Simulating login for ${trimmedEmail}. (This would lead to a password prompt or SAML redirect)`
        );
    };

    const handleGoogleLogin = () => {
        navigate('/google-auth'); 
    };

    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-gray-50 p-4 box-border relative z-10">
            <div className="login3-card bg-white rounded-xl shadow-2xl p-8 w-full max-w-sm md:max-w-md text-center mb-6">
                
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign In</h2>

                <input 
                    type="email" 
                    placeholder="email@gmail.com" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-3 mb-5 border border-gray-300 rounded-lg text-gray-900 text-lg outline-none focus:border-blue-500 bg-gray-100"
                />

                <div className="flex items-center justify-between w-full mb-6 text-sm text-gray-700">
                    <div className="flex items-center">
                        <input 
                            type="checkbox" 
                            id="remember-me-react" 
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            className="mr-3 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label htmlFor="remember-me-react">Remember me</label>
                    </div>
                    <a href="#" className="text-blue-600 hover:underline font-medium">Forgot Password?</a>
                </div>

                <button 
                    onClick={handleContinue}
                    className="w-full p-3 mb-4 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-150 shadow-md cursor-pointer"
                >
                    Continue
                </button>

                <div className="relative flex items-center justify-center my-6">
                    <div className="flex-grow border-t border-gray-200"></div>
                    <span className="flex-shrink mx-4 text-gray-500 text-sm">or</span>
                    <div className="flex-grow border-t border-gray-200"></div>
                </div>

                <button 
                    onClick={handleGoogleLogin}
                    className="w-full p-3 border border-gray-300 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 flex items-center justify-center transition duration-150 shadow-sm cursor-pointer" 
                > 
                    <img src={GOOGLE_ICON} onError={(e) => e.target.src=GOOGLE_ICON} alt="Google Icon" className="w-5 h-5 mr-3" />
                    Sign in with Google
                </button>

                <p className="text-sm text-gray-600 mt-6"> 
                    Don't have an account? 
                    <a onClick={() => navigate('/')} className="text-blue-600 hover:underline font-semibold ml-1 cursor-pointer">Sign Up</a>
                </p>
            </div>

            <button 
                onClick={() => navigate('/')} 
                className="mt-4 text-sm text-gray-600 hover:text-gray-800 hover:underline transition duration-150"
            >
                ← Go to Sign Up Screen
            </button>
        </div>
    );
};