const { render } = require("express/lib/response");
const mProduct = require('../models/product');
const mColor = require('../models/colors');
const mMaterial = require('../models/materials');
const fs = require('fs').promises;

/* itemのコントローラ */
const cItem = {

  /* getリクエスト */
  async get(req, res){
    
    // クエリパラメータチェック
    if(req.query.id == null || req.query.id ==''){
      res.redirect('/');
    }

    // レコード取得
    let product = await mProduct.getRecord(req.query.id);
    let color = await mColor.getRecord(product.color);
    let material = await mMaterial.getRecord(product.material);

    // 画像の存在情報付与
    try {
      await fs.lstat(`./public/uploads/${product.imagePath}.jpg`);
      product.exitImage = true;
    } 
    catch (e) {
      product.exitImage = false;
    }

    // 結果を表示
    res.render("pages/item.ejs", 
      { product: product,
        color: color.name,
        material: material.name,
      }
    );
  },
};

module.exports = cItem;