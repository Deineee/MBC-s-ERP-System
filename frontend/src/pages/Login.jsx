import React, {useState} from 'react';

const Home = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Username: ', username);
        console.log('')

    };
    return(
        <div className ="home">
            <h2>MBC</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input type="text" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}
                    required
                    />
                </div>
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    );
};

export default Home