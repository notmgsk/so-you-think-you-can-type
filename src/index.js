import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let poem = "The moving finger writes; and, having writ, moves on.";

class Letter extends React.Component {
  render() {
    let i = this.props.i,
        c = this.props.c,
        cursor = this.props.cursor;

    var letterid    = "letter-" + i,
        letterclass = i == cursor ? "active-letter-good" : "inactive-letter";

    return <span id={letterid} key={letterid} className={letterclass}>
             {c}
           </span>;
  }
}

class Phrase extends React.Component {
  spanify() {
    return (
      <span>
        {this.props.str.split("").map((c, i) => <Letter key={i} i={i} c={c} cursor={this.props.cursor} />)}
      </span>
    );
  }

  render() {
    return (
      <p>{this.spanify()}</p>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cursor: 0,
      str: poem
    };

    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
  }

  handleKey(e) {
    // TODO This disables stuff like cmd+r. Not good.
    // Printing keys and backspace.
    if ((e.keyCode >= 32 && e.keyCode <= 223) || e.keyCode == 8) {
      // Prevent keys like backspace affecting the page. Controversial,
      // but the app is keypress-based and so not unreasonable that it
      // would override some keys. Maybe this should be relaxed: right
      // now my only concern is backspace.
      e.preventDefault();
    }
    else {
      // Ignore non-printing characters.
      return;
    }

    this.setState({cursor: (this.state.cursor + 1) % this.state.str.length});
  }

  render() {
    return (
      <div className="main">
        <div className="poem">
          <Phrase cursor={this.state.cursor} str={this.state.str} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
