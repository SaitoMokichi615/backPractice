const executeQuery = require('./executeQuery');
const table = 'product';
const isDisp = 1;

/* Productモデル */
const mProduct = {

  /* 全データ取得 */
  async all(limit, offset){
    let query = `SELECT * FROM ${table}`;
    
    // 取得上限の指定
    if(limit){
      query += ` LIMIT ${limit}`;
    }
    
    // 取得開始位置の指定
    if(offset){
      query += ` OFFSET ${offset}`;
    }

    const result = await executeQuery(query);
    return result;
  },

  /* 表示データ取得 */
  async getDispData(limit, offset, keywords){
    let query = `SELECT * FROM ${table} WHERE flgDisp = ${isDisp}`;
    
    // 取得上限の指定
    if(limit){
      query += ` LIMIT ${limit}`;
    }
    
    // 取得開始位置の指定
    if(offset){
      query += ` OFFSET ${offset}`;
    }

    // 検索キーワードの指定
    if(keywords){
      query += ` LIKE %${keywords}%`;
    }

    // クエリを実行し結果を返す
    const result = await executeQuery(query);
    return result;
  },

  /* 指定したレコードを1件取得 */
  async getRecord(id){
    const query = `SELECT * FROM ${table} WHERE id = ${id} AND flgDisp = ${isDisp}`;
    const result = await executeQuery(query);
    return result[0];
  }
};

module.exports = mProduct;