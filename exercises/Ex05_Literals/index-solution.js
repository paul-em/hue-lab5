var titles = [
    'DaenerysOfHouseTargaryen',
    'FirstofHerName',
    'QueenOfMeereen',
    'QueenOfTheAndalsTheRhoynarAndTheFirstMen',
    'LadyRegnantOfTheSevenKingdoms',
    'ProtectorOfTheRealm',
    'KhaleesiOfTheGreatGrassSea',
    'BreakerOfChains',
    'MotherOfDragons'
];

var daenerys = {
    status: "alive",
    age: 21,
    titles,
    ['title' + (() => this.titles[Math.floor(Math.random() * this.titles.length)])()]: true
};


    // TODO: uncomment and check if correct output
console.log("Titles of daenerys: ", daenerys.titles);
var found = titles.some(function (title) {
    if (daenerys['title' + title]) {
        console.log("Found the dynamic title", 'title' + title);
        return true;
    }
});
if(!found){
    console.warn("Could not find the dynamic title :(");
}