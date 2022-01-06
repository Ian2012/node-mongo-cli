const {program} = require('commander')
const {prompt} = require('inquirer')
const {addTask, listTask, removeTask, updateTask, findTask} = require('./controllers/task.controller')

const taskQuestions = [{
    type: 'input', message: 'Task title', name: 'title'
}, {
    type: 'input', message: 'Task description', name: 'description'
}]

program.version('0.0.1').description('A command line tool for managing task')

program
    .command('save')
    .action(async () => addTask(await prompt(taskQuestions)))
    .alias('s')

program
    .command('list')
    .action(() => listTask())
    .alias('l')

program
    .command('delete <id>')
    .action((_id) => removeTask(_id))
    .alias('d')

program
    .command('update <id>')
    .action(async (_id) => updateTask(_id, await prompt(taskQuestions)))
    .alias('u')

program
    .command('find <query>')
    .action(async (query) => findTask(query))
    .alias('u')

program.parse(process.argv)

