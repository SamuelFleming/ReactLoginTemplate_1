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

    return (
        <div className="App">
            <Header />

            <div className="content">
                {user ? (
                    <h1>Welcome, {user.username}!</h1>
                ) : (
                    showLogin ? (
                        <Login setUser={setUser} />
                    ) : (
                        <div className="home">
                            <div className="logo-container">
                                <img src="/path-to-your-logo.png" alt="App Logo" className="app-logo" />
                            </div>
                            <div className="overview-container">
                                <h2>App Overview</h2>
                                <textarea
                                    className="app-overview"
                                    placeholder="This is where you can write an overview of the app..."
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



