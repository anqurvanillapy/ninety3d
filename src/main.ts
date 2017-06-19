import { autoDetectRenderer, loader, Graphics, Container } from 'pixi.js'
import { W, H } from './config'

const renderer = autoDetectRenderer()
renderer.autoResize = true
renderer.resize(W, H)

document.body.appendChild(renderer.view)

const stage: Container = new Container()

// loader.add()
//       .load(setup)
setup()

function setup (): void {
  let rect: Graphics = new Graphics()
  const rectX: number = 500
  const rectY: number = 500

  rect.beginFill(0x000000, 0)
  rect.lineStyle(4, 0xffffff, 1)
  rect.drawRect(0, 0, rectX, rectY)
  rect.endFill()
  rect.position.set((W - rectX) / 2, (H - rectY) / 2)

  stage.addChild(rect)

  loop()
}

function loop (): void {
  requestAnimationFrame(loop)
  renderer.render(stage)
}
