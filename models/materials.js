const executeQuery = require('./executeQuery');
const table = 'material';

/* Materialモデル */
const mMaterial = {

  /* 全データ取得 */
  async all(){
    const query = `SELECT * FROM ${table}`;
    const result = await executeQuery(query);
    return result;
  },

  /* 指定したレコードを1件取得 */
  async getRecord(id){
    const query = `SELECT * FROM ${table} WHERE id = ${id}`;
    const result = await executeQuery(query);
    return result[0];
  }
};

module.exports = mMaterial;