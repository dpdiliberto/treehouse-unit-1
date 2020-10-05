/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/*** 
 * Declares a 'quotes' array containing objects with the following properties:
 * 'quote' - string - the actual quote
 * 'source' - string - the person or character who said it (optional)
 * 'citation' - string - reference to the source of the quote (optional)
 * 'year' - string or number - representing where the quote originated (optional)
 * 'tag' - string - quote category (optional)
***/
let quotes = [
  {
    quote: 'When you reach the end of your rope, tie a knot in it and hang on.',
    source: 'Franklin Roosevelt',
    citation: 'https://blog.hubspot.com/sales/famous-quotes'
  },
  {
    quote: 'Spread love everywhere you go. Let no one ever come to you without leaving happier.',
    source: 'Mother Teresa'
  },
  {
    quote: "The real test is not whether you avoid this failure, because you won't. It's whether you let it harden or shame you into inaction, or whether you learn from it; whether you choose to persevere.",
    source: 'Barack Obama',
    tag: 'inspirational'
  },
  {
    quote: 'Fight for the things that you care about, but do it in a way that will lead others to join you.',
    source: 'Ruth Bader Ginsburg',
    citation: 'https://www.huffpost.com/entry/ruth-bader-ginsburg-fight-for-the-things-you-care-about_n_7492630',
    year: 2015
  },
  {
    quote: 'Confidence is 10 percent hard work and 90 percent delusion, just thinking foolishly that you will be able to do what you want to do.',
    source: 'Tina Fey'
  }
];

/***
 * `getRandomQuote` function takes in an array containing quote objects and returns a random quote object
 * @param {array} Arg An array of quote objects
 * @return {object} A single quote object
***/
function getRandomQuote(array) {
  let randomNumber = Math.floor(Math.random() * array.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};

// Creates a random value to use as a parameter to the randomBackgroundColor function
const randomValue = () => Math.floor(Math.random() * 256);

/***
 * `randomBackgroundColor` function takes in the randomValue function and sets the body of the document to a random color
 * Borrowed code from: https://teamtreehouse.com/library/the-refactor-challenge-duplicate-code
 * @param {function} arg Function that generates a color value
***/
function randomBackgroundColor(value) {
  const randomColor = `rgb( ${value()}, ${value()}, ${value()} )`;
  document.querySelector('body').style.backgroundColor = randomColor;
};

/***
 * `printQuote` function that builds an HTML string of a random quote, displays it on the page,
 * and sets a random background color
 * The function takes no parameters 
***/
function printQuote() {
  let quote = getRandomQuote(quotes);
  let html = `<p class="quote"> ${quote.quote} </p>
  <p class="source"> ${quote.source}`
  if (quote.citation) {
    html += `<span class="citation"> ${quote.citation}</span>`
  };
  if (quote.year) {
    html += `<span class="year"> ${quote.year} </span>`
  };
  if (quote.tag) {
    html += `<span">, (${quote.tag}) </span>`
  }
    html += `
    <\p>`;
  document.getElementById('quote-box').innerHTML = html;
  randomBackgroundColor(randomValue);
};


// printQuote function is called when button is clicked
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// printQUote function is called everything 12 seconds
var myVar = setInterval(printQuote, 12000);