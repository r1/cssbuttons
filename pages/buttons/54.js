import React from "react";
import Panel from "@/components/Panel/Panel.js";

function Button() {
  return (
    <div>
      <Panel />
      <div id="viewer">
        <div className="f416">
          <h1 className="buttonh1">Button#54</h1>
          <a href="/buttons/54">
            <button class="bn54">
              <span class="bn54span">Button</span>
            </button>
          </a>
          <h2 className="h2source">
            Creator:{" "}
            <a
              href="https://codepen.io/Danil89/pen/MzrEdX"
              className="avis"
              target="_blank"
              rel="noopener noreferrer"
            >
              codepen.io/Danil89/pen/MzrEdX
            </a>
          </h2>
          <div>
            <pre className="prettyprint">{`<a href="/buttons/54">
  <button class="bn54">
    <span class="bn54span">Button</span>
  </button>
</a>`}</pre>
          </div>
          <div>
            <pre className="prettyprint">{`.bn54 {
  position: relative;
  outline: none;
  text-decoration: none;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  height: 45px;
  width: 130px;
  opacity: 1;
  background-color: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.6);
}

.bn54 .bn54span {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  color: #000000;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.7px;
}

.bn54:hover {
  animation: bn54rotate 0.7s ease-in-out both;
}

.bn54:hover .bn54span {
  animation: bn54storm 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

@keyframes bn54rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}

@keyframes bn54storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}`}</pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Button;
