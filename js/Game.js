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
        //remove previous phrases if there are any
        $('li.hide.letter').remove();
        //restore lives if there are none
        this.refreshLives();
        phrase.addPhraseToDisplay();
    }
    //function that restores lives 
    refreshLives() {
        $('div ol').first().html(`<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>
        <li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`);
    }
    //gets a random phrase
    getRandomPhrase() {
        var randIndex = Math.floor(Math.random() * phrases.length);
        return phrases[randIndex];
    }
    //game interface to handle user's interactions
    handleInteraction() {
        //when a letter is clicked, check if it matches anything in the phrase
}
    //removes one life from user, returns the remaining life count
    removeLife() {
        $('.tries').first().remove();
        return $('.tries').length;
    }
    //checks if the player has won
    checkForWin() {
        console.log("CHECK FOR WIN!!");
        if ($('.hide').length == 0) {
            console.log("YOU WON!");
        } else {
            console.log("NOCH NICHT!");
        }

    }
    // ends game
    gameOver() {
        console.log("GAME OVER!");
        $(".title").text("Game Over! Better luck next time!");
        $('#overlay').show();
    }
}