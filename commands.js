var fs = require('fs');
var request = require('request');
var bash = require("./bash");
​
module.exports = {
  pwd: function(file) {
    var output = this.slicer(process.cwd());
    bash.done(output);
  }, 
  date: function(input) {
    var outDate = String(new Date());
    bash.done(outDate);
  },
  slicer: function (input) {
    var arr = input.split('/');
    arr.pop();
    return arr.join('/');
  },
  // ls: function(file) {
  //   fs.readdir('.', function(err, files) {
  //     if (err) throw err;
  //     files.forEach(function(file) {
  //       process.stdout.write(file.toString() + "\n");
  //     });
  //     process.stdout.write("prompt > ");
  //   });
  // },
  ls: function(file) {
    var output = "";
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        output += file.toString() + "\n";
      });
    bash.done(output.trim());
    });
  },
  echo: function(input) {
    bash.done(input);
  },
  cat: function(file) {
    fs.readFile(file, function(err, fileContents) {
      if (err) {
        throw new Error(err);
      }
      bash.done(fileContents.toString());
    });
  },
  head: function(file) {
    fs.readFile(file, function(err, fileContents) {
      if (err) {
        throw new Error(err);
      }
      var fileContentsArray = fileContents.toString().split('\n');
      bash.done(fileContentsArray.slice(0,5).join('\n').trim());
    });
  },
  tail: function(file) {
    fs.readFile(file, function(err, fileContents) {
      if (err) {
        throw new Error(err);
      }
      var fileContentsArray = fileContents.toString().split('\n');
      bash.done(fileContentsArray.slice(-5).join('\n').trim());
    });
  },
  sort: function(file) {
    fs.readFile(file, function(err, fileContents) {
      if (err) {
        throw new Error(err);
      }
      var fileContentsArray = fileContents.toString().split('\n');
      bash.done(fileContentsArray.sort().join('\n').trim());
    });
  },
  wc: function(file) {
    fs.readFile(file, function(err, fileContents) {
      if (err) {
        throw new Error(err);
      }
      var fileContentsArray = fileContents.toString().split('\n');
      bash.done(fileContentsArray.length);
    });
  },
  uniq: function (file) {
    fs.readFile(file, function(err, fileContents) {
      if (err) {
        throw new Error(err);
      }
      var fileContentsArray = fileContents.toString().split('\n');
      var sorted = fileContentsArray.sort();
      // console.log(sorted);
      for (var i = 0; i < sorted.length; i++) {
        if (sorted[i] === sorted[i + 1]) {
          sorted.splice(i, 1);
        }
      }
      bash.done(sorted.join('\n').trim());
    });
  },
  curl: function (url) {
    request.get(url, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        bash.done(body); // Show the HTML for the Google homepage.
      }
    });
  },
  
};