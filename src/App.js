import React, { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import Chat from "./components/chat/Chat";
import Home from "./components/home/Home";
import Navbar from "./components/layout/Navbar";

function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div className="App">
        <UserContext.Provider value={{ user, setUser }}>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/chat" component={Chat} />
          </Switch>
        </UserContext.Provider>
      </div>
      ;
    </Router>
  );
}

export default App;
