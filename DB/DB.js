//사용할 SQL문들 코딩부
const pool = require('./config')

module.exports = {
    insertProject: async function (proj) {
        try {
            const SQL = `INSERT into Project values (?, ?, ?, ?, ?, ?)`
            const params = ['0', proj.title, proj.description, proj.start, proj.finish, proj.link]
            const connection = await pool.connection();
            await connection.query(SQL, params)
            console.log("Success insertProject!!")
            connection.release()
        } catch (e) {
            console.error(e)
            console.log('xxxxxxxxxxxxxxxxx Failed insertProject.... xxxxxxxxxxxxxxxx')
        }
    },
    deleteProject: async function (index) {
        try {
            const SQL = `delete from Project where ID=?`
            const param = Number(index)
            const connection = await pool.connection();
            await connection.query(SQL, param)
            console.log("Success deleteProject!!")
            connection.release()
        } catch (e) {
            console.error(e)
            console.log('xxxxxxxxxxxxxxxxx Failed deleteProject.... xxxxxxxxxxxxxxxxxxxxxx')
        }
    },
    updateProject: async function (params) {
        try {
            let SQL = `update Project `
            let set = `set `
            let lastkey = Object.keys(params)[Object.keys(params).length]
            for (key in params) {
                set = set + key + `=` + params[key] + `, `
            }
        } catch (e) {

        }
    }
}