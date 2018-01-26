# Watson Activations Visual Text Recognition

_Node 8.0_

## Overview
Currently, this is just a test ground for accessing the **recognize text** function of the VisualRecognition API offered by Watson. In order to get the Node Watson SDK to work, you will need to insert the following code at line 103 of *node_modules/watson-developer-cloud/visual-recognition/v3-generated.js*. 
``` Javascript
/*************************
     * recognize_text
     ************************/
    /**
     * Recognize text in images.
     *
     * This accesses the beta-only release of the recognize text function.  It is unknown how changing other parameters will effect this.
     *
     * @param {Object} [params] - The parameters to send to the service.
     * @param {ReadableStream|FileObject|Buffer} [params.images_file] - An image file (.jpg, .png) or .zip file with images. Include no more than 20 images and limit the .zip file to 5 MB. You can also include images with the `url` property in the **parameters** object.
     * @param {string} [params.parameters] - Specifies input parameters. The parameter can include these inputs in a JSON object:  - url: A string with the image URL to analyze. You can also include images in the **images_file** parameter. - classifier_ids: An array of classifier IDs to classify the images against. - owners: An array with the values IBM, me, or both to specify which classifiers to run. - threshold: A floating point value that specifies the minimum score a class must have to be displayed in the response.  For example: {"url": "...", "classifier_ids": ["...","..."], "owners": ["IBM", "me"], "threshold": 0.4}.
     * @param {string} [params.accept_language] - Specifies the language of the output class names.  Can be `en` (English), `ar` (Arabic), `de` (German), `es` (Spanish), `it` (Italian), `ja` (Japanese), or `ko` (Korean).  Classes for which no translation is available are omitted.  The response might not be in the specified language under these conditions: - English is returned when the requested language is not supported. - Classes are not returned when there is no translation for them. - Custom classifiers returned with this method return tags in the language of the custom classifier.
     * @param {string} [params.images_file_content_type] - The content type of images_file.
     * @param {Function} [callback] - The callback that handles the response.
     * @returns {ReadableStream|void}
     */
    VisualRecognitionV3.prototype.recognize_text = function (params, callback) {
        var _params = typeof params === 'function' && !callback ? {} : extend({}, params);
        var _callback = typeof params === 'function' && !callback
            ? params
            : callback ? callback : function () { };
        var formData = {
            images_file: {
                data: _params.images_file,
                contentType: _params.images_file_content_type
            },
            parameters: _params.parameters
        };
        var parameters = {
            options: {
                url: '/v3/recognize_text',
                method: 'POST',
                formData: formData
            },
            defaultOptions: extend(true, {}, this._options, {
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'Accept-Language': _params.accept_language
                }
            })
        };
        return requestwrapper_1.createRequest(parameters, _callback);
    };
```

This adds the functionality to find text within images. The following is an example call:
``` Javascript
var params = {
  images_file: fs.createReadStream('imgs/IMG_1089.PNG'),
  parameters: {}
};

visual_recognition.recognize_text(params, function(err, response){
  if (err)
    console.log(err);
  else
    console.log(JSON.stringify(response, null, 2))
});
```

## Getting Up and Running
Clone this repo, run **npm install** and then follow the instructions above to add the necessary code. Once that is complete, you can try it out:
```
npm run main
```