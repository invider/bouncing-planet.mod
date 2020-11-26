let planets = 0

const df = {
    x: rx(.5),
    y: ry(.5),
    r: 50,
    angle: 0,

    dx: cos(.25*PI),
    dy: sin(.25*PI),
    speed: 200,
    rspeed: 1,
}

function onClone(st) {
    this.name = 'planet' + (++planets)
    augment(this, df, st)
}

function evo(dt) {
    const { x, y, r, dx, dy, speed } = this

    // move the planet
    this.x += dx * speed * dt
    this.y += dy * speed * dt

    // rotate the planet
    this.angle += this.rspeed * dt

    // bounce from edges
    if ((x < r && dx < 0) || (x > rx(1)-r && dx > 0)) {
        this.dx *= -1
        sfx(res.boing, .4)
    }
    if ((y < r && dy < 0) || (y > ry(1)-r && dy > 0)) {
        this.dy *= -1
        sfx(res.boing, .4)
    }
}

function draw() {
    const { x, y, r, angle } = this
    /*
    lineWidth(2)
    stroke(.35, .5, .5)
    circle(x, y, r)
    */
    save()
    translate(x, y)
    rotate(angle)

    image(res.planet, -r, -r, 2*r, 2*r)

    restore()
}
