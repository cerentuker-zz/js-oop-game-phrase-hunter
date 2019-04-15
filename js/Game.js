/**
 * Object that handles the game flow
 */
const phrases = [
    new Phrase("Awkward"),
    new Phrase("Bagpipes"),
    new Phrase("Banjo"),
    new Phrase("Burger"),
    new Phrase("Croquet"),
    new Phrase("Crypt"),
    new Phrase("Dwarves"),
    new Phrase("Zombie"),
    new Phrase("Yacht"),
    new Phrase("Sphinx"),
    new Phrase("Polka")
]
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
    }
    //initializes the game
    startGame() {
        // hide the start screen overlay
        $('#overlay').hide();
        // display the phrase on the page
        var phrase = this.getRandomPhrase();
        this.activePhrase = phrase;
        phrase.addPhraseToDisplay();
    }
    //gets a random phrase
    getRandomPhrase() {
        var randIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randIndex];
    }
    //game interface to handle user's interactions
    handleInteraction() {

    }
    //removes one life from user
    removelife() {

    }
    //checks if the player has won
    checkForWin() {

    }
    // ends game
    gameOver() {

    }
}