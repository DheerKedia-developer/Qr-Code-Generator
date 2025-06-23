
import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
        message : "Please type in the URL : " , 
        name : "URL" // this will be the key in the response object
    }
  ])
  .then((answers) => {
    const url = answers.URL; // asnwers.(name) // Extracts the URL entered by the user.
    var qr_svg = qr.image(url, { type: "png"});
    qr_svg.pipe(fs.createWriteStream("QR.png"));
    console.log("QR generated for the URL provided !");
    fs.writeFile("URL.txt" , url , (err) => {
        if (err) throw err;
        console.log("URL saved in a file !");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });