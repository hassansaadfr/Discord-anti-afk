const ioHook = require('iohook')
const robotJS = require('robotjs')

let lastAction = new Date()
const convertMsToMn = ms => {
  return ms * 1000 * 60
}

ioHook.on('mousemove', () => {
  lastAction = new Date()
})

ioHook.on('mouseclick', () => {
  lastAction = new Date()
})

ioHook.on('keydown', () => {
  lastAction = new Date()
})

ioHook.start()

console.log('Ready')

setInterval(() => {
  if (new Date() - lastAction >= convertMsToMn(5)) {
    const { x, y } = robotJS.getMousePos()
    robotJS.moveMouse(x + 1, y + 1)
    robotJS.moveMouse(x, y)
  }
}, 10000)
