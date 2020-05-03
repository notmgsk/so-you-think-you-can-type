import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

let quotes = [
  // Einstein
  "A human being is a part of the whole called by us universe, a part limited in time and space. He experiences himself, his thoughts and feeling as something separated from the rest, a kind of optical delusion of his consciousness. This delusion is a kind of prison for us, restricting us to our personal desires and to affection for a few persons nearest to us. Our task must be to free ourselves from this prison by widening our circle of compassion to embrace all living creatures and the whole of nature in its beauty.",
  // Feynman
  "Well, Mr. Frankel, who started this program, began to suffer from the computer disease that anybody who works with computers now knows about. It's a very serious disease and it interferes completely with the work. The trouble with computers is you *play* with them. They are so wonderful. You have these switches - if it's an even number you do this, if it's an odd number you do that - and pretty soon you can do more and more elaborate things if you are clever enough, on one machine.",
  // What's his face who wrote V for Vendetta
  "The only verdict is vengeance; a vendetta, held as a votive, not in vain, for the value and veracity of such shall one day vindicate the vigilant and the virtuous. Verily, this vichyssoise of verbiage veers most verbose, so let me simply add that it's my very good honor to meet you and you may call me V.",
  // What's his face who wrote the quote.
  "The moving finger writes; and, having writ, moves on.",
  "A breeze ruffled the neat hedges of Privet Drive, which lay silent and tidy under the inky sky, the very last place you would expect astonishing things to happen. Harry Potter rolled over inside his blankets without waking up. One small hand closed on the letter beside him and he slept on, not knowing he was special, not knowing he was famous, not knowing he would be woken in a few hours' time by Mrs. Dursley's scream as she opened the front door to put out the milk bottles, nor that he would spend the next few weeks being prodded and pinched by his cousin Dudley...He couldn't know that at this very moment, people meeting in secret all over the country were holding up their glasses and saying in hushed voices: \"To Harry Potter - the boy who lived!\"",
  "Here's to the crazy ones. The misfits. The rebels. The troublemakers. The round pegs in the square holes. The ones who see things differently. They're not fond of rules. And they have no respect for the status quo. You can quote them, disagree with them, glorify or vilify them. About the only thing you can't do is ignore them. Because they change things. They push the human race forward. And while some may see them as the crazy ones, we see genius. Because the people who are crazy enough to think they can change the world, are the ones who do.",
  "There is never a time or place for true love. It happens accidentally, in a heartbeat, in a single flashing, throbbing moment.",
  "Finish each day and be done with it. You have done what you could. Some blunders and absurdities no doubt crept in; forget them as soon as you can. Tomorrow is a new day. You shall begin it serenely and with too high a spirit to be encumbered with your old nonsense.",
  "You can never be overdressed or overeducated.",
  "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness. Armour yourself in it, and it will never be used to hurt you.",
];

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

class WPM extends React.Component {
  countWords(str) {
    return str.split(" ").length;
  }

  render() {
    let wpm =
        Number.parseFloat(this.countWords(this.props.string)/(this.props.clock / 60) * 1000)
        .toFixed();
    return (
      <h1>WPM {wpm}</h1>
    );
  }
}

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cursor: 0,
      cursorStyle: goodLetterStyle,
      str: this.randomElt(quotes)
    };

    this.clock = null;
    this.finished = null;

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

    if (this.finished) {
      return;
    }

    if (!this.clock) {
      this.clock = new Date();
    }

    var newstate;

    if (this.state.str[this.state.cursor] == e.key) {
      newstate = {cursor: (this.state.cursor + 1) % this.state.str.length,
                  cursorStyle: goodLetterStyle};
    }
    else {
      newstate = {cursor: this.state.cursor, cursorStyle: badLetterStyle};
    }

    if (this.state.cursor == (this.state.str.length - 1) && newstate["cursorStyle"] == goodLetterStyle) {
      this.finished = true;
      this.clock = (new Date()).getTime() - this.clock.getTime();
      console.log(this.clock);
    }
    
    this.setState(newstate);
  }

  randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  randomElt(array) {
    return array[this.randomInt(0, array.length)];
  }

  render() {
    return (
      <div className="main">
        <div className="quote">
          <Phrase str={this.state.str}
                  cursor={this.state.cursor}
                  cursorStyle={this.state.cursorStyle} />
        </div>
        <div className="info">
          {this.finished && <WPM string={this.state.str} cursor={this.cursor} clock={this.clock} />}
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('root')
);
