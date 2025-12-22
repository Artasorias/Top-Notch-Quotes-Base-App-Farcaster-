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
        text: "Whatever our souls are made of, his and mine are the same.",
        author: "Emily Brontë",
        book: "Wuthering Heights"
    },
    {
        text: "All we have to decide is what to do with the time that is given us.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
        author: "Jane Austen",
        book: "Pride and Prejudice"
    },
    {
        text: "The only way out of the labyrinth of suffering is to forgive.",
        author: "John Green",
        book: "Looking for Alaska"
    },
    {
        text: "Not all those who wander are lost.",
        author: "J.R.R. Tolkien",
        book: "The Fellowship of the Ring"
    },
    {
        text: "We accept the love we think we deserve.",
        author: "Stephen Chbosky",
        book: "The Perks of Being a Wallflower"
    },
    {
        text: "Beware; for I am fearless, and therefore powerful.",
        author: "Mary Shelley",
        book: "Frankenstein"
    },
    {
        text: "The only thing we have to fear is fear itself.",
        author: "Franklin D. Roosevelt",
        book: "First Inaugural Address"
    },
    {
        text: "There is some good in this world, and it's worth fighting for.",
        author: "J.R.R. Tolkien",
        book: "The Two Towers"
    },
    {
        text: "It matters not what someone is born, but what they grow to be.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Goblet of Fire"
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
        text: "Stay gold, Ponyboy. Stay gold.",
        author: "S.E. Hinton",
        book: "The Outsiders"
    },
    {
        text: "And so we go on, boats against the current, borne back ceaselessly into the past.",
        author: "F. Scott Fitzgerald",
        book: "The Great Gatsby"
    },
    {
        text: "I am no bird; and no net ensnares me.",
        author: "Charlotte Brontë",
        book: "Jane Eyre"
    },
    {
        text: "We are all fools in love.",
        author: "Jane Austen",
        book: "Pride and Prejudice"
    },
    {
        text: "The heart was made to be broken.",
        author: "Oscar Wilde",
        book: "De Profundis"
    },
    {
        text: "In the middle of difficulty lies opportunity.",
        author: "Albert Einstein",
        book: "Letter to a Friend"
    },
    {
        text: "Happiness can be found even in the darkest of times, if one only remembers to turn on the light.",
        author: "J.K. Rowling",
        book: "Harry Potter and the Prisoner of Azkaban"
    },
    {
        text: "The finest qualities of our nature, like the bloom on fruits, can be preserved only by the most delicate handling.",
        author: "Henry David Thoreau",
        book: "Walden"
    },
    {
        text: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose.",
        author: "Dr. Seuss",
        book: "Oh, The Places You'll Go!"
    },
    {
        text: "One cannot think well, love well, sleep well, if one has not dined well.",
        author: "Virginia Woolf",
        book: "A Room of One's Own"
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
    const imageDataUrl = generateShareImage();
    
    try {
        // Try Farcaster compose cast
        if (sdk && sdk.actions) {
            await sdk.actions.composeCast({
                text: shareText,
                embeds: imageDataUrl ? [imageDataUrl] : []
            });
        } else {
            throw new Error('SDK not available');
        }
    } catch (error) {
        // Fallback to native share with image
        if (navigator.share && navigator.canShare) {
            try {
                const blob = await (await fetch(imageDataUrl)).blob();
                const file = new File([blob], 'quote.png', { type: 'image/png' });
                
                if (navigator.canShare({ files: [file] })) {
                    await navigator.share({
                        title: 'Top Notch Quote',
                        text: shareText,
                        files: [file]
                    });
                } else {
                    await navigator.share({
                        title: 'Top Notch Quote',
                        text: shareText
                    });
                }
            } catch (e) {
                copyToClipboard(shareText);
            }
        } else {
            copyToClipboard(shareText);
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
    
    try {
        const imageDataUrl = generateShareImage();
        const response = await fetch(imageDataUrl);
        const blob = await response.blob();
        
        await navigator.clipboard.write([
            new ClipboardItem({ 'image/png': blob })
        ]);
        
        // Visual feedback
        copyBtn.classList.add('copied');
        setTimeout(() => {
            copyBtn.classList.remove('copied');
        }, 1500);
        
        // Haptic feedback
        if (navigator.vibrate) {
            navigator.vibrate(50);
        }
    } catch (err) {
        console.error('Failed to copy image:', err);
        // Fallback: download image
        const imageDataUrl = generateShareImage();
        const link = document.createElement('a');
        link.download = 'quote.png';
        link.href = imageDataUrl;
        link.click();
    }
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

