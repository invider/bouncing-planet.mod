function click(e) {

    const angle = lib.math.rndfi()
    lab.spawn(dna.planet, {
        x: e.pageX,
        y: e.pageY,
        r:  RND(20, 60),
        dx: cos(angle),
        dy: sin(angle),
        speed: RND(100, 500),
        rspeed: .25 + rnd(.75 * PI) * lib.math.rnds(),
    })
}
