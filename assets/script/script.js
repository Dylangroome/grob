M.textareaAutoResize($('#text-input'));
output = document.getElementById('output');

const termReplacements = {
    "he": "they",
    "she": "they",
    "him": "them",
    "her": "them",
    "his": "theirs",
    "hers": "theirs",
    "himself": "themself",
    "herself": "themself",
    "man": "person",
    "woman": "person",
    "boy": "child",
    "girl": "child",
    "brother": "sibling",
    "sister": "sibling",
    "father": "parent",
    "mother": "parent",
    "son": "child",
    "daughter": "child",
    "uncle": "relative",
    "aunt": "relative",
    "nephew": "relative",
    "niece": "relative",
    "grandfather": "grandparent",
    "grandmother": "grandparent",
    "grandson": "grandchild",
    "granddaughter": "grandchild",
    "king": "ruler",
    "queen": "ruler",
    "chairman": "chairperson",
    "chairwoman": "chairperson",
    "businessman": "businessperson",
    "businesswoman": "businessperson",
    "mailman": "mail carrier",
    "fireman": "firefighter",
    "policeman": "police officer",
    "stewardess": "flight attendant",
    "waitress": "server",
    "hostess": "host",
    "salesman": "salesperson",
    "foreman": "supervisor",
    "mankind": "humankind",
    "spokesman": "spokesperson",
    "spokeswoman": "spokesperson",
    "workman": "worker",
    "layman": "non-expert",
    "normal": "typical",
    "abnormal": "atypical",
    "grandfathered": "legacy",
    "manpower": "workforce",
    "man-made": "synthetic",
    "manhunt": "pursuit",
    "manhandle": "handle roughly",
    "manhole": "maintenance hole",
};


function submitText() {
    input = textInput.value;
    rawWords = input.split(" ");
    processedWords = [];

    for (word in rawWords) {
        text = rawWords[word];
        lowerText = text.toLowerCase();
        processedText = lowerText.replace(/[\.,?!]/g, "");
        processedWords.push(processedText);
    }

    for (word in processedWords) {
        const regexManStart = /^man/;
        const regexManEnd = /man$/;
        const familyTerms = ['father', 'mother', 'sister', 'brother', 'daughter', 'son'];

        if (regexManStart.test(processedWords[word])) {
            output.innerHTML += `- ${processedWords[word]} starts with 'man'<br>`;
        }
        if (regexManEnd.test(processedWords[word])) {
            output.innerHTML += `- ${processedWords[word]} ends in 'man'<br>`;
        }
        if (familyTerms.includes(processedWords[word])) {
            output.innerHTML += `- ${processedWords[word]} is a gendered family term<br>`;
        }

    }
}

button = document.getElementById('submit-button');
button.addEventListener("click", submitText);

textInput = document.getElementById('text-input');