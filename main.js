'use strict';

const VisualTextRecognition = require('./VisualTextRecognition');
const visualTextRecognition = new VisualTextRecognition();

visualTextRecognition.findTextIn('./imgs/lots-of-words.png')
.then((response) => {
  console.log('Success! from [main]:\n' + JSON.stringify(response, null, 2));
}).catch((err) => {
  console.error('Failed! from [main]:\n' + err);
});
