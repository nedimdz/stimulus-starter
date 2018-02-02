import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "slide" ]

  initialize() {
    this.showCurrentSlide()
  }

  next() {
    this.index++
  }

  previous() {
    this.index--
  }

  showCurrentSlide (){
    this.slideTargets.forEach((el, i) => {
      el.classList.toggle("slide--current", this.index == i)
    })
  }

  get index(){
    return parseInt(this.data.get("index"))
  }

  set index(value) {
    this.data.set("index", value)
    this.showCurrentSlide()
  }
}


// What does the initialize() method do? How is it different from the connect() method we’ve used before?

// These are Stimulus lifecycle callback methods, and they’re useful for setting up or tearing down associated state when your controller enters or leaves the document.

// Callback  Invoked by Stimulus…
// initialize  once, when the controller is first instantiated
// connect anytime the controller is connected to the DOM
// disconnect  anytime the controller is disconnected from the DOM


// The Data API Explained
// Each Stimulus controller has a this.data object with has(), get(), and set() methods. These methods provide convenient access to data attributes on the controller’s element, scoped by the controller’s identifier.

// For example, in our controller above:

// this.data.has("index") returns true if the controller’s element has a data-slideshow-index attribute
// this.data.get("index") returns the string value of the element’s data-slideshow-index attribute
// this.data.set("index", index) sets the element’s data-slideshow-index attribute to the string value of index
// If your attribute name consists of more than one word, reference it as camelCase in JavaScript and attribute-case in HTML. For example, you can read the data-slideshow-current-class-name attribute with this.data.get("currentClassName").

// Trenutna verzija
// import { Controller } from "stimulus"

// export default class extends Controller {
//   static targets = [ "slide" ]

//   initialize() {
//     const index = parseInt(this.element.getAttribute("data-slideshow-index"))
//     // ili
//     // const index = parseInt(this.data.get("index"))
//     this.showSlide(index)
//   }

//   next() {
//     this.showSlide(this.index + 1)
//   }

//   previous() {
//     this.showSlide(this.index - 1)
//   }

//   showSlide(index) {
//     this.index = index
//     this.slideTargets.forEach((el, i) => {
//       el.classList.toggle("slide--current", index == i)
//     })
//   }
// }