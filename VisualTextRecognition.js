'use strict';
require('dotenv').config();
const watson = require('watson-developer-cloud');
const fs = require('fs');

console.log(`Using api_key: ${process.env.VISUAL_API_KEY}`);
const visual_recognition = watson.visual_recognition({
  api_key: process.env.VISUAL_API_KEY,
  version: 'v3',
  version_date: '2016-05-20'
});

class VisualTextRecognition {
  constructor() {
    this.data = {};
  }

  findTextIn(file_name){
    // For production, this should throw an error if no file name is given
    var params = {
      images_file: fs.createReadStream(file_name) || fs.createReadStream('imgs/IMG_1089.PNG'),
      parameters: {}
    };

    visual_recognition.recognize_text(params, function(err, response){
      if (err){
        console.log(err);
        return err
      } else {
        console.log(JSON.stringify(response, null, 2))
        return response;
      }
    });
  }
}

module.exports = VisualTextRecognition;



