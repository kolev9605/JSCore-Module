class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(p1, p2) {
        let a = p1.x - p2.x
        let b = p1.y - p2.y

        let c = Math.sqrt(a * a + b * b);

        return c;
    }
}