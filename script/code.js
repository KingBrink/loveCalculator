
function calculate() {
    var love = parseInt(document.getElementById('love').value);
    var loyalty = parseInt(document.getElementById('loyalty').value);

    if (isNaN(love) || isNaN(loyalty) || love < 1 || love > 10 || loyalty < 1 || loyalty > 10) {
        alert("Please enter valid values for love and loyalty (1-10).");
        return;
    }

    var score = (love * 0.6) + (loyalty * 0.4);
    var resultText = "";

    if (score >= 7) {
        resultText = "Wow! You're deeply in love and very loyal.";
    } else if (score >= 5) {
        resultText = "You have a good balance of love and loyalty.";
    } else {
        resultText = "You might want to work on your love and loyalty.";
    }

    document.getElementById('result').innerText = resultText;
}