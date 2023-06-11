export default function () {
  const btnPressForest = new Audio("sounds/floresta.wav")
  const btnPressRain = new Audio("sounds/chuva.wav")
  const btnPressCoffee = new Audio("sounds/cafeteria.wav")
  const btnPressFirePlace = new Audio("sounds/lareira.wav")
  const kitchenTimer = new Audio(
    "https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true"
  )

  btnPressForest.loop = true
  btnPressRain.loop = true
  btnPressCoffee.loop = true
  btnPressFirePlace.loop = true

  function resetSounds() {
    btnPressForest.pause()
    btnPressRain.pause()
    btnPressCoffee.pause()
    btnPressFirePlace.pause()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  return {
    btnPressForest,
    btnPressRain,
    btnPressCoffee,
    btnPressFirePlace,
    resetSounds,
    timeEnd,
  }
}
