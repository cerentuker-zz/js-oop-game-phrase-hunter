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
    /*<div id="phrase" class="section">
        <ul>
            <li class="hide letter h">h</li>
            <li class="hide letter o">o</li>
            <li class="hide letter w">w</li>
            <li class="space"> </li>
            <li class="hide letter a">a</li>
            <li class="hide letter r">r</li>
            <li class="hide letter e">e</li>
            <li class="space"> </li>
            <li class="hide letter y">y</li>
            <li class="hide letter o">o</li>
            <li class="hide letter u">u</li>
        </ul>
    </div>*/
    addPhraseToDisplay() {
        for (var i = 0; i < this.phrase.length; i++) {
            var currentChar = this.phrase.charAt(i);
            var $listElement = $('#phrase ul')[0];
            var listItem = document.createElement("li");
            listItem.Name = "hide letter "+ currentChar;
            listItem.innerText = currentChar;
            $listElement.appendChild(listItem);
          }
    }
    
    //checks to see if the letter selected by the player matches a letter in the phrase.
    checkLetter() {

    }
    
    //shows the discovered letter
    showMatchedLetter() {

    }
}

