function getInvalid(text) {
  return `<span class="invalid">${text}</span>`
}
function getValid(text) {
  return `<span class="valid">${text}</span>`
}

const in1 = document.getElementById("in1")
const in2 = document.getElementById("in2")
const in3 = document.getElementById("in3")
const in4 = document.getElementById("in4")

const res1 = document.getElementById("res1")
const res2 = document.getElementById("res2")
const res3 = document.getElementById("res3")
const res4 = document.getElementById("res4")

class InAndRes {
  constructor(inEl, resEl, expected) {
    this.inEl = inEl
    this.resEl = resEl
    this.expected = expected
  }

  validateAndRender() {
    if (this.inEl.value.trim() === this.expected) {
      this.resEl.innerHTML = getValid(this.expected)
      return 0;
    }
    this.resEl.innerHTML = getInvalid(this.inEl.value) + getValid(this.expected)
    return 1;
  }
}


const c1 = new InAndRes(in1, res1, 'zoubky')
const c2 = new InAndRes(in2, res2, 'spinkat')
const c3 = new InAndRes(in3, res3, 'bibiko')
const c4 = new InAndRes(in4, res4, 'čisté')


const c = [c1, c2, c3, c4]

const submitButton = document.getElementById("submitButton")
const form = document.getElementById("myform")
submitButton.onclick = (ev => {
  if (!form.checkValidity()) {
    return
  }
  ev.preventDefault()
  let sum = 0
  c.forEach(e=>sum += e.validateAndRender())
  const p = document.getElementById("res")
  document.getElementById("numOfFaults").innerText = `Počet chyb: ${sum}`
  p.classList.remove("hide")
})
