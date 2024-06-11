const noteModel = require("../models/noteModel");

class NoteController {
  async getAll(req, res) {
    try {
      const notes = await noteModel.getAllNotes();

      res.json(notes);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getById(req, res) {
    const id = req.params.id

    try {
      const notes = await noteModel.getNoteById(id);

      res.json(notes);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async add(req, res) {
    const {title, content} = req.body;

    try {
      const newNote = await noteModel.addNote(title, content);

      res.status(201).json(newNote);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new NoteController();