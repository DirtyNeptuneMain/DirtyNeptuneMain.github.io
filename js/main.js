/**
 * @author: Terence Brewer/Shiro Jigoku/DirtyNeptuneMain
 * 
 *
 *
*/

function update() {
    if ($('#guess').val() == "k")
        $('#pred').text("ka");
    else if ($('#guess').val() == "ka")
        $('#pred').text("kap");
    else if ($('#guess').val() == "kap")
        $('#pred').text("kapp"); 
    else if ($('#guess').val() == "kapp")
        $('#pred').text("kappa");  
    else if ($('#guess').val() == "kappa")
        $('#pred').text("kappa");    
    else
        $('#pred').text("");      
}

var timer = setInterval(update, 200);
