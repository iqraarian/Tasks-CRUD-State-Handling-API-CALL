import React from "react";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home-container">
      <div className="welcome-box">
        <h1 className="welcome-text">WELCOME TO THE TODOS APP</h1>
        <Link to="/todos" className="go-to-todos">See All The Todos</Link>
      </div>
    </div>
  );
}

export default Home;

