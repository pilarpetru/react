import '../Navigation.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
  return (
    <div>
      <nav className="nav nav-tabs" role="tablist">
        <NavLink id="home" to="/">

          <button class="home" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> <i>Home </i>
          </button>
          <svg width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
            {/*  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                      <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/> */}
          </svg>
        </NavLink>
        <NavLink to="/tictactoe">

          <button class="tictactoeh" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span> <i>TicTacToe</i>
          </button>
          <svg width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" /></NavLink>

        <NavLink to="/quiz"><button class="quizh" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span> <i>Quiz</i>
        </button>
          <svg width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16" /></NavLink>

      </nav>
    </div>
  );
}

export default Navigation;