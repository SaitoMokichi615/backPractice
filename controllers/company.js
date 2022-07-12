const { render } = require("express/lib/response");

/* companyのコントローラ */
const cCompany = {

  /* getリクエスト */
  get(req, res){
    res.render("pages/company.ejs");
  },
};

module.exports = cCompany;