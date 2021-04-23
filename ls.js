const fs = require("fs");

module.exports = (done) => {
    // const fs = require("fs");
    fs.readdir("./", "utf8", (err, files) => {
        if (err) {
            done('something went wrong');
        } else {
            done(files.join("\n"));
            
        }
    });
};
