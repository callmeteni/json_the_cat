<<<<<<< HEAD
const {stdin} = require('process');
const request = require('request');


const fetchBreedDecription = (breedName, callback) => {
  const url = 'https://api.thecatapi.com/v1/breeds/search?name=' + breedName;
  request(url, function(error, response, body) {
    if (error) {
      return callback(error, null);
    }
    if (response.statusCode !== 200) {
      return callback(response.statusCode, null);
    } else {
      const data = JSON.parse(body);
      if (data.length === 0) {
        return callback('Breed not found', null);
      } else {
        const description = data[0].description;
        callback(null, description);
      }
    }
  });
};

module.exports = fetchBreedDecription;
=======
const { stdin } = require('process');
const request = require('request');
const input = process.argv[2];
const url = 'https://api.thecatapi.com/v1/breeds/search?name='+ input;

request(url, function (error, response, body) {
    if (error) {
        console.error('Error: ', error)
    }
    if (response.statusCode !== 200) {
        console.error("Status: ", response.statusCode)
    }
    else {
        const data = JSON.parse(body);
        if(data.length === 0){
            console.log("breed not found");
        }
        else{
            console.log(data);
            console.log(typeof body);
            console.log('Body:', body);
        }
    }
})
 
 console.log(input)
>>>>>>> aa3569a77b4a252d7e92098c1856710c062d3d62
