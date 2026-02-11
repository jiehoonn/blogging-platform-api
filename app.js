// 200 OK: The standard success code for GET, PUT, or most POST requests, returning data in the response body.
// 201 Created: A new resource was successfully created as a result of a POST or PUT request. The response body usually contains a representation of the new resource.
// 202 Accepted: The request has been accepted for processing, but the processing is not yet complete. This is often used for asynchronous operations (e.g., background jobs).
// 204 No Content: The server successfully processed the request, but there is no content to return in the response body. This is common for DELETE requests or PUT requests that only update a resource's metadata. 

// 400 Bad Request: The server cannot process the request due to a client error (e.g., malformed request syntax, invalid input data, or missing required fields).
// 401 Unauthorized: Authentication is required, and the client has not provided valid credentials.
// 403 Forbidden: The client is authenticated, but does not have permission to access the requested resource.
// 404 Not Found: The requested resource could not be found on the server.
// 405 Method Not Allowed: The HTTP method used (e.g., POST, DELETE) is not supported for the specific resource URI.
// 409 Conflict: The request could not be completed due to a conflict with the current state of the resource (e.g., trying to create a duplicate entry or edit a resource that has been modified by another user).
// 422 Unprocessable Entity: The request was well-formed but contained semantic errors or validation failures (e.g., a username field was present but the username was already taken).
// 429 Too Many Requests: The client has sent too many requests in a given amount of time (rate limiting). 

// 500 Internal Server Error: A generic error message indicating an unexpected condition that prevented the server from fulfilling the request.
// 503 Service Unavailable: The server is temporarily unable to handle the request, often due to maintenance or being overloaded. The response may include a Retry-After header to suggest when the client can try again.

// Server Set up
const express = require('express');
const app = express();
const port = 3000;

// To read req.body, you need this middleware. This tells Express to parse incoming JSON bodies.
app.use(express.json());

// ===================================================
// MySQL Database Connection
// ===================================================

const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'your_password',
  database: 'blogging_platform'
});

// ===================================================
// API ENDPOINTS
// ===================================================

// Root Endpoint
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Create a Blog Post
app.post('/api/posts', (req, res) => {
  
});

// Update a Blog Post
app.put('/api/posts/:id', (req, res) => {
  
});

// Delete a Blog Post
app.delete('/api/posts/:id', (req, res) => {
  
});

// Get a Blog Post
app.get('/api/posts/:id', (req, res) => {
  
});

// Get All Blog Post
app.put('/api/posts', (req, res) => {
  
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
