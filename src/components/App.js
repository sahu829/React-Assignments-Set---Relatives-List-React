import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    let list = ["a", "b", "c", "d"];
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <ol key="relativeList">
          {list.map((relative, index) => (
            <li key={"relativeListItem" + (index + 1)}>
              {relative}
              {index}
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

export default App;
