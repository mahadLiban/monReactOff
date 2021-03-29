import React from 'react';
import ReactDOM from 'react-dom';
import Body from "./Components/Body/Body"
ReactDOM.render(
  <React.StrictMode>
    <Body format="monH1jsp"/>
    <Body format="monH2"/>

  </React.StrictMode>,
  document.getElementById('root')
);

