// Farcaster SDK - loaded dynamically
let sdk = null;
(async () => {
    try {
        const module = await import('https://esm.sh/@farcaster/frame-sdk');
        sdk = module.sdk;
        sdk.actions.ready();
    } catch (e) {
        console.log('Running in local mode (Farcaster SDK not available)');
    }
})();

// Famous book quotes collection
const quotes = [
    // Original quotes
    {
        text: "It is only with the heart that one can see rightly; what is essential is invisible to the eye.",
        author: "Antoine de Saint-Exupéry",
        book: "The Little Prince"
    },
    {
        text: "So we beat on, boats against the current, borne back ceaselessly into the past.",
        author: "F. Scott Fitzgerald",
        book: "The Great Gatsby"
    },
    {
        text: "It does not do to dwell on dreams and forget to live.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Sorcerer's Stone"
    },
    {
        text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Prisoner of Azkaban"
    },
    {
        text: "It matters not what someone is born, but what they grow to be.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Goblet of Fire"
    },
    
    // J.R.R. Tolkien
    {
        text: "All we have to decide is what to do with the time that is given us.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "There is some good in this world, and it's worth fighting for.",
        author: "J.R.R. Tolkien",
        book: "The Two Towers"
    },
    {
        text: "Even the smallest person can change the course of the future.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "The world is indeed full of peril, and in it there are many dark places; but still there is much that is fair.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Faithless is he that says farewell when the road darkens.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "I will not say: do not weep; for not all tears are an evil.",
        author: "J.R.R. Tolkien",
        book: "The Return of the King"
    },
    
    // Gandalf
    {
        text: "A wizard is never late, nor is he early, he arrives precisely when he means to.",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "Many that live deserve death. And some that die deserve life. Can you give it to them? Then do not be too eager to deal out death in judgement.",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "You shall not pass!",
        author: "Gandalf",
        book: "The Fellowship of the Ring"
    },
    {
        text: "End? No, the journey doesn't end here. Death is just another path, one that we all must take.",
        author: "Gandalf",
        book: "The Return of the King"
    },
    
    // Albert Einstein
    {
        text: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",
        book: "The Saturday Evening Post"
    },
    {
        text: "Life is like riding a bicycle. To keep your balance, you must keep moving.",
        author: "Albert Einstein",
        book: "Letter to his son Eduard"
    },
    {
        text: "The important thing is not to stop questioning. Curiosity has its own reason for existence.",
        author: "Albert Einstein",
        book: "LIFE Magazine"
    },
    {
        text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        author: "Albert Einstein",
        book: "Attributed"
    },
    {
        text: "Try not to become a man of success, but rather try to become a man of value.",
        author: "Albert Einstein",
        book: "LIFE Magazine"
    },
    
    // Leonardo da Vinci
    {
        text: "Simplicity is the ultimate sophistication.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "The noblest pleasure is the joy of understanding.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "I have been impressed with the urgency of doing. Knowing is not enough; we must apply.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    {
        text: "Art is never finished, only abandoned.",
        author: "Leonardo da Vinci",
        book: "Notebooks"
    },
    
    // Arthur Conan Doyle / Sherlock Holmes
    {
        text: "When you have eliminated the impossible, whatever remains, however improbable, must be the truth.",
        author: "Arthur Conan Doyle",
        book: "The Sign of Four"
    },
    {
        text: "The world is full of obvious things which nobody by any chance ever observes.",
        author: "Arthur Conan Doyle",
        book: "The Hound of the Baskervilles"
    },
    {
        text: "There is nothing more deceptive than an obvious fact.",
        author: "Arthur Conan Doyle",
        book: "The Boscombe Valley Mystery"
    },
    {
        text: "Education never ends, Watson. It is a series of lessons, with the greatest for the last.",
        author: "Arthur Conan Doyle",
        book: "His Last Bow"
    },
    
    // Douglas Adams
    {
        text: "Don't Panic.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "The answer to the ultimate question of life, the universe and everything is 42.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "I may not have gone where I intended to go, but I think I have ended up where I needed to be.",
        author: "Douglas Adams",
        book: "The Long Dark Tea-Time of the Soul"
    },
    {
        text: "Time is an illusion. Lunchtime doubly so.",
        author: "Douglas Adams",
        book: "The Hitchhiker's Guide to the Galaxy"
    },
    {
        text: "A common mistake that people make when trying to design something completely foolproof is to underestimate the ingenuity of complete fools.",
        author: "Douglas Adams",
        book: "Mostly Harmless"
    },
    
    // Mustafa Kemal Atatürk
    {
        text: "Peace at home, peace in the world.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "The future is in the skies.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Unless a nation's life faces peril, war is murder.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "A nation devoid of art and artists cannot have a full existence.",
        author: "Mustafa Kemal Atatürk",
        book: "Speech"
    },
    {
        text: "Heroes who shed their blood and lost their lives! You are now lying in the soil of a friendly country. Therefore rest in peace.",
        author: "Mustafa Kemal Atatürk",
        book: "Gallipoli Memorial"
    },
    
    // Satoshi Nakamoto
    {
        text: "If you don't believe it or don't get it, I don't have the time to try to convince you, sorry.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Forum"
    },
    {
        text: "The root problem with conventional currency is all the trust that's required to make it work.",
        author: "Satoshi Nakamoto",
        book: "P2P Foundation"
    },
    {
        text: "It might make sense just to get some in case it catches on.",
        author: "Satoshi Nakamoto",
        book: "Bitcoin Mailing List"
    },
    
    // George R.R. Martin
    {
        text: "A reader lives a thousand lives before he dies. The man who never reads lives only one.",
        author: "George R.R. Martin",
        book: "A Dance with Dragons"
    },
    {
        text: "When you play the game of thrones, you win or you die. There is no middle ground.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "The things we love destroy us every time, lad. Remember that.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Never forget what you are, for surely the world will not. Make it your strength. Then it can never be your weakness.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "Fear cuts deeper than swords.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    {
        text: "The man who fears losing has already lost.",
        author: "George R.R. Martin",
        book: "A Game of Thrones"
    },
    
    // Andrzej Sapkowski / Geralt
    {
        text: "Evil is evil. Lesser, greater, middling, it's all the same. If I'm to choose between one evil and another, I'd rather not choose at all.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "People like to invent monsters and monstrosities. Then they seem less monstrous themselves.",
        author: "Andrzej Sapkowski",
        book: "The Last Wish"
    },
    {
        text: "Something ends, something begins.",
        author: "Andrzej Sapkowski",
        book: "Something Ends, Something Begins"
    },
    {
        text: "If I'm to choose between one evil and another, I'd rather not choose at all.",
        author: "Geralt of Rivia",
        book: "The Last Wish"
    },
    {
        text: "Hatred and prejudice will never be eradicated. And witch hunts will never be about witches.",
        author: "Geralt of Rivia",
        book: "The Last Wish"
    },
    
    // Franz Kafka
    {
        text: "A book must be the axe for the frozen sea within us.",
        author: "Franz Kafka",
        book: "Letter to Oskar Pollak"
    },
    {
        text: "Don't bend; don't water it down; don't try to make it logical; don't edit your own soul according to the fashion.",
        author: "Franz Kafka",
        book: "Letters"
    },
    {
        text: "I am free and that is why I am lost.",
        author: "Franz Kafka",
        book: "The Trial"
    },
    {
        text: "Start with what is right rather than what is acceptable.",
        author: "Franz Kafka",
        book: "Diaries"
    },
    
    // Hari Seldon (Isaac Asimov)
    {
        text: "Violence is the last refuge of the incompetent.",
        author: "Hari Seldon",
        book: "Foundation"
    },
    {
        text: "The fall of Empire, gentlemen, is a massive thing, however, and not easily fought.",
        author: "Hari Seldon",
        book: "Foundation"
    },
    
    // Isaac Asimov
    {
        text: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
        author: "Isaac Asimov",
        book: "Isaac Asimov's Book of Science and Nature Quotations"
    },
    {
        text: "Never let your sense of morals prevent you from doing what is right.",
        author: "Isaac Asimov",
        book: "Foundation"
    },
    {
        text: "The most exciting phrase to hear in science is not 'Eureka!' but 'That's funny...'",
        author: "Isaac Asimov",
        book: "Attributed"
    },
    {
        text: "If knowledge can create problems, it is not through ignorance that we can solve them.",
        author: "Isaac Asimov",
        book: "Asimov's Guide to Science"
    },
    
    // Carl Sagan
    {
        text: "Somewhere, something incredible is waiting to be known.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "We are a way for the universe to know itself.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "For small creatures such as we the vastness is bearable only through love.",
        author: "Carl Sagan",
        book: "Contact"
    },
    {
        text: "The cosmos is within us. We are made of star-stuff.",
        author: "Carl Sagan",
        book: "Cosmos"
    },
    {
        text: "Extinction is the rule. Survival is the exception.",
        author: "Carl Sagan",
        book: "The Varieties of Scientific Experience"
    },
    
    // Nikola Tesla
    {
        text: "If you want to find the secrets of the universe, think in terms of energy, frequency and vibration.",
        author: "Nikola Tesla",
        book: "Attributed"
    },
    {
        text: "The present is theirs; the future, for which I really worked, is mine.",
        author: "Nikola Tesla",
        book: "Interview"
    },
    {
        text: "I don't care that they stole my idea. I care that they don't have any of their own.",
        author: "Nikola Tesla",
        book: "Attributed"
    },
    {
        text: "Be alone, that is the secret of invention; be alone, that is when ideas are born.",
        author: "Nikola Tesla",
        book: "Interview"
    },
    
    // Arthur C. Clarke
    {
        text: "Any sufficiently advanced technology is indistinguishable from magic.",
        author: "Arthur C. Clarke",
        book: "Profiles of the Future"
    },
    {
        text: "Two possibilities exist: either we are alone in the Universe or we are not. Both are equally terrifying.",
        author: "Arthur C. Clarke",
        book: "Attributed"
    },
    {
        text: "The only way to discover the limits of the possible is to go beyond them into the impossible.",
        author: "Arthur C. Clarke",
        book: "Profiles of the Future"
    },
    {
        text: "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here.",
        author: "Arthur C. Clarke",
        book: "Interview"
    },
    
    // Frank Herbert
    {
        text: "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.",
        author: "Frank Herbert",
        book: "Dune"
    },
    {
        text: "The mystery of life isn't a problem to solve, but a reality to experience.",
        author: "Frank Herbert",
        book: "Dune"
    },
    {
        text: "Without change something sleeps inside us, and seldom awakens. The sleeper must awaken.",
        author: "Frank Herbert",
        book: "Dune"
    },
    {
        text: "The people who can destroy a thing, they control it.",
        author: "Frank Herbert",
        book: "Dune"
    },
    {
        text: "There is no escape—we pay for the violence of our ancestors.",
        author: "Frank Herbert",
        book: "Dune"
    },
    
    // Honoré de Balzac
    {
        text: "Behind every great fortune lies a great crime.",
        author: "Honoré de Balzac",
        book: "Le Père Goriot"
    },
    {
        text: "The more one judges, the less one loves.",
        author: "Honoré de Balzac",
        book: "Physiologie du mariage"
    },
    {
        text: "Solitude is fine, but you need someone to tell you that solitude is fine.",
        author: "Honoré de Balzac",
        book: "Lost Illusions"
    },
    
    // Liu Cixin
    {
        text: "The universe is a dark forest. Every civilization is an armed hunter stalking through the trees.",
        author: "Liu Cixin",
        book: "The Dark Forest"
    },
    {
        text: "Weakness and ignorance are not barriers to survival, but arrogance is.",
        author: "Liu Cixin",
        book: "The Three-Body Problem"
    },
    {
        text: "In the long river of time, everything is just a fleeting moment.",
        author: "Liu Cixin",
        book: "The Three-Body Problem"
    },
    {
        text: "To effectively contain a civilization's development and disarm it across such a long span of time, there is only one way: kill its science.",
        author: "Liu Cixin",
        book: "The Three-Body Problem"
    },
    
    // John Verdon
    {
        text: "The worst pain in our lives comes from the mistakes we refuse to acknowledge.",
        author: "John Verdon",
        book: "Think of a Number"
    },
    {
        text: "The person I think I am, and the person other people think I am, may be very different from who I actually am.",
        author: "John Verdon",
        book: "Think of a Number"
    },
    
    // George Lucas / Star Wars
    {
        text: "Do or do not. There is no try.",
        author: "George Lucas",
        book: "Star Wars: The Empire Strikes Back"
    },
    {
        text: "Your focus determines your reality.",
        author: "George Lucas",
        book: "Star Wars: The Phantom Menace"
    },
    {
        text: "The Force will be with you. Always.",
        author: "George Lucas",
        book: "Star Wars: A New Hope"
    },
    {
        text: "Fear is the path to the dark side. Fear leads to anger. Anger leads to hate. Hate leads to suffering.",
        author: "George Lucas",
        book: "Star Wars: The Phantom Menace"
    },
    
    // Classic quotes
    {
        text: "Whatever our souls are made of, his and mine are the same.",
        author: "Emily Brontë",
        book: "Wuthering Heights"
    },
    {
        text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        author: "Jane Austen",
        book: "Pride and Prejudice"
    },
    {
        text: "Beware; for I am fearless, and therefore powerful.",
        author: "Mary Shelley",
        book: "Frankenstein"
    },
    {
        text: "The world breaks everyone, and afterward, many are strong at the broken places.",
        author: "Ernest Hemingway",
        book: "A Farewell to Arms"
    },
    {
        text: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
        book: "The Soul of Man Under Socialism"
    },
    {
        text: "I am no bird; and no net ensnares me.",
        author: "Charlotte Brontë",
        book: "Jane Eyre"
    }
];

