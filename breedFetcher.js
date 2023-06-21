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