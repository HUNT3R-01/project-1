require("dotenv").config();
const {ImageKit} = require("@imagekit/nodejs");

const imageKit = new ImageKit({
  publicKey: "public_O/U5hfVJ6Oz3/mUsDNoOj/Q9ZrE=",
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: "https://ik.imagekit.io/tmvhgfxbl6"

});

async function uploadFile(buffer) {

  const result = await imageKit.files.upload({
  file: buffer.toString("base64"),
  fileName: "image.jpeg"
})

  return result;
}
console.log("ENV TEST:", process.env.IMAGEKIT_PRIVATE_KEY);

module.exports = uploadFile; 


