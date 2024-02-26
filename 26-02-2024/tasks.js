const express = require("express");

const router = express.Router();
router.use(express.json());

const { getTasks, writeTasks } = require('./fileHandling');


// to access all tasks

router.get("/", (req, res) => {
    const tasks = getTasks();
    res.json(tasks);
}),

    // to access tasks with id


    router.get("/:id", (req, res) => {
        const id = parseInt(req.params.id);
        const tasks = getTasks();
        console.log(tasks[id]);
        const task = tasks.find((task) => task.id === id);
        if (!task) { return res.status(404).json("task not found") }
        else {
            res.json(task)
        }
    });

// to delete a task 

router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const tasks = getTasks();
    const index = tasks.findIndex((task) => task.id === id);
    if (index < 0) {
        return res.status(400).json("No Task Found With Given Id")
    };
    tasks.splice(index, 1);
    writeTasks(tasks);
    res.json("task  deleted successfully");

});

// to add new task

router.post("/", (req, res) => {
    const newTask = req.body;
    console.log(newTask);
    if (!newTask.title || !newTask.description) {
        return res.status(400).json("please provide title and description")
    };
    const tasks = getTasks();

    tasks.push({ ...newTask, id: tasks.length + 1 });            // adding newTask object into  the array of tasks by using spread operator ...
    console.log(tasks);
    writeTasks(tasks);
    res.json(newTask);

});


// to  update the existing task

router.patch("/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const update = req.body;
    const tasks = getTasks();
    const index = tasks.findIndex((task) => task.id === id);
    if (index < 0) {
        return res.status(400).json("Invalid ID")
    }
    const task = tasks[index];
    if (update.completed !== undefined) {task.completed = update.completed};
    writeTasks( tasks);
    res.json(task);
});


// to

router.put('/:id',(req,res) => {
    const id=parseInt(req.params.id);
    const update = req.body;
    const tasks = getTasks();
    const  task = tasks.find((task)=> task.id===id);
    if(!task){return res.status(400).json('The user is not found')}
    for(const changes in update) {
       task[changes] = update [changes]
   }
   writeTasks(tasks);
   res.send(task)

})

module.exports = router;