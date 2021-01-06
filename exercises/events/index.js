// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {

  constructor() {
    this.events = {}
  }
  // Register an event handler
  on(eventName, callback) {
    //add as key to events obj
    //if key exists already, we would already have array that we added, so we can push callback onto that array
    if (this.events[eventName]) {
      this.events[eventName].push(callback)
    } else {
      //else create array, and have it contain our initial callback
      this.events[eventName] = [callback]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    //if any events in our list have the trigger name
    //then we loop through and call the ones with that event name
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb()
      }
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName]
  }
}

module.exports = Events;
