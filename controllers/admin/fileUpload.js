const { render } = require("express/lib/response");

/* fileUploadのコントローラ */
const cFileUpload = {

  /* getリクエスト */
  get(req, res){
    res.render("pages/admin/fileUpload.ejs", 
      {complete: false, errMsg: ''}
    );
  },

  /* postリクエスト */
  post(req, res){
    console.log(req.file);
    if(req.file){
      res.render("pages/admin/fileUpload.ejs", 
        {complete: true, errMsg: ''}
      );
    }
    else{
      res.render("pages/admin/fileUpload.ejs", 
        {complete: false, errMsg: 'ファイルを選択してください。'}
      );
    }
  }
};

module.exports = cFileUpload;