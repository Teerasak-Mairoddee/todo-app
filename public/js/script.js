document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', function () {
            const taskToDelete = this.getAttribute('data-task');
            console.log("Delete button pressed script.js");

            if (taskToDelete) {
                console.log("Task to delete:", taskToDelete);

                // Send a request to the server to delete the task
                fetch('/deletecompleted', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ task: taskToDelete })
                })
                    .then(response => response.json())
                    .then(data => {
                        console.log("Delete response:", data);
                        if (data.success) {
                            // Remove the task from the UI
                            this.parentElement.remove(); // Remove li element
                        } else {
                            console.log("Delete operation not successful");
                        }
                    })
                    .catch(error => console.error('Error deleting task:', error));
            } else {
                console.error('Task to delete is undefined');
            }
        });
    });

    // Event listener for the Email Completed Tasks button (if needed)
    document.getElementById('email-button').addEventListener('click', function () {
        console.log("Email button pressed script.js");

        // Fetch request to get updated complete array
        fetch('/getCompleteTasks')
            .then(response => response.json())
            .then(data => {
                console.log("Updated Complete tasks:", data.complete);
            })
            .catch(error => console.error('Error fetching complete tasks:', error));
    });

});
