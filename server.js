const express = require("express");
const app = express();

app.use(express.static("./"));

app.listen(300, () => console.log("Server listening on port 3000"));
