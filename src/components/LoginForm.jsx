import { useState } from "react";
import axios from "axios";

const LoginForm = () =>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSunmit = async (e) =>{
        e.preventDefault();

        const authObject = { 'Project-ID':"bf71c437-b284-4adc-af8d-9a690791d3d2", 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject})

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
        } catch (error) {
            setError('Incorrect')
        }
    }

    return(
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat application</h1>
                <form onSubmit={handleSunmit}>
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="User Name" required />
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="password" required />
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start chatting</span>
                        </button>
                    </div>
                    <h2 className="error">{error} </h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;