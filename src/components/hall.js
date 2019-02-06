import React from 'react';
import "../styles/svg.css";

export class Hall extends React.Component {
  render() {
    return (
      <div className="svg-container">
        <svg version="1.1"
          baseProfile="full"
          width="100%" height="100%"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <rect width="100%" height="100%" fill="transparent" />
          <polygon
            side="top"
            vectorEffect="non-scaling-stroke"
            points="0,0 37.5,37.5 62.5,37.5 100,0"
            opacity=".7"
            stroke="white"
            strokeWidth="1"
          />
          <polygon
            side="right"
            vectorEffect="non-scaling-stroke"
            points="100,0 62.5,37.5 62.5,62.5 100,100"
            fill="gray"
            stroke="white"
            strokeWidth="1"
          />
          <polygon
            side="bottom"
            vectorEffect="non-scaling-stroke"
            points="100,100 62.5,62.5 37.5,62.5 0,100"
            fill="gray"
            stroke="white"
            strokeWidth="1"
          />
          <polygon
            side="left"
            vectorEffect="non-scaling-stroke"
            points="0,100 37.5,62.5 37.5,37.5 0,0"
            fill="gray"
            stroke="white"
            strokeWidth="1"
          />
        </svg>
      </div>
    );
  }
}
