const fetch = require('node-fetch');
let search = 'J.D.+Robb';


//Fetch Path
fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}`)
  .then(response => {
    return response.json();
  })
  .then(data => {
    console.log(data)
  });