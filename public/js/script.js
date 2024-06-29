document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.delete-button').forEach(button => {
        button.addEventListener('click', function () {
            const taskToDelete = this.getAttribute('data-task');
            console.log("delete button pressed script.js");
            
            if (taskToDelete) {
                console.log("taskToDelete script.js: " + taskToDelete);
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
                        console.log("script.js data:", JSON.stringify(data));
                        if (data.success) {
                            this.parentElement.remove(); // Remove from UI
                        } else {
                            console.log("script.js data not successful");
                        }
                    })
                    .catch(error => console.error('Error:', error));
            } else {
                console.error('Task to delete is undefined');
            }
        });
    });
});