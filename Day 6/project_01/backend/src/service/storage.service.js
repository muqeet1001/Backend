var ImageKit = require("imagekit");

var imagekit = new ImageKit({
  publicKey: "public_aXcuR+y+Va3/mN5ii3YzSPRBQmU=",
  privateKey: "private_BrME5k+K00Myc4rDniXeSUzBArE=",
  urlEndpoint: "https://ik.imagekit.io/kah4dcfsb",
});

function uploadFile(file) {
  return new Promise((res, rej) => {
    imagekit.upload(
      {
        file: file.buffer,
        fileName: "happy_song",
      },
      (error, result) => {
        if (error) {
          rej(error);
        } else {
          res(result);
        }
      }
    );
  });
}

module.exports = uploadFile;
