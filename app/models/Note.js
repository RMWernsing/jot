import { generateId } from "../utils/GenerateId.js";

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.createdAt = data.createdAt ? new Date(data.createdAt) : new Date()
    this.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date()
  }

  get createdDate() {
    return this.createdAt.toLocaleDateString("en-US")
  }

  get updatedDate() {
    return this.updatedAt.toLocaleDateString("en-US")
  }

  get createdTime() {
    return this.createdAt.toLocaleTimeString('en-US', {
      hour12: true,
      timeStyle: 'medium'
    })
  }
  get updatedDateTime() {
    return this.updatedAt.toLocaleTimeString('en-US', {
      hour12: true,
      timeStyle: 'medium'
    })
  }



  get listHTMLTemplate() {

    return `
       <div onclick="app.notesController.selectActiveNote('${this.id}')" class="d-flex justify-content-between">
                <h4>
                  <span class="fs-2 note-color-${this.color} mdi mdi-circle"></span> ${this.title}
                </h4>
                <div class="d-flex align-items-center">
                  <p>${this.createdDate}</p>
                </div>
              </div>
    `
  }

  get activeNoteHTMLTemplate() {
    return `
    <div class="bg-info-subtle p-3 rounded">
            <h2>
              <span class="note-color-${this.color} mdi mdi-circle"></span> ${this.title}
            </h2>
            <p>Created on: ${this.createdDate} ${this.createdTime}</p>
            <p>Last updated: ${this.updatedDate} ${this.updatedDateTime}</p>
            <form onsubmit="app.notesController.saveNote()">
              <textarea name="body" id="body" placeholder="Please Write Something">${this.body}</textarea>
              <div class="text-end mt-2">
                <button type="submit" class="btn btn-light fs-5 me-2">Save
                  <span class="mdi mdi-content-save"></span></button>
                <button onclick="app.notesController.deleteNote()" type="button" class="btn btn-danger fs-5">Delete
                  <span class="mdi mdi-delete"></span></button>
              </div>
            </form>
          </div>
    `
  }

}