// State
let currentQuote = null;
let favorites = JSON.parse(localStorage.getItem('topNotchFavorites') || '[]');
const bgClasses = ['bg-1', 'bg-2', 'bg-3', 'bg-4', 'bg-5'];

// DOM Elements
const quoteCard = document.getElementById('quoteCard');
const quoteText = document.getElementById('quoteText');
const quoteAuthor = document.getElementById('quoteAuthor');
const quoteBook = document.getElementById('quoteBook');
const newQuoteBtn = document.getElementById('newQuoteBtn');
const shareBtn = document.getElementById('shareBtn');
const copyBtn = document.getElementById('copyBtn');
const favoriteBtn = document.getElementById('favoriteBtn');
const shareCanvas = document.getElementById('shareCanvas');

// Get random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Check if quote is favorited
function isFavorited(quote) {
    return favorites.some(f => f.text === quote.text && f.author === quote.author);
}

// Update favorite button state
function updateFavoriteButton() {
    if (currentQuote && isFavorited(currentQuote)) {
        favoriteBtn.classList.add('active');
    } else {
        favoriteBtn.classList.remove('active');
    }
}

// Display quote
function displayQuote(quote) {
    currentQuote = quote;
    
    // Add loading state
    quoteCard.classList.add('loading');
    
    // Remove old bg class and add new one
    bgClasses.forEach(cls => quoteCard.classList.remove(cls));
    const randomBg = bgClasses[Math.floor(Math.random() * bgClasses.length)];
    quoteCard.classList.add(randomBg);
    
    // Animate quote change
    setTimeout(() => {
        quoteText.textContent = quote.text;
        quoteAuthor.textContent = `— ${quote.author}`;
        quoteBook.textContent = quote.book;
        quoteCard.classList.remove('loading');
        updateFavoriteButton();
    }, 150);
}

