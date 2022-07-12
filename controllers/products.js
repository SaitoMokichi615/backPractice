const { render } = require("express/lib/response");
const mProduct = require('../models/product');
const limit = 12;
const fs = require('fs').promises;

/* prodoctsのコントローラ */
const cProducts = {

  /* getリクエスト */
  async get(req, res){

    // 現ページ番号取得
    let currentPage = 1;
    if(req.query.page){
      currentPage = req.query.page;
    }

    // レコード取得開始位置
    const offset = (currentPage-1) * limit;

    // 表示データ総数
    const numDispData =  (await mProduct.getDispData()).length;

    // ページネーションのリンク数
    const numPagenations = Math.ceil(numDispData/limit); 

    // データ取得
    let products = null;

    // データ取得（検索キーワードあり）
    if(req.query.keywords != null && req.query.keywords != ""){
      products = await mProduct.getDispData(limit, offset, req.query.keywords);
    }
    // データ取得（検索キーワード無し）
    else{
      products = await mProduct.getDispData(limit, offset);
    }

    // 画像の存在情報付与
    for(let i=0; i<products.length; i++){      
      try {
        await fs.lstat(`./public/uploads/${products[i].imagePath}.jpg`);
        products[i].exitImage = true;
      } 
      catch (e) {
        products[i].exitImage = false;
      }
    }

    // 結果を表示
    res.render("pages/products.ejs", 
      { products: products,
        currentPage: currentPage,
        numPagenations: numPagenations,
        numDispData: numDispData
      }
    );
  },
};

module.exports = cProducts;