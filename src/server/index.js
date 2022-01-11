var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const dotenv = require('dotenv');
const fetch = require('node-fetch')
dotenv.config();
const app = express()
const FormData = require('form-data');
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
app.use(express.static('dist'))

// const formdata = {
//     key: process.env.API_KEY,
//     txt: "Hi is there someone ?",
//     lang: "en"
// }

let fetchedData;
const callback = (req, res) =>
console.log("Server side: This the request data ",req.body);
  
app.post('/url',callback)
// const formdata = new FormData();
// formdata.append("key", process.env.API_KEY);
// formdata.append("url", "https://www.nytimes.com/2022/01/11/us/politics/biden-filibuster-voting-rights.html");
// formdata.append("lang", "en");  // 2-letter code, like en es fr ...

// const requestOptions = {
//   method: 'POST',
//   body: formdata,
//   redirect: 'follow'
// };
// const response = fetch("https://api.meaningcloud.com/sentiment-2.1?",requestOptions)
//   .then(response => (response.json()))
//   .then((res) =>{
//        fetchedData = res;
//   })
//   .catch(error => console.log('error', error));
 
console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
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
