
//quotes;source;citation;year
var quotes = [
  { quote: "Nothing is original. Steal from anywhere that resonates with inspiration or fuels your imagination. Devour old films, new films, music, books, paintings, photographs, poems, dreams, random conversations, architecture, bridges, street signs, trees, clouds, bodies of water, light and shadows. Select only things to steal from that speak directly to your soul. If you do this, your work (and theft will be authentic. Authenticity is invaluable; originality is non-existent. And don’t bother concealing your thievery - celebrate it if you feel like it. In any case, always remember what Jean-Luc Godard said: 'It’s not where you take things from - it’s where you take them to.", source: "-Jim Jarmusch", citation: "MovieMaker Magazine #53", year: "- Winter, January 22, 2004"},
  { quote: "The simple everyday experiences become the doorway to new thoughts and inspirations.", source: "-E.A. Bucchianeri"},
  { quote: "Empty complaints are the sources of everyday failure, but not the problem being complained about. Problems are solvable; but not with complaints. A complainer is just an explainer of problems!", source: "-Israelmore Ayivor", citation: "Daily Drive 365"},
  { quote: "It matters not what someone is born, but what they grow to be.", source: "Harry Potter and the Goblet of Fire", year: "July 8, 2000"},
  { quote: "Who are you to judge the life I live? I know I'm not perfect and I don't live to be but before you start pointing fingers... make sure you hands are clean!", source: "-Bob Marley", citation: "Marley' First recorded single, Federal Studios", year: "1978"},
];


//printQuote() to call and display initial quote prior to button press
printQuote();

//set timer for auto quote change


setInterval(printQuote(), 3000);

// calls out to get new random quote & returns a quote from the 'quotes' Array
function getRandomQuote() {
 return quotes[Math.floor(Math.random() * quotes.length)];
}

//printQuote constructs a string containing the different properties of the quote object
function printQuote() {

//store the returns the concatenated string (printQuote) as storeQuote
  var storeQuote = getRandomQuote();



  var HTMLoutput = '<p class="quote">' + storeQuote.quote + '</p>';
    HTMLoutput += '<p class="source">' + storeQuote.source + '</p>';

//if the quote citation is not undefined then send the text to the HTMLoutput
  if (storeQuote.citation !== undefined ) {
    HTMLoutput += '<span class="citation">' + storeQuote.citation + '</span>';

//if the citation field is anything else then the function carries on
} else {

    }

//if the year field is not undefined then the text to the HTMLoutput
  if (storeQuote.year !== undefined ) {
      HTMLoutput += '<span class="year">' + storeQuote.year + '</span>';

  //if the year field is anything else then the function carries on
  } else {

    }

    HTMLoutput += '</p>';

//print to display via .getElementById
console.log(HTMLoutput);
   document.getElementById('quote-box').innerHTML = HTMLoutput;

// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
  document.getElementById('loadQuote').addEventListener("click", printQuote, false);
}
