const express = require("express");
const app = express();

app.get("/api", (req, res) => {
	res.send("My first API with Javascript");
});

app.listen(3000, () => {
	console.log("Server running on port 3000");
});
