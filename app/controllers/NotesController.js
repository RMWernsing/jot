import { AppState } from "../AppState.js";
import { notesService } from "../services/NotesService.js";
import { getFormData } from "../utils/FormHandler.js";

export class NotesController {
  constructor() {
    this.drawNotesList()
    this.drawJotsCount()
    AppState.on('notes', this.drawNotesList)
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
}