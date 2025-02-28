import { generateId } from "../utils/GenerateId.js";

export class Note {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.color = data.color
    this.body = data.body
    this.createdAt = new Date()
    this.updatedAt = data.updatedAt
  }

  get listHTMLTemplate() {

    return `
       <div class="d-flex justify-content-between">
                <h4>
                  <span class="fs-2 note-color-${this.color} mdi mdi-circle"></span> ${this.title}
                </h4>
                <p>date</p>
              </div>
    `
  }

}