export default function ({ btnPlay, btnPause, minutesDisplay }) {
  function play() {
    btnPlay.classList.add("hide")
    btnPause.classList.remove("hide")
  }

  function pause() {
    btnPlay.classList.remove("hide")
    btnPause.classList.add("hide")
  }

  function reset() {
    btnPlay.classList.remove("hide")
    btnPause.classList.add("hide")
  }

  function plus() {
    let newMinutes = Number(minutesDisplay.textContent) + 5

    return newMinutes
  }

  function minus() {
    let newMinutes = Number(minutesDisplay.textContent) - 5

    if (newMinutes < 0) {
      newMinutes = 0
    }

    return newMinutes
  }

  return {
    play,
    pause,
    reset,
    plus,
    minus,
  }
}
