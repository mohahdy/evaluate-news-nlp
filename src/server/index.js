var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch')
dotenv.config();
const app = express()
const FormData = require('form-data');
app.use(express.static('dist'))

console.log(`Your API key is ${process.env.API_KEY}`);
// const formdata = {
//     key: process.env.API_KEY,
//     txt: "Hi is there someone ?",
//     lang: "en"
// }
let fetchedData;
const formdata = new FormData();
formdata.append("key", process.env.API_KEY);
formdata.append("txt", "Hi is there someone ?");
formdata.append("lang", "en");  // 2-letter code, like en es fr ...
console.log("formdata: " ,formdata);

const requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};
console.log("requestOptions: " ,requestOptions);
const response = fetch("https://api.meaningcloud.com/sentiment-2.1?",requestOptions)
  .then(response => (response.json()))
  .then((res) =>{
       console.log("res: ",res)
       fetchedData = res;
  })
  .catch(error => console.log('error', error));
 
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    // res.sendFile(path.resolve('src/client/views/index.html'))
})
app.get('/apidata', function (req, res) {
    res.send(fetchedData)
})
// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})
