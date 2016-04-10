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
    age: 21
};


/**
 * TODO: add the titles attribute with the shorthand definition
 * additionally add a dynamic property name starting with "title" and ending with a random title from the titles array
 * The value should just be set to "true"
 *
 */

/*
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
*/