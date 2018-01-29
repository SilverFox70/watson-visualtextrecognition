'use strict';

require('dotenv').config();
const credentials = {
  api_key: process.env.VISUAL_API_KEY,
  version: 'v3',
  version_date: '2016-05-20'
};

const VisualTextRecognition = require('./VisualTextRecognition');
const visualTextRecognition = new VisualTextRecognition(credentials);

visualTextRecognition.findTextIn('./imgs/lots-of-words.png')
.then((response) => {
  console.log(`Success! \n ${JSON.stringify(response, null, 2)}`);
}).catch((err) => {
  console.error(`Failed! \n ${err}`);
});