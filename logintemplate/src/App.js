import React, { useState } from 'react';
import Login from './components/Login';
import Header from './components/Header';
import Footer from './components/Footer';
import PlaceholderComponent from './components/PlaceholderComponent';

function App() {
    const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const handleLoginClick = () => {
        setShowLogin(true);
    };

    const handleLogout = () => {
        setUser(null);  // Clear user state on logout
        setShowLogin(false);  // Return to the home screen
    };

    const appOverview = "This is where an overview of the app, or some other text could appear, for instance:\n\nThis app is simply a template Node.js application that its Developer, SamuelFleming, intend to use onm their next project: the Spotify Song to Library Comaprison App (for CAB432, 2024 Semester 2)";
    const logoPath = "logintemplate\public\AppLogo.png";


    return (
        <div className="App">
            <Header user={user} onLogout={handleLogout}/>

            <div className="content">
                {user ? (
                    <div>
                        <h1>Welcome, {user.username}!</h1>
                    </div>
                    
                ) : (
                    showLogin ? (
                        <Login setUser={setUser} />
                    ) : (
                        <div className="home">
                            <div className="logo-container">
                                <img src={logoPath} alt="App Logo" className="app-logo" />
                            </div>
                            <div className="overview-container">
                                <h2>App Overview</h2>
                                <textarea
                                    className="app-overview"
                                    placeholder={appOverview}
                                    rows="10"
                                    cols="50"
                                ></textarea>
                            </div>
                            <button onClick={handleLoginClick}>Login</button>

                            {/* Placeholder components for future use */}
                            <PlaceholderComponent />
                            <PlaceholderComponent />
                        </div>
                    )
                )}
            </div>

            <Footer />
        </div>
    );
}

export default App;



