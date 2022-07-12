const { render } = require("express/lib/response");

/* editProductsのコントローラ */
const cEditProducts = {

  /* getリクエスト */
  get(req, res){
    res.render("pages/admin/editProduct.ejs");
  },
};

module.exports = cEditProducts;