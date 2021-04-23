process.stdout.write("prompt > ");
const ls = require("./ls.js");
const pwd = require("./pwd.js");

process.stdin.on("data", (data) => {
    const cmd = data.toString().trim();

    if (cmd === "pwd") {
        pwd();
    }
    if (cmd === "ls") {
        ls();
    }
    //print path here
    // process.stdout.write("You typed: " + cmd);
    // process.stdout.write("\nprompt > ");
});
