class Chain {

    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            length: 20
        }
        this.chain = Constraint.create(options)
        this.pointB = pointB;
        World.add(world, this.chain)



    }
    attach(body) {
        this.chain.bodyA = body;
    }


    fly() {
        this.chain.bodyA = null
    }

    display() {
        if (this.chain.bodyA) {
            var pointA = this.chain.bodyA.position
            var pointB = this.ponitB;



        }
















    }



}

