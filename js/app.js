/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

$('#btn__reset').on('click', function () {
    var game = new Game();
    game.startGame();
    console.log("clicked!");
});