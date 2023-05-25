// Stop IG from autoplaying Videos.

import { debounce } from './utils'

window.addEventListener('scroll', (_e) => {
  window.ig_r = 0
  debounce({ func: alter_vidoes }, 300)
})

window.addEventListener('DOMContentLoaded', alter_vidoes)

function alter_vidoes() {
  if (window.ig_r >= 1) return
  window.ig_r++

  const ig_vidoes = document.querySelectorAll('video')
  ig_vidoes.forEach((vid) => {
    // remove video src
    vid.video_url = vid.src
    vid.src = ''
  })

  window.ig_r = 0
}
