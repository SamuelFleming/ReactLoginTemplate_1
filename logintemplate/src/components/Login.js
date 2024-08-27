import React, { useState } from 'react';

function Login({ setUser }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submitting:', { username, password });
        try {
            const response = await fetch('http://localhost:5000/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.success) {
                setUser(data.user);
                setError('');
            } else {
                setError(data.message);
            }
        } catch (err) {
            setError('An error occurred. Please try again.');
        }
    };

    return (
        <form onSubmit={handleSubmit} autoComplete='off'>
            <h2>Login</h2>
            <label>
                Username:
                <input 
                    type="text" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    autoComplete="username"  // Update to "username" for modern browsers
                />
            </label>
            <label>
                Password:
                <input 
                    type="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    autoComplete="current-password"  // Update to "current-password"
                />
            </label>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;

