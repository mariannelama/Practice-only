document.addEventListener('DOMContentLoaded', function() {
    
    // =========================================================================
    // === Logic for index.html (Sign Up Screen) ===============================
    // =========================================================================

    const dostButton = document.querySelector('.dost-signup-btn');
    const googleButtonIndex = document.querySelector('.google-signup-btn');
    const emailInputIndex = document.getElementById('email');

    // 1. Logic for 'Sign up with DOST email' button
    if (dostButton && emailInputIndex) {
        dostButton.addEventListener('click', function() {
            const email = emailInputIndex.value.trim();
            
            // Basic check to see if the field is empty
            if (email === '') {
                alert('Please enter your email address to sign up.');
                return;
            }

            // Simulate DOST Email Validation (check for a specific domain)
            if (email.endsWith('@dost.gov.ph')) {
                console.log('Initiating DOST sign-up for:', email);
                alert(`Redirecting for DOST verification for email: ${email}`);
                // Trigger the fade-out effect for the button
                dostButton.classList.add('fade-out');
            } else {
                console.log('Redirecting non-DOST email to login-screen-3.html for general sign up/sign in.');
                // Redirect non-DOST email to login-screen-3.html
                window.location.href = 'login-screen-3.html?email=' + encodeURIComponent(email); 
            }
        });
    }

    // 2. Logic for the 'Google' button on index.html
    if (googleButtonIndex) {
        googleButtonIndex.addEventListener('click', function() {
            console.log('Initiating Google sign-up/login flow. Redirecting to Login Screen 2.');
            window.location.href = 'login-screen-2.html'; 
        });
    }


    // =========================================================================
    // === Logic for login-screen-3.html (General Sign In Screen) ==============
    // =========================================================================
    
    const continueButton = document.querySelector('.login3-continue-btn');
    const googleButtonLogin3 = document.querySelector('.login3-google-btn-alt');
    const emailInputLogin3 = document.getElementById('login3-email');
    const rememberMeCheckbox = document.getElementById('remember-me');

    // Pre-fill email from URL parameter if redirected from index.html
    if (emailInputLogin3) {
        const urlParams = new URLSearchParams(window.location.search);
        const emailFromParam = urlParams.get('email');
        if (emailFromParam) {
            emailInputLogin3.value = decodeURIComponent(emailFromParam);
        }
    }


    if (continueButton && emailInputLogin3) {
        continueButton.addEventListener('click', function() {
            const email = emailInputLogin3.value.trim();
            const remember = rememberMeCheckbox ? rememberMeCheckbox.checked : false; 
            
            if (email === '') {
                 alert('Please enter your email address to continue.');
                 return;
            }

            const message = `Simulating login for ${email}. Remember Me: ${remember}.`;
            console.log('Continue clicked. ' + message);
            alert(message); // Using alert for demo feedback
        });
    }

    if (googleButtonLogin3) {
        googleButtonLogin3.addEventListener('click', function() {
            console.log('Google login clicked on Login Screen 3. Redirecting to Login Screen 2.');
            window.location.href = 'login-screen-2.html'; 
        });
    }
});