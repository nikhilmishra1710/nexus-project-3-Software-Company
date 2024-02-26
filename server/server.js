const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const DB = require("./Database/db");
const handleFeedback = require("./Handlers/HandleFeedback");
const cors = require("cors");
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../client/build')));

app.post("/api/submit", handleFeedback);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

DB();
app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
