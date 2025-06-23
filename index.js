
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
    var qr_svg = qr.image(url, { type: "png"}); // generates QR image as a .png file
    qr_svg.pipe(fs.createWriteStream("QR.png")); // create .png file
    console.log("QR generated for the URL provided !");
    fs.writeFile("URL.txt" , url , (err) => { // this will create a .txt file to store the URL entered by the user
        if (err) throw err;
        console.log("URL saved in a file !");
    });
  })
