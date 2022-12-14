class Obstacle {
    constructor(x, y, radius, alphaLJ, Eobs, color) {
        this.position = createVector(x,y);
        this.radius = radius;
        this.color = color;
        this.alphaLJ = alphaLJ;
        this.Eobs = Eobs;
    }

    show() {
        noStroke();
        fill(this.color);
        strokeWeight(0.1);
        ellipse(this.position.x, this.position.y, this.radius*2, this.radius*2);
    }
}
