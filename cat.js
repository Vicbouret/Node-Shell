const fs = require("fs");

module.exports = (name, done) => {
    fs.readFile(name, "utf-8", (err, data) => {
        if (err) done("Something went wrong");
        done(data);
    });
};
