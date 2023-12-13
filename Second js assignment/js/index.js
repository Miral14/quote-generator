var quote = ['Be yourself; everyone else is already taken.',"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.","Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.","So many books, so little time.","A room without books is like a body without a soul.","You only live once, but if you do it right, once is enough.","Be the change that you wish to see in the world.","In three words I can sum up everything I've learned about life: it goes on.","If you tell the truth, you don't have to remember anything.","Without music, life would be a mistake."];
var quoteAuthor = ['― Oscar Wilde','― Marilyn Monroe',"― Albert Einstein","― Frank Zappa","― Marcus Tullius Cicero","― Mae West","― Mahatma Gandhi","― Robert Frost","― Mark Twain","― Friedrich Nietzsche, Twilight of the Idols"];

var previousQuote = ''; 
function generateQuote() {
    var index= Math.floor(Math.random()*quote.length);
    var currentQuote = quote[index];
    var data ="";
    if(previousQuote != currentQuote){
        previousQuote = currentQuote;
        data=`<h4>${currentQuote}</h4>
        <h4>${quoteAuthor[index]}</h4>`;
    } else{
        index = Math.floor(Math.random()*quote.length);
        currentQuote = quote[index];
        previousQuote = currentQuote;
        data = `<h4>${currentQuote}</h4>
        <h4>${quoteAuthor[index]}</h4>`;
    }
    document.getElementById("quotes").innerHTML=data;
}