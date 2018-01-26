'use strict';

const VisualTextRecognition = require('./VisualTextRecognition');
const visualTextRecognition = new VisualTextRecognition();

visualTextRecognition.findTextIn('./imgs/lots-of-words.png');
