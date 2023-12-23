export { buildQuote }

const quotePart1 = [
    "Ask not what your country can do for you, ",
    "A bird in the hand is worth ",
    "Eighty percent of success is ",
    "Genius is one percent inspiration and ",
    "He travels the fastest who ",
    "Hell has no fury like a ",
    "I think, therefore ",
    "If you're going through hell, ",
    "If at first you don't succeed, ",
    "If you want something done right, ",
    "Life is like riding a bicycle. ",
    "No one can make you feel inferior without ",
    "Not all those who wander ",
    "Nothing is certain except for ",
    "That's one small step for a man, ",
    "The only thing we have to fear is ",
    "Three can keep a secret, if ",
    "T'is better to have loved and lost than ",
    "What doesn't kill us ",
    "You must be the change ",
    "You can fool all of the people some of the time, and ",
    "Fortune favours the ",
    "It always seems impossible, ",
    "Life is what happens when ",
    "Get busy living or ",
    "Whether you think you can or you think you can't, ",
    "Strive not to be a success, ",
    "Twenty years from now you will be more disappointed by ",
    "Those who dare to fail miserably ",
    "He that falls in love with himself ",
    "Life is ten percent what happens to you and ",
    "Every man is guilty of "
];
const quotePart2 = [
    "Ask what you can do for your country.",
    "Two in the bush.",
    "showing up.",
    "ninety-nine percent perspiration.",
    "travels alone.",
    "woman scorned.",
    "I am.",
    "keep going.",
    "try, try again.",
    "do it yourself.",
    "To keep your balance, you must keep moving.",
    "your consent.",
    "are lost.",
    "death and taxes.",
    "a giant leap for mankind.",
    "fear itself.",
    "two of them are dead.",
    "never to have loved at all.",
    "makes us stronger",
    "you wish to see in the world.",
    "some of the people all of the time, but you can't fool all of the people all of the time.",
    "bold.",
    "until it's done.",
    "you're busy making other plans.",
    "get busy dying.",
    "you're right.",
    "but rather to be of value.",
    "the things that you didn't do than by the ones you did do.",
    "can achieve greatly.",
    "will have no rivals.",
    "ninety percent how you respond to it.",
    "all the good he did not do."
];
const quoteAuthor = [
    "John. F. Kennedy",
    "Woody Allen",
    "Thomas Edison",
    "Rudyard Kipling",
    "William Congreve",
    "Rene Descartes",
    "Winston Churchill.",
    "W. E. Hickson",
    "Charles-Guillaume Etienne",
    "Albert Einstein",
    "Eleanor Roosevelt",
    "J. R. R. Tolkein",
    "Benjamin Franklin",
    "Neil Armstrong",
    "Franklin D. Roosevelt",
    "Theodore Roosevelt",
    "Alfred Lord Tennyson",
    "Friedrich Nietzsche",
    "Mahatma Gandhi",
    "Abraham Lincoln",
    "Virgil",
    "Nelson Mandela",
    "John Lennon",
    "Stephen King",
    "Henry Ford",
    "Mark Twain",
    "Charles Swindoll",
    "Voltaire"
];

const randNumber = max => Math.floor(Math.random() * max); // Quick helper function for getting a random number within a range.

const buildQuote = () => {
    // Random parts of quotes are selected.
    const part1 = quotePart1[randNumber(quotePart1.length)];
    const part2 = quotePart2[randNumber(quotePart2.length)];
    const author = quoteAuthor[randNumber(quoteAuthor.length)];
    
    return {quote: `${part1}${part2}`, author: author};
}
