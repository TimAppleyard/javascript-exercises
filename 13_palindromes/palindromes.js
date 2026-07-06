const palindromes = function (input) {
    formatted = input.replaceAll(",", "");
    formatted = formatted.replaceAll(" ", "");
    formatted = formatted.replaceAll("!", "");
    formatted = formatted.replaceAll(".", "");
    formatted = formatted.toLowerCase();
    reversedFormatted = formatted.split("").reverse().join("");
    console.log("HERE IS THE INPUT: " + input);
    console.log("HERE IS THE FORMATTED STRING: " + reversedFormatted)
    return reversedFormatted === formatted;
};

// Do not edit below this line
module.exports = palindromes;
