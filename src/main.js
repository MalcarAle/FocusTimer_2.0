import Controls from "./controls.js"
import Events from "./events.js"
import Sound from "./sounds.js"
import Timer from "./timer.js"
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
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls({
  btnPlay,
  btnPause,
  minutesDisplay,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
})

const sound = Sound()
Events({ controls, sound, timer })
