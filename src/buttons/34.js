import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div className="f416">
                <h1 className="buttonh1">Button#34</h1>
                <a href="/"><button className="bn34">Button</button></a>
                <h2 className="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png"/><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png"/><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png"/><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png"/></h2>
                <h2 className="h2source">Source: <a href="https://github.com/r1" className="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a></h2>
                <div>
                    <pre className="prettyprint">{`<a href="/"><button className="bn34">Button</button></a>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn34 {
  background: none;
  cursor: pointer;
  text-decoration: inherit;
  font-size: 1rem;
  color: white;
  padding: 0.7rem 2rem;
  border-image-slice: 1;
  border-image-source: linear-gradient(to left, #743ad5, #d53a9d);
}`}</pre>
                </div>
            </div>
        </div>
    );
}

export default App;