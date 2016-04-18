var list = [1, 2, 3, 4, 5];
var [a, , b, c] = list;

console.log(`a ${a} b ${b} c ${c}`);

var houseBaratheon = {
    robert: {
        married: "cersei",
        status: "dead",
        children: { // no matter if bastards or not
            firstBorn: {
                name: "joffrey",
                married: "SPOILER1",
                status: "SPOILER2"
            },
            secondBorn: {
                name: "myrcella",
                status: "SPOILER3"
            },
            thirdBorn: {
                name: "tommen",
                status: "SPOILER4"
            }
        }
    }
};

var {robert: {married: wife, children: {firstBorn: {name: heir}, thirdBorn: {status: lastBornState}}}} = houseBaratheon;


console.log(`Roberts wife is ${wife}`);
console.log(`Roberts heir is ${heir}`);
console.log(`The state of roberts last born child is ${lastBornState}`);
