import * as PIXI from 'pixi.js'

const renderer = PIXI.autoDetectRenderer()
renderer.autoResize = true
renderer.resize(window.innerWidth, window.innerHeight)

document.body.appendChild(renderer.view)
