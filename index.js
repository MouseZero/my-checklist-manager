const fs = require('fs')
const path = require('path')
const stream = require('stream')

const todoPath = process.argv[2]
const todoArchiveFolderPath = process.argv[3]
const newPath = todoArchiveFolderPath + path.sep + path.basename(todoPath)

const todoStream = fs.createReadStream(todoPath)
const newTodoStream = fs.createWriteStream(newPath)
todoStream.pipe(newTodoStream)




/*
/home/logic/Code/checklist/todo
/home/logic/Code/checklist/todos

node index.js /home/logic/Code/checklist/todo /home/logic/Code/checklist/todos

*/
