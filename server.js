const express = require("express");
const app = express();
const path = require("path");

// Serve static files from public folder
app.use(express.static("public"));

// Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// IMPORTANT: Use Render's PORT
const PORT = process.env.PORT || 3000;

// Start server
app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
