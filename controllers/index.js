const { render } = require("express/lib/response");
const mProduct = require('../models/product');
const limit = 8;
const fs = require('fs').promises;

/* indexのコントローラ */
const cIndex = {

  /* getリクエスト */
  async get(req, res){

    // レコード取得
    const result = await mProduct.getDispData(limit);

    // 画像の存在情報付与
    for(let i=0; i<result.length; i++){      
      try {
        await fs.lstat(`./public/uploads/${result[i].imagePath}.jpg`);
        result[i].exitImage = true;
      } 
      catch (e) {
        result[i].exitImage = false;
      }
    }

    // 結果を表示
    res.render("pages/index.ejs", {products: result});
  },
};

module.exports = cIndex;