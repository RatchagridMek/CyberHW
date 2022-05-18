import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Firstquest from './firstQuest'
import Firstpage from './fitstPage'
import Secondpage from './secondQuest'
import Lastpage from './lastQuest'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Firstpage></Firstpage>} />
        <Route path="/liw_w_www" element={<Firstquest></Firstquest>} />
        <Route path="/secondsomethingww_www_eiei" element={<Secondpage></Secondpage>}></Route>
        <Route path="/finalQuestfinalTime" element={<Lastpage></Lastpage>}></Route>
      </Routes>
    </Router>

  );
}

export default App;
