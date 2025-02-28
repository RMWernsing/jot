import { Note } from './models/Note.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

  notes = [
    new Note({
      title: 'There is a spider in my bed',
      color: '#631c03',
      body: `The spider is really big and scary and I don't want anything to do with it.`,
    }),
    new Note({
      title: `Why is the universe so big?`,
      color: '#631c03',
      body: `The thing about the universe that really does freak me out is that it's so incomprehensibly big and I don't understand it.`,
    }),
    new Note({
      title: `There is a spider in my bed`,
      color: '#631c03',
      body: `The spider is really big and scary and I dont want anything to do with it.`,
    })
  ]
}

export const AppState = createObservableProxy(new ObservableAppState())