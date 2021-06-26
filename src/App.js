import { ChatEngine } from 'react-chat-engine';
import './App.css';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';
const App = () =>{
    if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine 
            height="100vh"
            projectID="bf71c437-b284-4adc-af8d-9a690791d3d2"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            // userName="duongvat"
            // userSecret="321321"
            renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;