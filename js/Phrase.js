/**
 * Object that handles the creation of phrases
 */

class Phrase {
    constructor(phrase) {
        this.word = phrase;
    } 
    get phrase() {
        return this.word;
    }
    
    //displays the placeholders for the phrase when the game starts. Each letter is presented by an empty box, one li element for each letter. 
    addPhraseToDisplay() {
        for (var i = 0; i < this.phrase.length; i++) {
            var currentChar = this.phrase.charAt(i);
            var $listElement = $('#phrase ul')[0];
            var listItem = document.createElement("li");
            listItem.className = "hide letter "+ currentChar;
            listItem.innerText = currentChar;
            $listElement.appendChild(listItem);
          }
    }
    
    //checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter(letter) {
        var phraseToCheck = phrase.innerText.toLowerCase();
        if (phraseToCheck.includes(letter)) {
            this.showMatchedLetter(letter);
            return true;
        } else {
            return false;
        }
    }

    //shows the discovered letter
    showMatchedLetter(letter) {
        $('li:contains('+letter+')').attr('class',"show");
    }
}

