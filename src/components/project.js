import React from 'react';
import "../styles/project.css";

export class Project extends React.Component {
  render() {
    return (
      <div className="project" style={{width: 1 / this.props.numProj * 100 + "%"}}>
        <div className="window">
        <span>words</span>
        </div>
      	<div className="door">
        </div>
      </div>
    );
  }
}
