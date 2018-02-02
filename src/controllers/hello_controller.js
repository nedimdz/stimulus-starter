// Demo 1
import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["name"]

  greet(){
    console.log(`Hello ${this.name}!`)
  }

  get name(){
    return this.nameTarget.value
  }
}

// connect event se poziva svaki put kad se controller poveze sa HTML dokumentom
// data-action value click->hello#greet is called an action descriptor. This particular descriptor says:
// click is the event name
// hello is the controller identifier
// greet is the name of the method to invoke
// The data-target value hello.name is called a target descriptor. This particular descriptor says:

// hello is the controller identifier
// name is the target name

// We’ve covered the framework’s core concepts: controllers, identifiers, actions, and targets.


