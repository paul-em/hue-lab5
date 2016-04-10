var target = document.querySelector('h1');
target.innerHTML = 'Daenerys: ' +
    'DaenerysOfHouseTargaryen' +
    'FirstofHerName' +
    'QueenOfMeereen' +
    'QueenOfTheAndalsTheRhoynarAndTheFirstMen' +
    'LadyRegnantOfTheSevenKingdoms' +
    'ProtectorOfTheRealm' +
    'KhaleesiOfTheGreatGrassSea' +
    'BreakerOfChains' +
    'MotherOfDragons';


/**
 * TODO: Change the text obove to use multiline template string without the plus signs
 */

var userInput = '<script>alert("hacked")</script>';

$('h2').html("Userinput: " + userInput);

/**
 * TODO: change the output string to use template string variables and add a tagged function called "htmlEscape" to escape the input
 * use the escape function below for that
 */

function escape(s){
    var reEscape = /[&<>'"]/g,
        oEscape = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        },
        fnEscape = function (m) {
            return oEscape[m];
        },
        replace = String.prototype.replace
        ;
    return replace.call(s, reEscape, fnEscape);
}
