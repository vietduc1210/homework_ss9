const list = document.getElementById("list")

fetch('http://quotes.rest/qod.json')
    .then(response => response.json())
    .then(data => {
    let new1 = data["contents"];
    let new2 = new1["quotes"];
    let new3 = new2["0"];
    let newQuote = document.createElement("h1");
    newQuote.innerText = new3["quote"];
    list.insertAdjacentElement("beforeend",newQuote);
    let newAuthor = document.createElement("h4");
    newAuthor.innerText = new3["author"];
    list.insertAdjacentElement("beforeend",newAuthor);
  })
