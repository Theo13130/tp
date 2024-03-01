import React, { useState } from 'react';
import './App.css';
import Header from './componants/Header.jsx';
import Dashboard from './componants/Dashboard.jsx';
import Overview from './componants/Overview.jsx';
import { ThemeProvider } from './contexts/ThemeContext.jsx';

function App() {
  const [isLightTheme, setIsLightTheme] = useState(false);
  
  const handleToggleTheme = () => {
    setIsLightTheme(prevTheme => !prevTheme);
  };
  
  return (
    <ThemeProvider value={{ isLightTheme, toggleTheme: handleToggleTheme }}>
      <body className={`body ${isLightTheme ? 'body-light' : ''}`}>
        <main className="main-container">
          <Header />
          <Dashboard />
          <Overview />
        </main>
      </body>
    </ThemeProvider>
  );
}

export default App;
