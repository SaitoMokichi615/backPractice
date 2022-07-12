let express = require('express');

require('dotenv').config();
let router = express.Router();
const upload = require('../utils/upload');
const cIndex = require('../controllers/index');
const cAbout = require('../controllers/about');
const cCompany = require('../controllers/company');
const cProducts = require('../controllers/products');
const cItem = require('../controllers/item');
const cAdFileUpload = require('../controllers/admin/fileUpload');
const cAdListProducts = require('../controllers/admin/listProducts');
const cAdEditProduct = require('../controllers/admin/editProduct');


/*============================
表画面側
=============================*/
/* indexページのgetリクエスト時の処理 */
router.get('/', cIndex.get);

/* aboutページのgetリクエスト時の処理 */
router.get('/about', cAbout.get);

/* companyページのgetリクエスト時の処理 */
router.get('/company', cCompany.get);

/* productsページのgetリクエスト時の処理 */
router.get('/products', cProducts.get);

/* itemページのgetリクエスト時の処理 */
router.get('/item', cItem.get);


/*============================
管理画面側
=============================*/
/* admin/fileUploadのgetリクエスト時の処理 */
router.get('/admin/fileUpload', cAdFileUpload.get);

/* admin/fileUploadのgetリクエスト時の処理 */
// 第二引数パラメータの括弧には、
// fileUpload.ejsにあるファイルアップローダーのname属性をパラメータを指定
router.post('/admin/fileUpload', upload.single('file'), cAdFileUpload.post);

/* admin/listProductsのgetリクエスト時の処理 */
router.get('/admin/listProducts', cAdListProducts.get);

/* admin/editProductsのgetリクエスト時の処理 */
router.get('/admin/editProduct', cAdEditProduct.get);

module.exports = router;
