const fetch = require('node-fetch');
let search = 'J.D.+Robb';



//Fetch Path
fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&limit=10`)
  .then(response => {
    return response.json();
  })
  .then(data => {

  const bookInfo = data.items[1];


  console.log("Title:" + ' ' + bookInfo.volumeInfo.title); 
  console.log("Authors:" + ' ' + bookInfo.volumeInfo.authors); 
  console.log("Publisher:" + ' ' + bookInfo.volumeInfo.publisher); 

});

