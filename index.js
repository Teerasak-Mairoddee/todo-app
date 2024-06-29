// Require the express module
var express = require('express');

// Initialize the app
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// The task array with initial placeholders for added tasks
var task = ["Find Seiko cases", "Print more minatures"];

// The complete array to store completed tasks
var complete = ["29/06/2024, 02:26:14 | Become Elden Lord"];

// Post route for adding a new task
app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask.trim();
    if (newTask) {
        task.push(newTask);
    }
    res.redirect("/");
});

// Post route for marking tasks as complete
app.use(bodyParser.json());
app.post("/removetask", function (req, res) {
    var completeTask = req.body.check;
    if (completeTask) {
        console.log("complete task: " + completeTask);
        if (typeof completeTask === "string") {
            let currentTime = new Date().toLocaleString();
            complete.push(currentTime + " | " + completeTask);
            console.log("push completeTask: " + completeTask);
            task.splice(task.indexOf(completeTask), 1);
            console.log("complete array upper: " + complete);
        } else if (Array.isArray(completeTask)) {
            completeTask.forEach(function (taskName) {
                let currentTime = new Date().toLocaleString();
                complete.push(currentTime +" | "+taskName);
                task.splice(task.indexOf(taskName), 1);
                console.log("complete array lower: " + complete);
            });
        }
    }
    res.redirect("/");
});

app.post('/deletecompleted', function (req, res) {
    const taskToDelete = req.body.task;
    console.log("Task to delete:", taskToDelete);

    // Find the index of the task in the complete array
    const index = complete.indexOf(taskToDelete);
    if (index > -1) {
        // Remove the task from the complete array
        complete.splice(index, 1);
        console.log("Task deleted successfully");
        res.json({ success: true });
        console.log("index.js complete array: " + complete);
    } else {
        console.log("Task not found in complete array");
        res.json({ success: false });
    }
});

app.get('/getCompleteTasks', function (req, res) {
    // Send the updated complete array as JSON response
    res.json({ complete: complete });
});


// Render the ejs and display added tasks and completed tasks
app.get("/", function (req, res) {
    res.render("index", { task: task, complete: complete });
});

// The server is listening on port 3000 for connections
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

// Set the view engine to ejs
app.set('view engine', 'ejs');
