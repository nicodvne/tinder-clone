import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats.js';
import ChatScreen from './Chatscreen.js';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/chats/:person" element={
              <>
                <Header backButton="/chats"/>
                <ChatScreen></ChatScreen>
              </>
          }>
          </Route>
          <Route path="/chats" element={
              <>
                <Header backButton="/"/>
                <Chats/>
              </>
          }>
          </Route>
          {/* Always put the default route at the bottom !!! */}
          <Route path="/" element={
            <>
              <Header/>
              <TinderCards/>
              <SwipeButtons/> 
            </>               
          }>
          </Route>
          
        </Routes>
        {/* Chats screen */}
        {/* Individual chats screen */}

      </Router>
    </div>
  );
}

export default App;
