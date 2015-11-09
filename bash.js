var commands = require("./commands");

process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {
  var cmd = data.toString().trim(); // remove the newline
  var func1 = cmd
  if (cmd.indexOf('|')) {
    var cmdList = cmd.split(/\s*\|\s*/g);
    console.log('will this work');
    console.log(cmdList);
  } else {
    var args = cmd.split(" ");
    var argForFunction = args[0];
    var commandLineArguments = args.slice(1).join(" ");
    commands[argForFunction](null, commandLineArguments);
  }
});
// var done = function(output) {
//   process.stdout.write(output + '\n');
//   process.stdout.write("prompt > ");
// };
// var argumentsParser (cmdList) {
//   var argsArray = cmdList[0].split(' ');
//   var firstFunc = argsArray[0];
//   var file = argsArray[1];
//   var secondFunc = cmdList[1];
//   // var nextInput = commands[func1](file);
//   commands[firstFunc](secondFunc, file);
// }
module.exports.done = done;