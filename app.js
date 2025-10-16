document.addEventListener('DOMContentLoaded', function() {
    
    // --- Logic for index.html (Sign Up Screen) ---

    const dostButton = document.querySelector('.dost-signup-btn');
    const googleButton = document.querySelector('.google-signup-btn');
    const emailInput = document.getElementById('email');

    // 1. Logic for 'Sign up with DOST email' button
    if (dostButton && emailInput) {
        dostButton.addEventListener('click', function() {
            const email = emailInput.value;
            
            // Basic check to see if the field is empty
            if (email.trim() === '') {
                alert('Please enter your email address to sign up.');
                return;
            }

            // Simulate DOST Email Validation (check for a specific domain)
            if (email.endsWith('@dost.gov.ph')) {
                console.log('Initiating DOST sign-up for:', email);
                alert(`Redirecting for DOST verification for email: ${email}`);
                
                // Trigger the fade-out effect for the button
                dostButton.classList.add('fade-out');

                // Real app: fetch('/api/signup/dost', ...);
            } else {
                console.log('Redirecting to login-screen-3.html for general email sign up/sign in.');
                // 🔑 UPDATE: Redirect non-DOST email to login-screen-3.html (as requested)
                window.location.href = 'login-screen-3.html'; 
            }
        });
    }

    // 2. Logic for the 'Google' button
    if (googleButton) {
        googleButton.addEventListener('click', function() {
            console.log('Initiating Google sign-up/login flow. Redirecting to Login Screen 2.');
            
            // 🔑 UPDATE: Correctly redirects to login-screen-2.html (Google Choose Account)
            window.location.href = 'login-screen-2.html'; 
        });
    }

    // 3. Email Input Focus Logging (Optional)
    if (emailInput) {
        emailInput.addEventListener('focus', function() {
            console.log('Email input field is focused (clicked/tabbed into).');
        });
    }
});x    