const multer = require('multer');
const fs = require('fs');

/* ファイル保存設定 */
const storage = multer.diskStorage({

  // ファイル保存先
  destination: (req, file, cb) => {
    cb(null, './public/uploads')
  },

  // ファイル名
  filename: (req, file, cb) => {
    let fileNum = fs.readFileSync('./utils/fileNum.csv');
    let num = parseInt(fileNum, 10);
    num = num + 1;
    cb(null, `image${num}.jpg`);
    fileNum = num.toString();
    fs.writeFileSync('./utils/fileNum.csv', fileNum);
  }
});
const upload = multer({storage: storage});

module.exports = upload;