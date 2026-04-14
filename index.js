const express = require('express');
const app = express();

app.use(express.json());

// GET /
app.get('/', (req, res) => {
  res.status(200).json({ message: "API is running" });
});

// GET /health
app.get('/health', (req, res) => {
  res.status(200).json({ message: "healthy" });
});

// GET /me
app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Abdullateef Dauda",
    email: "abdullateefdauda01@gmail.com",
    github: "https://github.com/abdul-o"
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
