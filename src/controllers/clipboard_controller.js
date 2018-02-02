// ## Demo 2

import { Controller } from "stimulus"

export default class extends Controller {
  static targets = ["source"]

  connect(){
    if(document.queryCommandSupported("copy")){
      this.element.classList.add("clipboard--supported")
    }
  }

  copy(event){
    event.preventDefault()
    this.sourceTarget.select();
    document.execCommand("copy")
  }
}

// When Stimulus loads your controller class, it looks for target name strings in a static array called targets. For each target name in the array, Stimulus adds three new properties to your controller. Here, our "source" target name becomes the following properties:

// this.sourceTarget evaluates to the first source target in your controller’s scope. If there is no source target, accessing the property throws an error.
// this.sourceTargets evaluates to an array of all source targets in the controller’s scope.
// this.hasSourceTarget evaluates to true if there is a source target or false if not.

// Common Events Have a Shorthand Action Notation
// You might have noticed we’ve omitted click-> from the action descriptor. That’s because Stimulus defines click as the default event for actions on <button> elements.

// Certain other elements have default events, too. Here’s the full list:

// Element Default event
// a click
// button  click
// form  submit
// input change
// input type=submit click
// select  change
// textarea  change

// Similarly, our source target need not be an <input type="text">. The controller only expects it to have a value property and a select() method. That means we can use a <textarea> instead:

//   PIN: <textarea data-target="clipboard.source" readonly>3737</textarea>