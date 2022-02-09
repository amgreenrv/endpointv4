const fetch = require('node-fetch');
let search = 'J.D.+Robb';



//Fetch Path
fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&limit=1`)
  .then(response => {
    return response.json();
  })
  .then(data => {
  const bookInfo = data.items[1];

  let title = bookInfo.volumeInfo.title;
  let author = bookInfo.volumeInfo.authors;
  let publisher = bookInfo.volumeInfo.publisher;

  console.log("Title:" + ' ' + title); 
  console.log("Authors:" + ' ' + author); 
  console.log("Publisher:" + ' ' + publisher); 

});