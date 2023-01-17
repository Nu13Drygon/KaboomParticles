// import kaboom lib
import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";


// initialize context
kaboom({
    background: [176, 66, 245]
});

// load assets
loadSprite("cross", "img/cross.png ");
const parts = []

for (let i = 0; i < 200; i++) {
    parts.push(add([
        sprite("cross", {width:50, height:50}),  
        scale(rand(.1, 1.5)), 
        pos(rand(vec2(width(), height()))),
        rotate(0),
        origin('center')    
    ]))
}
parts.forEach(item => {
    item.onUpdate(() => {
        item.angle += 120 * dt()
        item.move(0, 100)
        if(item.pos.y > height()) {
            item.pos.y = -45
        }
    })
})

onKeyPress("f", (c) => {
    fullscreen(!isFullscreen())
})


/* F1 is inspect mode */
