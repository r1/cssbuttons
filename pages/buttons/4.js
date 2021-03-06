import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#4</h1>
          <a href="/buttons/4" className="bn4">
            Button
          </a>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://github.com/r1"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/r1
            </a>{" "}
          </h2>
          <div>
            <pre className="prettyprint">{`<a href="/" className="bn4">Button</a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn4 {
  background-color: #ffffff;
  border: none;
  color: rgb(0, 0, 0);
  padding: 0.7em 1.7em;
  text-align: center;
  font-size: 16px;
  margin: 4px 2px;
  opacity: 0.6;
  transition: 0.3s;
  display: inline-block;
  text-decoration: none;
  cursor: pointer;
}

.bn4:hover {
  opacity: 1;
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
