import React from "react";
import Header from "./component/header/header";
import Main from "./component/main/main";
import Nav from "./component/nav/nav";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header>
          <h1>여기는 헤더야</h1>
        </Header>
        <Main />
        <Nav />
      </div>
    </Router>
  );
}

export default App;
