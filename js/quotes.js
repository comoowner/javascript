const quotes = [
    {
      quote: "The shortest war in history was between Britain and Zanzibar in 1896. It lasted only 38 minutes."
    },
    {
    quote: "The world's oldest piece of chewing gum is over 9,000 years old!"
    },
    {
    quote: "There are more possible iterations of a game of chess than there are atoms in the known universe."
    },
    {
    quote: "A group of flamingos is called a flamboyance."
    },
    {
    quote: "The longest word in the English language has 189,819 letters."
    },
    {
    quote: "The shortest complete sentence in the English language is 'I am.'"
    },
    {
    quote: "The shortest poem in the English language is 'Fleas.' Adam had 'em."
    },
    {
    quote: "A sneeze travels about 100 miles per hour."
    },
    {
    quote: "The world's largest grand piano was built by a 15-year-old in New Zealand."
    },
    {
    quote: "A cockroach can live several weeks without its head."
    },
    {
      quote: "Uranus was discovered before Antarctica."
    }
  ];
  
const quote=document.querySelector("#quote")
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; 

quote.innerText = todaysQuote.quote;

const images=["1.jpg","2.jpg", "3.jpg"];
const randomImage=images[Math.floor(Math.random() * images.length)]; 

const bgImage=document.createElement("img");
bgImage.src="img/"+randomImage;
document.body.appendChild(bgImage)