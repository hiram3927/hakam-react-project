import React from 'react';
import { AppBar, BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import { Home, Face, People } from "@material-ui/icons";
import { BrowserRouter, Route, Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/Home';
import FeedPage from './pages/Feed';
import AboutPage from './pages/About';

const App = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue)
  };

  return (
    <div className="App">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <div className="page-container">
          <Route path="/" exact component={HomePage} />
          <Route path="/feed" component={FeedPage} />
          <Route path="/about" component={AboutPage} />
        </div>
        <AppBar position="fixed" color="primary" style={{ top: "auto", bottom: 0 }}>
          <BottomNavigation sx={{ width: 500 }} value={value} onChange={handleChange}>
            <BottomNavigationAction
              component={Link}
              to="/"
              label="Home"
              value="home"
              icon={<Home />}
            />
            <BottomNavigationAction
              component={Link}
              to="/feed"
              label="Feed"
              value="feed"
              icon={<People />}
            />
            <BottomNavigationAction
              component={Link}
              to="/about"
              label="Profile"
              value="profile"
              icon={<Face />}
            />
          </BottomNavigation>
        </AppBar>
      </BrowserRouter>
    </div>
  );
}

export default App;