// Generate share image
function generateShareImage() {
    if (!currentQuote) return null;
    
    const canvas = shareCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = 600;
    canvas.height = 400;
    
    // Background gradient
    const gradient = ctx.createLinearGradient(0, 0, 600, 400);
    gradient.addColorStop(0, '#0f0c29');
    gradient.addColorStop(0.5, '#302b63');
    gradient.addColorStop(1, '#24243e');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 600, 400);
    
    // Add decorative elements
    ctx.fillStyle = 'rgba(255, 215, 0, 0.1)';
    ctx.beginPath();
    ctx.arc(50, 50, 100, 0, Math.PI * 2);
    ctx.fill();
    
    ctx.fillStyle = 'rgba(168, 85, 247, 0.1)';
    ctx.beginPath();
    ctx.arc(550, 350, 120, 0, Math.PI * 2);
    ctx.fill();
    
    // Quote marks
    ctx.font = '80px Georgia';
    ctx.fillStyle = 'rgba(255, 215, 0, 0.3)';
    ctx.fillText('"', 40, 100);
    ctx.fillText('"', 520, 350);
    
    // Quote text
    ctx.font = 'italic 22px Segoe UI, sans-serif';
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    
    // Word wrap
    const words = currentQuote.text.split(' ');
    let lines = [];
    let currentLine = '';
    const maxWidth = 480;
    
    words.forEach(word => {
        const testLine = currentLine + word + ' ';
        const metrics = ctx.measureText(testLine);
        if (metrics.width > maxWidth && currentLine !== '') {
            lines.push(currentLine.trim());
            currentLine = word + ' ';
        } else {
            currentLine = testLine;
        }
    });
    lines.push(currentLine.trim());
    
    const lineHeight = 32;
    const startY = 180 - (lines.length * lineHeight) / 2;
    
    lines.forEach((line, i) => {
        ctx.fillText(line, 300, startY + i * lineHeight);
    });
    
    // Author
    ctx.font = 'bold 18px Segoe UI, sans-serif';
    ctx.fillStyle = '#ffd700';
    ctx.fillText(`— ${currentQuote.author}`, 300, 320);
    
    // Book
    ctx.font = '14px Segoe UI, sans-serif';
    ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
    ctx.fillText(currentQuote.book, 300, 345);
    
    
    return canvas.toDataURL('image/png');
}

