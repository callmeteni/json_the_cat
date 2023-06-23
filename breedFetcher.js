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
