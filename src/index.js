import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//let poem = "The moving finger writes; and, having writ, moves on.";
let poem = "The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it's my very good honor to meet you and you may call me V.";

let goodLetterStyle = "active-letter-good",
    badLetterStyle  = "active-letter-bad";

class Letter extends React.Component {
  render() {
    let i = this.props.i,
        c = this.props.c,
        cursor = this.props.cursor,
        cursorStyle = this.props.cursorStyle;

    var letterid    = "letter-" + i,
        letterclass = i == cursor ? cursorStyle : "inactive-letter";

    return <span id={letterid} key={letterid} className={letterclass}>
             {c}
           </span>;
  }
}

class Phrase extends React.Component {
  spanify() {
    return (
      <span>
        {this.props.str.split("")
         .map((c, i) => <Letter key={i} i={i} c={c} cursor={this.props.cursor}
                                cursorStyle={this.props.cursorStyle}/>)}
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
      cursorStyle: goodLetterStyle,
      str: poem
    };

    this.handleKey = this.handleKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKey, false);
  }

  handleKey(e) {
    if ((e.keyCode >= 32 && e.keyCode <= 223 && !e.altKey && !e.ctrlKey && !e.metaKey)
        || e.keyCode == 8) {
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

    var newstate;

    if (this.state.str[this.state.cursor] == e.key) {
      newstate = {cursor: (this.state.cursor + 1) % this.state.str.length,
                  cursorStyle: goodLetterStyle};
    }
    else {
      newstate = {cursor: this.state.cursor, cursorStyle: badLetterStyle};
    }
    this.setState(newstate);
  }

  render() {
    return (
      <div className="main">
        <div className="poem">
          <Phrase str={this.state.str}
                  cursor={this.state.cursor}
                  cursorStyle={this.state.cursorStyle} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
