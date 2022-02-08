const axios = require('axios');
const data = '';

let search = 'J.D.+Robb';

const config = {
  method: 'get',
  url: `https://www.googleapis.com/books/v1/volumes?q=inauthor:${search}&limit=10`,
  headers: { 
    'AIzaSyC_5CEs9GPgydzpcjcA5wNoNjJ4eEsMNsU': ''
  },
  data : data
};

axios(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
})
.catch((error) => {
  console.log(error);
});


module.exports = config;