// Share quote
async function shareQuote() {
    if (!currentQuote) {
        displayQuote(getRandomQuote());
        return;
    }
    
    const shareText = `"${currentQuote.text}"\n\n— ${currentQuote.author}, ${currentQuote.book}`;
    const miniAppUrl = 'https://top-notch-quotes-base-app-farcaster.vercel.app';
    const imageDataUrl = generateShareImage();
    
    try {
        // Try Farcaster compose cast
        if (sdk && sdk.actions) {
            await sdk.actions.composeCast({
                text: shareText,
                embeds: [miniAppUrl]
            });
        } else {
            throw new Error('SDK not available');
        }
    } catch (error) {
        // Fallback to native share with image
        try {
            const response = await fetch(imageDataUrl);
            const blob = await response.blob();
            const file = new File([blob], 'quote.png', { type: 'image/png' });
            
            if (navigator.canShare && navigator.canShare({ files: [file] })) {
                await navigator.share({
                    title: 'Top Notch Quote',
                    text: shareText + '\n\n' + miniAppUrl,
                    files: [file]
                });
            } else if (navigator.share) {
                await navigator.share({
                    title: 'Top Notch Quote',
                    text: shareText + '\n\n' + miniAppUrl
                });
            } else {
                copyToClipboard(shareText + '\n\n' + miniAppUrl);
            }
        } catch (e) {
            copyToClipboard(shareText + '\n\n' + miniAppUrl);
        }
    }
}

