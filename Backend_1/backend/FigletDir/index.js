const figlet = require("figlet"); //no need to write ./ when using packages

//copy paste code from npmjs.com/package/figlet
figlet("Sarada Nair", function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
