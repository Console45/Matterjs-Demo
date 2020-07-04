const { Engine, Render, Runner, World, Bodies, MouseConstraint, Mouse } = Matter;

const width = 800,
    height = 600
const engine = Engine.create(),
    { world } = engine,
    render = Render.create({
        element: document.body,
        engine,
        options: {
            wireframes: false,
            height,
            width
        }
    })

Render.run(render);
Runner.run(Runner.create(), engine)
World.add(world, MouseConstraint.create(engine, {
    mouse: Mouse.create(render.canvas)
}))
// walls
const walls = [
    Bodies.rectangle(400, 0, 800, 40, {
        isStatic: true
    }),
    Bodies.rectangle(400, 600, 800, 40, {
        isStatic: true
    }),
    Bodies.rectangle(0, 300, 40, 600, {
        isStatic: true
    }),
    Bodies.rectangle(800, 300, 40, 600, {
        isStatic: true
    })
]

// random shapes 
for (let i = 0; i < 35; i++) {
    if (Math.random() > 0.5)
        World.add(world, Bodies.rectangle(Math.random() * width, Math.random() * height, 50, 50))
    else
        World.add(world, Bodies.circle(Math.random() * width, Math.random() * height, 35, {
            // render: {
            //     fillStyle: 'blue'
            // }
        }))
}
World.add(world, walls);
