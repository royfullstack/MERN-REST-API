const express = require("express");
const app = express();
app.use(express.json());

const notes = [];

// post/notes
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(200).json({
    message: "notes created successfully",
  });
});

// get/get
app.get("/notes", (req, res) => {
  res.status(201).json({
    message: "note fatched successfully",
    notes: notes,
  });
});

// delete/notes/9
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;

  delete notes[index];

  res.status(200).json({
    message: "note deleted successfully",
  });
});

// patch/notes

app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;

  const description = req.body.description;
  notes[index].description = description;
  res.status(200).json({
    message: "note updated successfully",
  });
});

module.exports = app;
