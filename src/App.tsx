import './App.scss'
import React from 'react'
import { LandingPage } from './app/views';

class App extends React.Component {
  render() {
    return (
      <div className="app-container">
        <main>
          <LandingPage />
        </main>
      </div>
    );
  }
}

export default App
