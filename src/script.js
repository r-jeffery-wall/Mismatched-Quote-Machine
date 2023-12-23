import { buildQuote } from "./mismatched_quotes.js";

class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: {quote: "Click the button below to generate a jumbled-up quote.", author: ''},
      colors: ['red', 'green', 'blue', 'yellow', 'purple', 'gray'],
      colorsIndex: 3};
  }

  newQuote() {
    const previousQuote = this.state.quote;
    const previousColorsIndex = this.state.colorsIndex;
    this.setState(state => ({
      quote: buildQuote(),
      colorsIndex: Math.floor(Math.random() * state.colors.length) }));

    // if (this.state.quote === previousQuote || this.state.colorsIndex === previousColorsIndex) newQuote(); // A new quote is generated if either the quote or the color is repeated.
  }

  render() {
    const quote = this.state.quote.quote;
    const author = this.state.quote.author;
    const color = this.state.colors[this.state.colorsIndex];
    return /*#__PURE__*/(
      React.createElement("div", { class: "d-flex flex-column justify-content-center", id: "container", style: { background: color } }, /*#__PURE__*/
      React.createElement("div", { class: "text-center container-fluid", id: "panel", style: { color: color } }, /*#__PURE__*/
      React.createElement("h2", null, "'", quote, "'"), /*#__PURE__*/
      React.createElement("h3", null, "-", author, "-"), /*#__PURE__*/
      React.createElement("button", {
        type: "button",
        class: "btn btn-secondary",
        onClick: this.newQuote.bind(this) }, "New Quote"))));
  }}


ReactDOM.render( /*#__PURE__*/React.createElement(QuoteMachine, null), document.getElementById("quote-machine"));