import React, { useState } from "react";
import "./style.css";
import { ChatPop } from "./chatPop";

function App() {
  const [show, setShow] = useState(false)

  const showHandler =() => {
    setShow(prev => !prev)
  }

  return (
    <div className="page">
      <div className="head">
        <div className="brand">
          <div className="brand-name">Maxeon</div>
        </div>
        <div className="navbar">
          <div className="navbar-list">
            <div className="navbar-item">Products</div>
            <div className="navbar-item">Features</div>
            <div className="navbar-item">Use Cases</div>
            <div className="navbar-item">Pricing</div>
            <div className="navbar-item">Login</div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="box-left">
          <div className="slogan">Where</div>
          <div className="slogan">words</div>
          <div className="slogan">fail,</div>
          <div className="slogan">Music</div>
          <div className="slogan">speaks.</div>
        </div>
      </div>
      <div className="chat-box">
        <div className="image-box" onClick={showHandler}>
          {show?
          <div className="close">
            <div className="line-1"></div>
            <div className="line-2"></div>
          </div>
          :
          <img src="/Sparrow Bird.png" alt="" />
          }
        </div>
        {show? <ChatPop></ChatPop> : null}
      </div>
    </div>
  );
}

export default App;
