//takes in text and a specific word and counts it
//if the word is red it only counts words formated as: 
//SPACE"red"SPACE to get the text from the body and not titles
const countTopicNumOccurences = (topic, data) => {
    // \\b takes spaces in to account
    const regex = new RegExp(`\\b${topic}\\b`, "gi");
    const matches = data.match(regex);

    //return the number of occurences
    return matches.length;
}

module.exports = countTopicNumOccurences;