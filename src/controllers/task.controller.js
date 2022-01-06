const Task = require('../models/Task')
const {connection} = require('../db')

const addTask = async (task) => {
    await Task.create(task)
    console.log('New Task Created')
    await connection.close()
}

const listTask = async () => {
    const tasks = await Task.find().lean()
    console.table(tasks.map(task => ({
        _id: task._id.toString(), title: task.title, description: task.description
    })))
    await connection.close()
    process.exit(0)
}

const removeTask = async (id) => {
    await Task.findByIdAndDelete(id)
    console.log('Task deleted')
    await connection.close()
}

const updateTask = async (id, newTask) => {
    newTask = Object.fromEntries(Object.entries(newTask).filter(([_, v]) => v !== ''));
    await Task.updateOne({id}, newTask)
    console.log('Task updated')
    await connection.close()
}

module.exports = {
    addTask, listTask, removeTask, updateTask
}
