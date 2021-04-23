process.stdout.write("prompt > ");
const ls = require("./ls.js");
const pwd = require("./pwd.js");
const cat = require("./cat.js");
const curl = require("./curl.js");
process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();

    if (cmd === "pwd") {
        pwd(done);
    }
    if (cmd === "ls") {
        ls(done);
    }

    if (cmd.split(" ")[0] === "cat") {
        cat(cmd.split(" ")[1], done);
    }
    if (cmd.split(" ")[0] === "curl") {
        curl(cmd.split(" ")[1], done);
    }

    // can use split(" ")[1] to also get the file name

    //print path here
    // process.stdout.write("You typed: " + cmd);
    // process.stdout.write("\nprompt > ");
});

const done = (output) => {
    //show output
    //show prompt
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");
};
