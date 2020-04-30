import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let poem = "The moving finger writes; and, having writ, moves on.";

function spanify(str) {
  return (
    <span>
      {str.split("").map((c) => <span className="thing">{c}</span>)}
    </span>
  );
}

class Phrase extends React.Component {
  render() {
    return (
      <p>{spanify(poem)}</p>
    );
  }
}

class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard">
        <div className="poem">
          <Phrase />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Keyboard />,
  document.getElementById('root')
);
