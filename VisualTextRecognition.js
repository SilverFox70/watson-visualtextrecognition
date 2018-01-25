'use strict';
require('dotenv').config();

const watson = require('watson-developer-cloud');
const fs = require('fs');
const https = require('https');
https.post = require('https-post');

const base_url = 'https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key=';

console.log(`Using api_key: ${process.env.VISUAL_API_KEY}`);

const api_key = process.env.VISUAL_API_KEY;
const end_url = '&version=2016-05-20;'
const api_endpoint = base_url + api_key + end_url;

const fileContents = fs.readFileSync('./imgs/IMG_1089.PNG');
console.log(fileContents);

var files = [
  {
    param: "images_file",
    path: "./imgs/IMG_1089.PNG"
  }
];

https.post(api_endpoint, [], files, function(res){
  res.setEncoding('utf8');
  res.on('data', function(chunk){
    console.log(chunk);
  })
});

//"https://gateway-a.watsonplatform.net/visual-recognition/api/v3/classify?api_key="2958ce5ed17bc93a3fa0bd0cfceea2a000dda82f"&version=2016-05-20"