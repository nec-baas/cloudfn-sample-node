'use strict';

const fs = require('fs');

exports.image1 = function (event, context) {
    fs.readFile(__dirname + '/image1.jpg', (err, data) => {
        if (err) {
            context.fail(err);
        } else {
            context.succeed(data, "image/jpeg");
        }
    });
};

