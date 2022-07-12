const mysql = require('mysql2/promise');

/* DB接続設定 */
const config = {
  host: process.env.HOST_NAME,
  port: process.env.PORT_NO,
  user: process.env.USER_NAME,
  password: process.env.PASS_WORD,
  database: process.env.DB_NAME,
};

/* クエリを実行し結果を返す */
const executeQuery = async (query, values = []) => {
  try{
    const conn = await mysql.createConnection(config);
    const [rows, fields] = await conn.execute(query, values);
    conn.end();
    return rows;
  }
  catch(err){
    console.log(`DBエラー:${err}`);
  }
}

module.exports = executeQuery;
