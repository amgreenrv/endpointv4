const fetch = require('node-fetch');
let search = 'Nora Roberts';



//Fetch Path
fetch(`https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&limit=10`)
  .then(response => {
    return response.json();
  })
  .then(data => {

  const bookInfo0 = data.items[0];
  const bookInfo1 = data.items[1];
  const bookInfo2 = data.items[2];
  const bookInfo3 = data.items[3];
  const bookInfo4 = data.items[4];

  
//  bookArray.forEach(element => console.log(element));

// let reformattedArray = bookArray.map(obj => {
//   let rObj = {}
//   rObj[obj.title] = obj.title
//   return rObj
// });

// console.log(reformattedArray);


  console.log("Title:" + ' ' + bookInfo0.volumeInfo.title + ' ' + "Authors:" + ' ' + bookInfo0.volumeInfo.authors + ' ' + "Publisher:" + ' ' + bookInfo0.volumeInfo.publisher); 
  console.log("Title:" + ' ' + bookInfo1.volumeInfo.title + ' ' + "Authors:" + ' ' + bookInfo1.volumeInfo.authors + ' ' + "Publisher:" + ' ' + bookInfo1.volumeInfo.publisher); 
  console.log("Title:" + ' ' + bookInfo2.volumeInfo.title + ' ' + "Authors:" + ' ' + bookInfo2.volumeInfo.authors + ' ' + "Publisher:" + ' ' + bookInfo2.volumeInfo.publisher); 
  console.log("Title:" + ' ' + bookInfo3.volumeInfo.title + ' ' + "Authors:" + ' ' + bookInfo3.volumeInfo.authors + ' ' + "Publisher:" + ' ' + bookInfo3.volumeInfo.publisher); 
  console.log("Title:" + ' ' + bookInfo4.volumeInfo.title + ' ' + "Authors:" + ' ' + bookInfo4.volumeInfo.authors + ' ' + "Publisher:" + ' ' + bookInfo4.volumeInfo.publisher); 


//For each of the entries above, need to push them into a database. For loop with push?

});

// class Book {
//   constructor() {
//     this.author = author;
//   }
// }

// const book1 = new Book();

// console.log(book1.author);