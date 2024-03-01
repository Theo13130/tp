import './App.css';
import Header from './componants/Header.jsx';
import Dashboard from './componants/Dashboard.jsx';
import Overview from './componants/Overview.jsx';
import { useTheme } from './contexts/ThemeContext.jsx';

function App() {  
  const { isLightTheme } = useTheme();

  return (
    <body className={`body ${isLightTheme ? 'body-light' : ''}`}>
      <main className="main-container">
        <Header />
        <Dashboard />
        <Overview />
      </main>
    </body>
  );
}

export default App;
