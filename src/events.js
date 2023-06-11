import {
  btnPlay,
  btnPause,
  btnStop,
  btnPlus,
  btnMinus,
  btnCoffee,
  btnFirePlace,
  btnForest,
  btnRain,
} from "./elements.js"

export default function ({ controls, sound, timer }) {
  function removeSelection() {
    btnForest.classList.remove("select")
    btnRain.classList.remove("select")
    btnCoffee.classList.remove("select")
    btnFirePlace.classList.remove("select")
  }

  function addSelection(card) {
    removeSelection()

    card.classList.add("select")
  }

  btnPlay.addEventListener("click", () => {
    controls.play()
    timer.countDown()
  })

  btnPause.addEventListener("click", () => {
    controls.pause()
    timer.hold()
  })

  btnStop.addEventListener("click", () => {
    controls.reset()
    removeSelection()
    sound.resetSounds()
    timer.reset()
  })

  btnPlus.addEventListener("click", () => {
    let newMinutes = controls.plus()

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  btnMinus.addEventListener("click", () => {
    let newMinutes = controls.minus()

    timer.updateDisplay(newMinutes, 0)
    timer.updateMinutes(newMinutes)
  })

  btnForest.addEventListener("click", () => {
    sound.resetSounds()
    if (!btnForest.classList.contains("select")) {
      addSelection(btnForest)
      sound.btnPressForest.play()
      return
    }
    removeSelection()
  })

  btnRain.addEventListener("click", () => {
    sound.resetSounds()
    if (!btnRain.classList.contains("select")) {
      addSelection(btnRain)
      sound.btnPressRain.play()
      return
    }
    removeSelection()
  })

  btnCoffee.addEventListener("click", () => {
    sound.resetSounds()
    if (!btnCoffee.classList.contains("select")) {
      addSelection(btnCoffee)
      sound.btnPressCoffee.play()
      return
    }
    removeSelection()
  })

  btnFirePlace.addEventListener("click", () => {
    sound.resetSounds()
    if (!btnFirePlace.classList.contains("select")) {
      addSelection(btnFirePlace)
      sound.btnPressFirePlace.play()
      return
    }
    removeSelection()
  })
}
