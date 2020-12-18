import React from 'react';
import './style.css';


function App() {
    return (
        <div id="viewer">
            <div className="f416">
                <h1 className="buttonh1">Button#46</h1>
                <div><a href="/buttons/46" tabindex="0"><img className="bn46" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png" alt="bn45" /></a></div>
                <h2 className="h2source">Compatibility: <img alt="firefox" src="https://img.icons8.com/nolan/45/firefox.png" /><img alt="chrome" src="https://img.icons8.com/nolan/45/chrome.png" /><img alt="safari" src="https://img.icons8.com/nolan/45/safari.png" /><img alt="ie" src="https://img.icons8.com/nolan/45/internet-explorer.png" /></h2>
                <h2 className="h2source">Source: <a href="https://github.com/r1" className="avis" target="_blank" rel="noopener noreferrer">github.com/r1</a></h2>
                <div>
                    <pre className="prettyprint">{`<div><a href="/" tabindex="0"><img className="bn46" src="https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png"alt="bn45"/></a></div>`}</pre>
                </div>
                <div>
                    <pre className="prettyprint">{`.bn46 {
  width: 150px;
  height: 50px;
}`}</pre>
                    <pre className="prettyprint">{'https://developer.apple.com/app-store/marketing/guidelines/images/badge-example-preferred.png'}</pre>
                </div>
            </div>
        </div>
    );
}



export default App;