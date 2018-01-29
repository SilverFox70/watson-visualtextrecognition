'use strict';

const VisualTextRecognition = require('./VisualTextRecognition');
const visualTextRecognition = new VisualTextRecognition();

visualTextRecognition.findTextIn('./imgs/test_cam.png')
.then((response) => {
  console.log(`Success! \n ${JSON.stringify(response, null, 2)}`);
}).catch((err) => {
  console.error(`Failed! \n ${err}`);
});