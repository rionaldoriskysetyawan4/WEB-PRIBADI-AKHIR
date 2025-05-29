const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

const PORT = process.env.PORT || 5000;



// Serve static React files
app.use(express.static(path.join(__dirname, '../client/build')));

// API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node.js!' });
});

// Catch-all route: serve React index.html
app.get('/:path(*)', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
