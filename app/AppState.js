import { Note } from './models/Note.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  notes = [
    new Note({
      title: 'Spider in my bed',
      color: 'red',
      body: `The spider is really big and scary and I don't want anything to do with it.`,
    }),
    new Note({
      title: `The bit universe`,
      color: 'yellow',
      body: `The thing about the universe that really does freak me out is that it's so incomprehensibly big and I don't understand it.`,
    }),
    new Note({
      title: `To do list `,
      color: 'purple',
      body: `You need to clean the toilets, wash the dishes, do the yard work, take dogs to day care`,
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())