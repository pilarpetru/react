//import logo from './logo.svg';
import './App.css';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import React from 'react';
import {Home} from './views/Home';
import {TicTacToe} from './views/TicTacToe';
import {Quiz} from './quiz/Quiz';
import ReactDOM from 'react-dom';
import {Navigation} from './views/Navigation';
import {Header} from './views/Header';
import LanguageSelector from './context/LanguageSelector';
import { LanguageProvider } from './context/LangContext';

class App extends React.Component {
  render(){
    return (
      <div>
        <Router>
          <LanguageProvider>
            <div id="cab">
              <Header />
              <LanguageSelector />
            </div>
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tictactoe" element={<TicTacToe />} />
              <Route path="/quiz" element={<Quiz />} />
            </Routes>
          </LanguageProvider>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

export default App;
