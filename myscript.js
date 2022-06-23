var arrayOfQuotes = [

{
    "author":"Nelson Mandela",
    "quote":"The greatest glory in living lies not in never falling, but in rising every time we fall."
},
{
    "author":"Walt Disney",
    "quote":"The way to get started is to quit talking and begin doing"
},
{
    "author":"Steve Jobs",
    "quote":"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
},
{
    "author":"Eleanor Roosevelt",
    "quote":"If life were predictable it would cease to be life, and be without flavor."
},
{
    "author":"Adolf Hitler ",
    "quote":"Words build bridges into unexplored regions."
},
{
    "author":"Benjamin Franklin",
    "quote":"Tell me and I forget. Teach me and I remember. Involve me and I learn."
},
{
    "author":"Aristotle",
    "quote":"It is during our darkest moments that we must focus to see the light."
},
{
    "author":"Aristotle",
    "quote":"Anybody can become angry - that is easy, but to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way - that is not within everybody's power and is not easy."
},
{
    "author":"Epicurus",
    "quote":"You don't develop courage by being happy in your relationships everyday. You develop it by surviving difficult times and challenging adversity."
},
{
    "author":"Heraclitus",
    "quote":"There is nothing permanent except change."
},
{
    "author":"Socrates",
    "quote":"By all means, get married: if you find a good wife, you'll be happy; if not, you'll become a philosopher."
},
{
    "author":"Alexander the Great",
    "quote":"I am indebted to my father for living, but to my teacher for living well."
},
{
    "author":"Plutarch",
    "quote":"The real destroyer of the liberties of the people is he who spreads among them bounties, donations and benefits."
},
{
    "author":"Democritus",
    "quote":"Nothing exists except atoms and empty space; everything else is just opinion."
},
{
    "author":"Churchill",
    "quote":"I leave when the pub closes"
},
{
    "author":"Plato",
    "quote":"He who steals a little steals with the same wish as he who steals much, but with less power."
},
{
    "author":"Solon",
    "quote":"Let no man be called happy before his death. Till then, he is not happy, only lucky."
}
]

function randomSelector(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function generateQuote() {
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = "- " + arrayOfQuotes[randomNumber].author;
}