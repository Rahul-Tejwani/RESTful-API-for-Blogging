About the Project:
-> This project showcases a robust RESTful API integrated with a MongoDB database, enabling the creation, updation, and deletion of blog posts. Designed for flexibility, it can be effortlessly integrated with any external server.
-> The API supports GET, POST, PATCH, and DELETE HTTP methods and will be able to handle and respond to the variety of requests coming from the external servers.
-> This project is built using HTML, CSS, Javascript, Node, Express, EJS and MongoDB. The project also contains Frontend and an external server for testing all the requests to the API end-to-end.
-> The project contains two server files with the name 'server.js' and the 'index.js'.
-> The 'index.js' contains the code for the RESTful API, responsible for managing the API requests and database interactions, ensuring efficient API request handling and updation of data.
-> The file 'server.js' functions as a backend server on Port - 3000 for the frontend for sending the API requests to the file 'index.js'.

Steps to test the Blogging API:
-> Download all project files to your local system and navigate to the project directory in the terminal.
-> In the terminal, run the command 'npm i' to install all the node dependencies of the project.
-> After installing node dependencies, run the command 'nodemon index.js' to start the API server on Port 4000.
-> To send the API requests, open another terminal in parallel and navigate to the project directory and run the command 'nodemon server.js' to start the external server for API testing.
-> Open the link 'http://localhost:3000' in your web browser to view the frontend created for testing the API.
-> The frontend displays all the existing blog posts, using the GET route.
-> Click on the 'New Post' button to create a new blog by sending the POST request to the API.
-> Click on the 'Edit' and 'DELETE' buttons to modify/delete the respective blog by sending the PATCH or DELETE request to the API respectively.
