//사용할 SQL문들 코딩부
const pool = require('./config')

module.exports = {
    selectTest: async function (req) {
        const Id = Number(req.id)

        const sqlSelect = `SELECT name FROM test WHERE id=?`

        const connection = await pool.connection();
        const [results] = await connection.query(sqlSelect, Id);
        console.log(results)
        connection.release()
        console.log("빠져나갑니다.")
        return results

    }
}