const quotes = [
{
    quote: "A rose by any other name would smell as sweet.",
    author: "William Shakespeare",
},
{
    quote: "All that glitters is not gold.",
    author: "William Shakespeare",
},
{
    quote: "Eighty percent of success is showing up.",
    author: "Woody Allen",
},
{
    quote: "For those to whom much is given, much is required.",
    author: "the Bible",
},
{
    quote: "Frankly, my dear, I don't give a damn.",
    author: "Rhett Butler",
},
{
    quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
    author: "Thomas Edison",
},
{
    quote: "He travels the fastest who travels alone.",
    author: "Rudyard Kipling",
},
{
    quote: "Hell is other people.",
    author: "Jean-Paul Sartre",
},
{
    quote: "I have always depended on the kindness of strangers.",
    author: "Blanche Dubois",
},
{
    quote: "If you are going through hell, keep going.",
    author: "Winston Churchill",
},
{
    quote: "If you build it, they will come.",
    author: "Joe Jackson",
},
{
    quote: "If you want something said, ask a man; if you want something done, ask a woman.",
    author: "Margaret Thatcher",
},
{
    quote: "Knowledge is power.",
    author: "Sir Francis Bacon",
},
{
    quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
    author: "Albert Einstein",
},
{
    quote: "Not all those who wander are lost.",
    author: "J. R. R. Tolkein",
},
{
    quote: "Parting is such sweet sorrow",
    author: "William Shakespeare",
},
{
    quote: "Power corrupts; absolute power corrupts absolutely.",
    author: "John Dalberg-Acton",
},
{
    quote: "Speak softly and carry a big stick",
    author: "Theodore Roosevelt",
},
{
    quote: "That’s one small step for a man, a giant leap for mankind.",
    author: "Neil Armstrong",
},
{
    quote: "The love of money is the root of all evil.",
    author: "the Bible",
},
{
    quote: "The truth will set you free.",
    author: "	the Bible",
},
{
    quote: "Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference.",
    author: "Robert Frost",
},
{
    quote: "United we stand, divided we fall.",
    author: "Aesop",
},
{
    quote: "What doesn't kill us makes us stronger.",
    author: "Friedrich Nietzsche",
},
{
    quote: "What we've got here is failure to communicate. Some men you just can't reach.",
    author: "Captain",
},
{
    quote: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
}
]; //26개

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //랜덤 명언
// console.log(quotes[0-25]);
// console.log(quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;


