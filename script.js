const text = document.getElementById("text");
const author = document.getElementById("author");
const mybutton = document.getElementById("new-quote");
const tweetquote = document.getElementById("tweet-quote");
const bodyelement = document.body
let number = 0
let huedeg =0
var innertextforquote
var innerauthor
function getQuotes() {
    return fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then(response => {
        return response.json();
        
      })
      .then(res=>{
         innertextforquote = res.quotes[number].quote;
         innerauthor = res.quotes[number].author;
        text.innerHTML = innertextforquote;
        author.innerHTML = `~${innerauthor}` 
        const tweeturl = `https://twitter.com/intent/tweet?text=${encodeURIComponent('"'+innertextforquote+'"-'+innerauthor)}`;
        tweetquote.href = tweeturl;
      })
     
    }
    getQuotes() 
  
  function handleclick (){
    number ++;

    getQuotes(); 

  document.documentElement.style.setProperty('--color', `hsl(${huedeg}, 100%, 50%)`);
  }
  function handlehue(){
    huedeg +=45;
    handleclick()
  }
  mybutton.addEventListener('click',handlehue)
