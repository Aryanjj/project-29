class Ball {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.x = x;
        this.y = y;
        this.r = radius;

        // this.radius = radius;

        this.body = Bodies.circle(x, y, this.r * 2, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push()
        translate(pos.x, pos.y);
        fill(255, 0, 255);
        rectMode(CENTER)
        ellipseMode(RADIUS)
        rect(0, 0, this.r * 2, this.r * 2);
        pop()
    }
}