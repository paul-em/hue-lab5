var target = document.querySelector('h1');
target.innerHTML = `Daenerys:
    DaenerysOfHouseTargaryen
    FirstofHerName
    QueenOfMeereen
    QueenOfTheAndalsTheRhoynarAndTheFirstMen
    LadyRegnantOfTheSevenKingdoms
    ProtectorOfTheRealm
    KhaleesiOfTheGreatGrassSea
    BreakerOfChains
    MotherOfDragons`;



var userInput = '<script>alert("hacked")</script>';

$('h2').html(htmlEscape`Userinput: ${userInput}`);


function htmlEscape(stringParts, userInput){
    return stringParts[0] + escape(userInput);
}

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
