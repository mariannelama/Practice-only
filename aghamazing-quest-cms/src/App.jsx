const App = () => {
    // State to simulate routing: '/' (Signup), '/signin' (SignIn), '/google-auth' (GoogleAuth)
    const [currentPage, setCurrentPage] = useState('/'); 
    const [modal, setModal] = useState({ title: '', message: '' });

    // Custom navigate function
    const navigate = useCallback((path) => {
        setCurrentPage(path);
    }, []);

    // Custom showMessage function to replace alert()
    const showMessage = (title, message) => {
        setModal({ title, message });
    };

    const handleModalConfirm = () => {
        setModal({ title: '', message: '' });
    };

    let content;
    const props = { navigate, showMessage };

    switch (currentPage) {
        case '/google-auth':
            content = <GoogleAuthScreen {...props} />;
            break;
        case '/signin':
            content = <SignInScreen {...props} />;
            break;
        case '/':
        default:
            // This is the component that uses the original SignupScreen logic
            content = <SignupScreen {...props} />;
            break;
    }

    return (
        // Global container using Tailwind to ensure full viewport coverage
        <div className="min-h-screen flex items-center justify-center bg-gray-50 font-sans">
            {/* Added a key to force re-render when currentPage changes */}
            <div key={currentPage} className="w-full h-full flex items-center justify-center">
                {content}
            </div>
            
            <MessageModal 
                title={modal.title} 
                message={modal.message} 
                onConfirm={handleModalConfirm} 
            />
        </div>
    );
};

export default App;
