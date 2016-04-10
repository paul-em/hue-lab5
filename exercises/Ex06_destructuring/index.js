var list = [1,2,3,4,5];
var a = list[0];
var b = list[2];
var c = list[3];

console.log(`a ${a} b ${b} c ${c}`);

// TODO: replace the 3 lines of variable assignments with a single line using list matching

var houseBaratheon = {
    robert: {
        married: "cersei",
        status: "dead",
        children: { // no matter if bastards or not
            firstBorn:
            {
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

var wife = houseBaratheon.robert.married;
var heir = houseBaratheon.robert.children.firstBorn.name;
var lastBornState = houseBaratheon.robert.children.thirdBorn.name;

// TODO: replace the 3 lines of variable assignments with a single line using object matching

console.log(`Roberts wife is ${wife}`);
console.log(`Roberts heir is ${heir}`);
console.log(`The state of roberts last born child is ${lastBornState}`);
