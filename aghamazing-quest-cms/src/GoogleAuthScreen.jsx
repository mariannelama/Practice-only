const GoogleAuthScreen = ({ navigate, showMessage }) => {
    const GOOGLE_USER_ICON = "https://github.com/Marianne-101/pictures/blob/main/user-icon.png?raw=true";

    const selectAccount = (email) => {
        showMessage('Sign-in Successful', `Simulating sign-in with ${email}. Redirecting to Dashboard.`);
        // navigate('/dashboard'); 
    };

    const useAnotherAccount = () => {
        navigate('/signin'); 
    };

    return (
        <div className="google-auth-container flex flex-col items-center w-full min-h-screen pt-12 md:pt-20 bg-gray-50">
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