import { ChatEngine} from 'react-chat-engine';

import LoginForm from './components/LoginForm';
import ChatFeed from './components/ChatFeed';

import './App.css';

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
        height="100vh"
        projectID="fa757d16-fb32-4bdc-a487-8b978ebafd39"
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        // username={"React Js"}
        // userSecret={"123123"}
        renderChatFeed={(chatAppProps) => <ChatFeed { ... chatAppProps}/>}
    />
        )
}

export default App;