const { insertProject, deleteProject } = require("./DB")

let data = {
    title:'테스트',
    description:'테스트 설명',
    start:'2024-01-15',
    finish:'2024-01-15',
    link:'Link'
}

function printAll(data) {
    for (dat in data) {
        console.log(data[dat])
    }
}

deleteProject('1')