// Copy to clipboard fallback
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        // Visual feedback
        shareBtn.textContent = 'Copied!';
        setTimeout(() => {
            shareBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"/>
                    <circle cx="6" cy="12" r="3"/>
                    <circle cx="18" cy="19" r="3"/>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>
                </svg>
                Share
            `;
        }, 1500);
    });
}

// Toggle favorite
function toggleFavorite() {
    if (!currentQuote) return;
    
    const index = favorites.findIndex(f => f.text === currentQuote.text && f.author === currentQuote.author);
    
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(currentQuote);
    }
    
    localStorage.setItem('topNotchFavorites', JSON.stringify(favorites));
    updateFavoriteButton();
    
    // Haptic feedback if available
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click', () => {
    displayQuote(getRandomQuote());
});

newQuoteBtn.addEventListener('touchstart', (e) => {
    e.preventDefault();
    displayQuote(getRandomQuote());
}, { passive: false });

shareBtn.addEventListener('click', shareQuote);

copyBtn.addEventListener('click', copyImageToClipboard);

favoriteBtn.addEventListener('click', toggleFavorite);

// Copy quote image to clipboard
async function copyImageToClipboard() {
    if (!currentQuote) {
        displayQuote(getRandomQuote());
        return;
    }
    
    // Generate image on canvas
    generateShareImage();
    
    // Try multiple clipboard methods
    let copied = false;
    
    // Method 1: Using canvas.toBlob with ClipboardItem
    if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        try {
            const blob = await new Promise(resolve => shareCanvas.toBlob(resolve, 'image/png'));
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]);
            copied = true;
        } catch (err) {
            console.log('Method 1 failed:', err);
        }
    }
    
    // Method 2: Try with fetch from dataURL
    if (!copied && navigator.clipboard && typeof ClipboardItem !== 'undefined') {
        try {
            const dataUrl = shareCanvas.toDataURL('image/png');
            const response = await fetch(dataUrl);
            const blob = await response.blob();
            await navigator.clipboard.write([
                new ClipboardItem({ 'image/png': blob })
            ]);
            copied = true;
        } catch (err) {
            console.log('Method 2 failed:', err);
        }
    }
    
    if (copied) {
        showCopyFeedback('copied');
    } else {
        // Fallback: download image
        const imageDataUrl = shareCanvas.toDataURL('image/png');
        downloadImage(imageDataUrl);
        showCopyFeedback('downloaded');
    }
}

// Download image fallback - show modal for mobile
function downloadImage(imageDataUrl) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const closeBtn = document.getElementById('closeModal');
    
    modalImage.src = imageDataUrl;
    modal.classList.add('show');
    
    closeBtn.onclick = () => {
        modal.classList.remove('show');
    };
    
    modal.onclick = (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
        }
    };
}

// Show visual feedback
function showCopyFeedback(type) {
    copyBtn.classList.add(type === 'copied' ? 'copied' : 'downloaded');
    
    // Haptic feedback
    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
    
    setTimeout(() => {
        copyBtn.classList.remove('copied', 'downloaded');
    }, 1500);
}

// Swipe gesture for new quote
let touchStartX = 0;
let touchEndX = 0;

quoteCard.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
}, { passive: true });

quoteCard.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
}, { passive: true });

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (Math.abs(diff) > swipeThreshold) {
        displayQuote(getRandomQuote());
    }
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' || e.code === 'Enter') {
        e.preventDefault();
        displayQuote(getRandomQuote());
    } else if (e.code === 'KeyS') {
        shareQuote();
    } else if (e.code === 'KeyF') {
        toggleFavorite();
    }
});

// Initial load
displayQuote(getRandomQuote());

