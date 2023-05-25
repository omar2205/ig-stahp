type DelayedFunction = {
  tId?: number
  func: () => void
}

/**
 * Debounce a function for `delay_ms`
 * f: tId (timer id) and func (the function)
 */
export function debounce(f: DelayedFunction, delay_ms: number) {
  if (f.tId) clearTimeout(f.tId)
  f.tId = setTimeout(() => f.func(), delay_ms)
}

declare global {
  interface Window {
    ig_r?: number
  }
  interface HTMLImageElement {
    playsinline?: boolean
    type?: string
    video_url?: string
  }
  interface HTMLVideoElement {
    playsinline?: boolean
    type?: string
    video_url?: string
  }
}
