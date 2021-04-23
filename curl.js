const request = require("request");

module.exports = (link, done) => {
    request(link, function (error, response, body) {
        done("something went"); // Print the error if one occurred
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        done(`body: ${body}`);
    });
};
