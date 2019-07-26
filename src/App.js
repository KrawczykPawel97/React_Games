import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navigation from "./layouts/Navigation";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";
import HeadGame from "./components/HeadGame";

function App() {
  return (
      <Router>
        <div className="App">
          <div className="container">
            <div className="row">
              {/*<header>*/}
                <div className="col-sm-12" id={"headPage"}>
                  React Game
                </div>
              {/*</header>*/}
            </div>
              {/*<main>*/}
                <div className="row">
                  {/*<aside>*/}
                    <div className="col-4 col-sm-4 col-md-4" id={"navigation"}>
                      {<Navigation/>}
                    </div>
                  {/*</aside>*/}
                  <div className="col-8 col-sm-8 col-md-8" id={"game"}>
                      {<HeadGame/>}
                      {<Main/>}
                  </div>
                </div>
              {/*</main>*/}
            {/*<footer>*/}
              <div className="row">
                <div className="col-sm-12" id={"footer"}>
                    <br/>
                    {<Footer/>}
                </div>
              </div>
            {/*</footer>*/}
          </div>
        </div>
      </Router>
  );
}

export default App;
