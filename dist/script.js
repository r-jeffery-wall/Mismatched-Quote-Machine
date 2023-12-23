class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
      { quote: "Fortune Favours the bold.", author: "Virgl" },
      {
        quote: "It always seems impossible, until it's done.",
        author: "Nelson Mandela" },

      {
        quote: "Be yourself, everyone else is already taken.",
        author: "Oscar Wilde" },

      {
        quote: "Life is what happens when you’re busy making other plans.",
        author: "John Lenon" },

      {
        quote: "You must be the change you want to see in the world.",
        author: "Mahatma Gandhi" },

      {
        quote: "Get busy living or get busy dying.",
        author: "Stephen King" },

      {
        quote: "Whether you think you can or you think you can’t, you’re right.",
        author: "Henry Ford" },

      {
        quote: "Tis better to have loved and lost than to have never loved at all.",
        author: "Alfred Lord Tennyson" },

      {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein" },

      {
        quote: "Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.",
        author: "Mark Twain" },

      {
        quote: "Those who dare to fail miserably can achieve greatly.",
        author: "John F. Kennedy" },

      {
        quote: "All happy families are alike, but every unhappy family is unhappy in its own way",
        author: "Leo Tolstoy" },

      {
        quote: "He that falls in love with himself will have no rivals.",
        author: "Benjamin Franklin" },

      {
        quote: "Life is ten percent what happens to you and ninety percent how you respond to it.",
        author: "Charles Swindoll" },

      {
        quote: "Every man is guilty of all the good he did not do.",
        author: "Voltaire" }],


      colors: ['red', 'green', 'blue', 'yellow', 'purple', 'gray'],
      quotesIndex: 2,
      colorsIndex: 3 };

  }

  newQuote() {
    let previousQuotesIndex = this.state.quotesIndex;
    let previousColorsIndex = this.state.colorsIndex;
    this.setState(state => ({
      quotesIndex: Math.floor(Math.random() * state.quotes.length),
      colorsIndex: Math.floor(Math.random() * state.colors.length) }));

    if (this.state.quotesIndex === previousQuotesIndex || this.state.colorsIndex === previousColorsIndex) newQuote();
  }

  render() {
    const quote = this.state.quotes[this.state.quotesIndex].quote;
    const author = this.state.quotes[this.state.quotesIndex].author;
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