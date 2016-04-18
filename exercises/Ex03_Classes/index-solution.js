class MilitaryOrder {
    constructor(name, members) {
        this.name = name;
        this.members = members;
    }
}


class NightsWatch extends MilitaryOrder {
    constructor(members) {
        super('NightsWatch', members);
        this.alive = true;
    }

    get stillAlive() {
        return this.alive
    }

    set stillAlive(alive) {
        this.alive = alive;
    }

    die() {
        this.alive = false;
    }
}


var theWatch = new NightsWatch(["Jon", "Sam"]);
console.log("is the watch still alive?", theWatch.stillAlive);
theWatch.die();
console.log("is the watch still alive?", theWatch.stillAlive);
console.log("OH no - resurrect them!");
theWatch.stillAlive = true;
console.log("did it work?", theWatch.stillAlive);
