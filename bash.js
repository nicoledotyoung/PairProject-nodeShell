process.stdout.write("prompt > ");

process.stdin.on("data", (data) => {
  const cmd = data.toString().trim();
  if (cmd === "pwd") {
    require("./pwd.js");
  } else if(cmd === "ls") {
    require("./ls");
  } else {
    process.stdout.write("You typed: " + cmd);
  }

  process.stdout.write("\nprompt > ");
});

// console.log('using dunder dirname: -->', __dirname);
