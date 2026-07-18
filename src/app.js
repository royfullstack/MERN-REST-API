const express = require("express");
const app = express();
app.use(express.json());

const notes = [];

// post/notes
app.post("/notes", (reg, res) => {
  notes.push(reg.body);

  res.status(200).json({
    message: "notes created successfully",
  });
});

// get/get
app.get("/notes", (reg, res) => {
  res.status(201).json({
    message: "note fatched successfully",
    notes: notes,
  });
});

// delete/notes/9
app.delete("/notes/:index", (reg, res) => {
  const index = reg.params.index;

  delete notes[index];

  res.status(200).json({
    message: "note deleted successfully",
  });
});

// patch/notes

app.patch("/notes/:index", (reg, res) => {
  const index = reg.params.index;

  const description = reg.body.description;
  notes[index].description = description;
  res.status(200).json({
    message: "note updated successfully",
  });
});

module.exports = app;
