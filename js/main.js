/**
 * @author: Terence Brewer/Shiro Jigoku/DirtyNeptuneMain
 * 
 *
 *
*/

var curval = "";
var guessWord = "";

function randomWord(character) {
    var words2 = [];
    
    for (var i = 0; i < words.length; i++)
        if (words[i].indexOf(character) == 0)
            words2.push(words[i]);
    
    if (words2.length == 0)
        return "";
    else
        return words2[Math.floor(Math.random() * words2.length)].toLowerCase();
}

function update() {
    var value = $('#guess').val().toLowerCase();
    var wordset = false;
    
    if (value == "" || value.length > guessWord)
        guessWord = "";
    
    if (wordset) {
        if (guessWord.indexOf(value) != 0) {
            guessWord = "";
            wordset = false;
        }
    } else {
        if (value != "" && value != curval && guessWord.indexOf(value) != 0) {
            guessWord = randomWord(value); 
            curval = value;
            wordset = true;            
        }
    }
    
    $('#pred').val(guessWord);
}

var timer = setInterval(update, 200);
