import { AppState } from "../AppState.js";
import { Note } from "../models/Note.js"

class NotesService {


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

  }
}

export const notesService = new NotesService()