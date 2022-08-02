import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = [ "name" ] // this.nameTarget, this.nameTargets, and this.hasNameTarget

  greet() {
    const element = this.nameTarget
    const name = element.value
    console.log(`hello, ${name}!`)
  }
}