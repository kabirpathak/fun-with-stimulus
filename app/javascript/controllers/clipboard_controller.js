import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  // 3 properties are this.sourceTarget, this.sourceTargets, and this.hasSourceTarget
  static targets = [ "source" ]

  copy(event) {
    event.preventDefault()
    this.sourceTarget.select()
    document.execCommand("copy")
  }
}