/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
var game;

$('#btn__reset').on('click', function () {
    game = new Game();
    game.startGame();
    console.log("clicked!");
});

$('.key').on('click', function () {
    //get clicked key value
    var phrase = new Phrase();
    var selectedChar = $(this).text();
    var letterFound = phrase.checkLetter(selectedChar);
    var remainingLife;
    if (letterFound) {
        game.checkForWin();
    } else {
        remainingLife = game.removeLife();
    }
    
    if (remainingLife != null && remainingLife === 0) {
        game.gameOver();
    }    
});