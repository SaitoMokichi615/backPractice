const { render } = require("express/lib/response");
const mProduct = require('../../models/product');
const limit = 6;
const fs = require('fs').promises;

/* listProductsのコントローラ */
const cListProducts = {

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
    const numDispData =  (await mProduct.all()).length;

    // ページネーションのリンク数
    const numPagenations = Math.ceil(numDispData/limit); 

    // データ取得
    const products = await mProduct.all(limit, offset);

    // 画像の存在情報付与
    for(let i=0; i<products.length; i++){      
      try {
        let result = await fs.lstat(`./public/uploads/${products[i].imagePath}.jpg`); 
        products[i].exitImage = true;
      } 
      catch (e) {
        products[i].exitImage = false;
      }
    }

    // 結果を表示
    res.render("pages/admin/listProducts.ejs", 
      { products: products,
        currentPage: currentPage,
        numPagenations: numPagenations,
        numDispData: numDispData
      }
    );
  },
};

module.exports = cListProducts;