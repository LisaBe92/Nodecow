import "dotenv/config"
import * as cowsay from "cowsay"

let output = cowsay.say({ text: `I am ${process.env.NAME}, wilder in ${process.env.CAMPUS}`});

console.log(output);