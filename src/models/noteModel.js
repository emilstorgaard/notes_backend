const db = require('../utils/db');

class NoteModel {
  async getAllNotes() {
    try {
      const query = `
        SELECT *
        FROM note;
      `;
      const [rows] = await db.query(query);
      return rows;
    } catch (error) {
      console.error('Error in getAllNotes:', error);
      throw error;
    }
  }

  async getNoteById(id) {
    try {
      const query = `
        SELECT *
        FROM note
        WHERE id = ?;
      `;
      const [rows] = await db.query(query, [id]);
      return rows[0];
    } catch (error) {
      console.error('Error in getNoteById:', error);
      throw error;
    }
  }

  async addNote(title, content) {
    try {
      const query = `
        INSERT INTO note (title, content)
        VALUES (?, ?)
      `;
      const [result] = await db.query(query, [title, content]);
      const insertedId = result.insertId;
      const newNote = await this.getNoteById(insertedId);
      return newNote;
    } catch (error) {
      console.error('Error in getNoteById:', error);
      throw error;
    }
  }
}

module.exports = new NoteModel();