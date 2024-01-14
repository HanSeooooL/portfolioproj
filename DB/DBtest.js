const SQL = require('./DB')

const req = {
    id: 2
}
const test = async () => {
    const results = await SQL.selectTest(req);
    console.log(results[0].name)
}

test();


const reuslts = SQL.selectTest.then()