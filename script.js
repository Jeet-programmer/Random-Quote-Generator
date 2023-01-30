const quoteText = document.querySelector(".quote");
const auth = document.getElementById("naam");
quoteBtn = document.querySelector("button");
soundBtn = document.querySelector(".sound");
copyBtn = document.querySelector(".copy");
twitterBtn = document.querySelector(".twitter");

fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        auth.innerText = result.author;
        quoteBtn.innerText = "New Quote";
    });


// random quote function
function randomQuote(){
    quoteBtn.innerText = "Loading Quote...";
    quoteBtn.classList.add("loading");
    // fetching random quote data from API and parsing it into Javascript object
    fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
        quoteText.innerText = result.content;
        auth.innerText = result.author;
        quoteBtn.innerText = "New Quote";
        quoteBtn.classList.remove("loading");
    });
}

soundBtn.addEventListener("click", ()=>{
    // the SpeechSynthesisUtterance is a web speech api that represents a speech request
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${auth.innerText}`);
    speechSynthesis.speak(utterance); // speak method of speechSynthesis speaks the utternace
});

copyBtn.addEventListener("click", ()=>{
    //copying the quote on copyBtn click
    // writeText() property writes the specified text string to the system clipboard
    navigator.clipboard.writeText(quoteText.innerText);
});

twitterBtn.addEventListener("click", ()=>{
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`
    window.open(tweetUrl, "_blank"); // opening new twitter tab passing quote in the url
});

quoteBtn.addEventListener("click",randomQuote);
