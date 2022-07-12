const { render } = require("express/lib/response");

/* aboutのコントローラ */
const cAbout = {

  /* getリクエスト */
  get(req, res){
    res.render("pages/about.ejs");
  },
};

module.exports = cAbout;