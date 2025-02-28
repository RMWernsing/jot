import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class NotesController {
  constructor() {
    this.drawNotesList()
    this.drawJotsCount()
    AppState.on('notes', this.drawNotesList)
    AppState.on('notes', this.drawJotsCount)
  }

  drawNotesList() {
    const notes = AppState.notes
    let notesContent = ''

    notes.forEach(note => notesContent += note.listHTMLTemplate)

    const notesListElem = document.getElementById('notesList')
    notesListElem.innerHTML = notesContent

  }

  drawJotsCount() {
    const notes = AppState.notes
    let jots = notes.length

    const jotsCountElem = document.getElementById('jotsCount')
    // @ts-ignore
    jotsCountElem.innerText = notes.length

  }

  createNoteListing() {
    event.preventDefault()
    const noteFormElem = event.target

    const rawNoteData = getFormData(noteFormElem)

    console.log("form data is", rawNoteData)

    notesService.createNote(rawNoteData)
  }

  drawActiveNote() {
    const note = AppState.activeNote
    console.log(note);
    const activeNoteElem = document.getElementById('activeNote')

    if (note == null) {
      activeNoteElem.innerHTML = 
    }

  }
}