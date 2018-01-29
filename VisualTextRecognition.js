'use strict';

const watson = require('watson-developer-cloud');
const fs = require('fs');

/** Class for sending images to Visual Recognition of text API */
class VisualTextRecognition {
  constructor(credentials) {
    this.visual_recognition = watson.visual_recognition(credentials);
    this.data = {};
  }

  findTextIn(file_name){
    try {
      // Fail out as quickly as possible if we don't have a filename
      if (typeof file_name === 'undefined' || file_name.length === 0) {
        throw new ReferenceError('A file must be specified to perform this operation.', 'VisualTextRecognition.js', '12');
      }

      return new Promise((resolve, reject) => {
        var params = {
          images_file: fs.createReadStream(file_name) || fs.createReadStream('imgs/IMG_1089.PNG'),
          parameters: {}
        };
        
        console.log(`[VisualTextRecognition.findTextIn] Sending ${file_name} for analysis @ ${Date.now()}`)
        this.visual_recognition.recognize_text(params, function(err, response){
          
          if (err){ 
            console.log(`[VisualTextRecoginition.findTextIn] failed @ ${Date.now()}`);
            reject(err)
          } else {
            console.log(`[VisualTextRecoginition.findTextIn] succeeded @ ${Date.now()}`);
            resolve(response);
          }
        }); 
      });

    } catch(err) {
      console.log(err);
      return Promise.reject(err);
    }
  }
}

module.exports = VisualTextRecognition;



