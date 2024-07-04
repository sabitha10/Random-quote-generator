
const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Do not watch the clock. Do what it does. Keep going.",
    "Success is not how high you have climbed, but how you make a positive difference to the world.",
    "Be the change that you wish to see in the world.",
 "Be yourself; everyone else is already taken.",
 "The greatest glory in living lies not in never falling, but in rising every time we fall.",
 "The way to get started is to quit talking and begin doing.",
"Spread love everywhere you go. Let no one ever come to you without leaving happier.",
"Don't cry because it's over, smile because it happened.",
"The future belongs to those who believe in the beauty of their dreams.",
"Your time is limited, so don't waste it living someone else's life.",
"The secret of getting ahead is getting started."
];

document.getElementById('new-quote').addEventListener('click', function() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
});

// Initial quote
document.getElementById('new-quote').click();
