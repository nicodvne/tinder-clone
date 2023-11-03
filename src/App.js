import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path="/chat" element={<h1> I am the chat page</h1>}></Route>
          {/* Always put the default route at the bottom !!! */}
          <Route path="/" element={<TinderCards/>}></Route>
          
        </Routes>

        {/* Tinder cards */}
        {/* Button belows tinder cards */}
        {/* Chats screen */}
        {/* Individual chats screen */}

      </Router>
    </div>
  );
}

export default App;
