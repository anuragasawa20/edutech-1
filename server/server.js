require('./config/db');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, './dist')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Import Router
const courseRouter = require("./routes/courseRoutes");
const userRouter = require("./routes/userRoutes");

// Routes
app.get('/api', (req, res) => {
  const htmlResponse = `
    <html>
      <body>
        <h1>Welcome to EduTech</h1>
        <p>Chick <a href="https://www.edutech.com">here</a> to visit EduTech.com.</p>
      </body>
    </html>
  `;
  res.send(htmlResponse);
});
app.use("/api/course", courseRouter);
app.use("/api/user", userRouter);

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './dist/index.html'));
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});