import React from 'react';
import "../styles/svg.css";

export class Hall extends React.Component {
  render() {
    return (
      <div className="svg-container">
        <svg version="1.1"
          baseProfile="full"
          width="100%" height="100%"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="100%" height="100%" fill="transparent" />
          <line x1="0%" y1="0%" x2="37.5%" y2="37.5%" stroke="white" strokeWidth="2" />
          <line x1="100%" y1="0%" x2="62.5%" y2="37.5%" stroke="white" strokeWidth="2" />
          <line x1="0%" y1="100%" x2="37.5%" y2="62.5%" stroke="white" strokeWidth="2" />
          <line x1="100%" y1="100%" x2="62.5%" y2="62.5%" stroke="white" strokeWidth="2" />
        </svg>
      </div>
    );
  }
}
