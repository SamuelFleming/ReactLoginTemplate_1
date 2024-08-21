import React, { useState } from 'react';
import Login from './components/Login';

function App() {
    const [user, setUser] = useState(null);

    return (
        <div className="App">
            {user ? <h1>Welcome, {user.username}!</h1> : <Login setUser={setUser} />}
        </div>
    );
}

export default App;

