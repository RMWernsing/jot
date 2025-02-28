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



}