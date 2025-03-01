import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js"
import { loadState, saveState } from "../utils/Store.js";

class NotesService {

  deleteActiveNote() {
    const note = AppState.notes
    const noteIndex = note.findIndex(note => note.id == AppState.activeNote.id)
    note.splice(noteIndex, 1)
    AppState.activeNote = null

    this.saveStateNotes()
  }


  updateNoteBody(bodyFromTextArea) {
    const note = AppState.activeNote
    note.body = bodyFromTextArea
    note.updatedAt = new Date()
    AppState.emit('activeNote')

    this.saveStateNotes()

  }


  setActiveNote(noteId) {
    const notes = AppState.notes
    const foundNote = notes.find(note => note.id == noteId)
    AppState.activeNote = foundNote
    console.log(foundNote);



  }

  createNote(noteData) {
    const newNote = new Note(noteData)

    console.log('here is your new note', newNote);

    const notes = AppState.notes
    notes.push(newNote)

    this.saveStateNotes()
  }

  saveStateNotes() {
    saveState('Notes', AppState.notes)
  }

  loadStateNotes() {
    const notes = loadState('Notes', [Note])
    AppState.notes = notes
  }
}

export const notesService = new NotesService()