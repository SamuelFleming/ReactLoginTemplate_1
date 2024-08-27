import React from 'react';

function Header({ user, onLogout }) {
    return (
        <header className="header">
            <div className="logo-container">
                <img src="/AppLogo.png" alt="App Logo" className="app-logo" />
            </div>
            <div className="nav-buttons">
                <button className="nav-button" onClick={() => window.history.back()}>Back</button>
                <button className="nav-button" onClick={() => window.history.forward()}>Forward</button>
                <button className="nav-button" onClick={() => window.location.href = '/'}>Home</button>
            </div>
            <div className="user-controls">
                {user ? (
                    <>
                        <img src="path-to-Avatar.png" alt="User Avatar" className="user-avatar" />
                        <button className="nav-button" onClick={onLogout}>Logoff</button>
                    </>
                ) : (
                    <img src="/deafultAvatar.png" alt="Default Avatar" className="user-avatar" />
                )}
            </div>
        </header>
    );
}

export default Header;
