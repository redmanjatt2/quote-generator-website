const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const generateButton = document.getElementById("generateQuote");

const fallbackQuotes = [
    { content: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { content: "Life is 10% what happens to us and 90% how we react to it.", author: "Charles R. Swindoll" },
    { content: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { content: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { content: "Act as if what you do makes a difference. It does.", author: "William James" },
    { content: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { content: "In the middle of every difficulty lies opportunity.", author: "Albert Einstein" },
    { content: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { content: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { content: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { content: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "It always seems impossible until it’s done.", author: "Nelson Mandela" },
    { content: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { content: "Failure will never overtake me if my determination to succeed is strong enough.", author: "Og Mandino" },
    { content: "The harder the conflict, the greater the triumph.", author: "George Washington" },
    { content: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { content: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
    { content: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { content: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { content: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { content: "You don’t have to be great to start, but you have to start to be great.", author: "Zig Ziglar" },
    { content: "The best revenge is massive success.", author: "Frank Sinatra" },
    { content: "The only place where success comes before work is in the dictionary.", author: "Vidal Sassoon" },
    { content: "Your time is limited, don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { content: "Hardships often prepare ordinary people for an extraordinary destiny.", author: "C.S. Lewis" },
    { content: "Don’t be pushed around by the fears in your mind. Be led by the dreams in your heart.", author: "Roy T. Bennett" },
    { content: "Opportunities don’t happen. You create them.", author: "Chris Grosser" },
    { content: "What we achieve inwardly will change outer reality.", author: "Plutarch" },
    { content: "Don’t let yesterday take up too much of today.", author: "Will Rogers" },
    { content: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { content: "The man who has confidence in himself gains the confidence of others.", author: "Hasidic Proverb" },
    { content: "You can’t use up creativity. The more you use, the more you have.", author: "Maya Angelou" },
    { content: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    { content: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { content: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { content: "Don’t let the fear of losing be greater than the excitement of winning.", author: "Robert Kiyosaki" },
    { content: "We may encounter many defeats but we must not be defeated.", author: "Maya Angelou" },
    { content: "A year from now you may wish you had started today.", author: "Karen Lamb" },
    { content: "Success doesn’t just find you. You have to go out and get it.", author: "Anonymous" },
    { content: "Sometimes later becomes never. Do it now.", author: "Anonymous" },
    { content: "Dream it. Wish it. Do it.", author: "Anonymous" },
    { content: "Success doesn’t come from what you do occasionally, it comes from what you do consistently.", author: "Marie Forleo" },
    { content: "Little things make big days.", author: "Anonymous" },
    { content: "Don’t stop when you’re tired. Stop when you’re done.", author: "Marilyn Monroe" },
    { content: "If you can dream it, you can do it.", author: "Walt Disney" },
    { content: "Great things never come from comfort zones.", author: "Anonymous" },
    { content: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { content: "Don’t wish it were easier. Wish you were better.", author: "Jim Rohn" },
    { content: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { content: "Hustle in silence and let your success make the noise.", author: "Anonymous" },
    { content: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt" },
    { content: "Give me liberty, or give me death!", author: "Patrick Henry" },
    { content: "I think, therefore I am.", author: "René Descartes" },
    { content: "An eye for an eye will leave the whole world blind.", author: "Mahatma Gandhi" },
    { content: "Veni, vidi, vici.", author: "Julius Caesar" },
    { content: "Let them eat cake.", author: "Marie Antoinette" },
    { content: "That's one small step for man, one giant leap for mankind.", author: "Neil Armstrong" },
    { content: "Speak softly and carry a big stick.", author: "Theodore Roosevelt" },
    { content: "The die is cast.", author: "Julius Caesar" },
    { content: "I have a dream.", author: "Martin Luther King Jr." },
    { content: "Knowledge is power.", author: "Francis Bacon" },
    { content: "Power tends to corrupt, and absolute power corrupts absolutely.", author: "Lord Acton" },
    { content: "Give peace a chance.", author: "John Lennon" },
    { content: "I am the state.", author: "Louis XIV" },
    { content: "Fortune favors the brave.", author: "Virgil" },
    { content: "Let us never negotiate out of fear. But let us never fear to negotiate.", author: "John F. Kennedy" },
    { content: "The unexamined life is not worth living.", author: "Socrates" },
    { content: "To be, or not to be, that is the question.", author: "William Shakespeare" },
    { content: "I came, I saw, I conquered.", author: "Julius Caesar" },
    { content: "History will be kind to me for I intend to write it.", author: "Winston Churchill" },
    { content: "The ballot is stronger than the bullet.", author: "Abraham Lincoln" },
    { content: "Those who cannot remember the past are condemned to repeat it.", author: "George Santayana" },
    { content: "God helps those who help themselves.", author: "Benjamin Franklin" },
    { content: "Justice is truth in action.", author: "Benjamin Disraeli" },
    { content: "I am the master of my fate; I am the captain of my soul.", author: "William Ernest Henley" },
    { content: "The weak can never forgive. Forgiveness is the attribute of the strong.", author: "Mahatma Gandhi" },
    { content: "Injustice anywhere is a threat to justice everywhere.", author: "Martin Luther King Jr." },
    { content: "The future depends on what you do today.", author: "Mahatma Gandhi" },
    { content: "Liberty, equality, fraternity.", author: "French Revolution" },
    { content: "The pen is mightier than the sword.", author: "Edward Bulwer-Lytton" },
    { content: "The only way to achieve the impossible is to believe it is possible.", author: "Charles Kingsleigh" },
    { content: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { content: "Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.", author: "Anonymous" },
    { content: "Success isn’t just about what you accomplish in your life; it’s about what you inspire others to do.", author: "Unknown" },
    { content: "Don’t wait. The time will never be just right.", author: "Napoleon Hill" },
    { content: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { content: "Act as if what you do makes a difference. It does.", author: "William James" },
    { content: "The best time to plant a tree was 20 years ago. The second best time is now.", author: "Chinese Proverb" },
    { content: "Go confidently in the direction of your dreams. Live the life you have imagined.", author: "Henry David Thoreau" },
    { content: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    // Add more quotes as needed...
];


async function fetchQuote() {
    try {
        const response = await fetch("https://api.quotable.io");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        quoteText.innerText = `"${data.content}"`;
        authorText.innerText = `— ${data.author}`;
    } catch (error) {
        console.error("Failed to fetch quote. Falling back to local quotes.", error);
        const randomIndex = Math.floor(Math.random() * fallbackQuotes.length);
        const quote = fallbackQuotes[randomIndex];
        quoteText.innerText = `"${quote.content}"`;
        authorText.innerText = `— ${quote.author}`;
    }
}

generateButton.addEventListener("click", fetchQuote);
