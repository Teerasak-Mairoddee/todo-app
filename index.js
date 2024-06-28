// Require the express module
var express = require('express');

// Initialize the app
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the "public" directory
app.use(express.static('public'));

// The task array with initial placeholders for added tasks
var task = ["buy socks", "practice with nodejs"];

// The complete array to store completed tasks
var complete = ["finish jquery"];

// Post route for adding new task
app.post('/addtask', function (req, res) {
    var newTask = req.body.newtask;
    // Add the new task from the post route into the array
    task.push(newTask);
    // After adding to the array, go back to the root route
    res.redirect("/");
});

// Post route for removing a task
app.post("/removetask", function (req, res) {
    var completeTask = req.body.check;
    // Check for the "typeof" the different completed task, then add into the complete task
    if (typeof completeTask === "string") {
        complete.push(completeTask);
        // Check if the completed task already exists in the task when checked, then remove using the array splice method
        task.splice(task.indexOf(completeTask), 1);
    } else if (typeof completeTask === "object") {
        for (var i = 0; i < completeTask.length; i++) {
            complete.push(completeTask[i]);
            task.splice(task.indexOf(completeTask[i]), 1);
        }
    }
    res.redirect("/");
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
