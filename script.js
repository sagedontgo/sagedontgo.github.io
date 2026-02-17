// Tarot Card Database
const tarotDeck = [
    // Major Arcana
    { name: "The Fool", file: "the_fool.png", upright: "New beginnings", reversed: "Recklessness" },
    { name: "The Magician", file: "the_magician.png", upright: "Manifestation power", reversed: "Manipulation" },
    { name: "The High Priestess", file: "the_high_priestess.png", upright: "Intuition wisdom", reversed: "Secrets hidden" },
    { name: "The Empress", file: "the_empress.png", upright: "Abundance nurture", reversed: "Dependence" },
    { name: "The Emperor", file: "the_emperor.png", upright: "Authority structure", reversed: "Domination" },
    { name: "The Hierophant", file: "the_hierophant.png", upright: "Tradition guidance", reversed: "Rebellion" },
    { name: "The Lovers", file: "the_lovers.png", upright: "Love harmony", reversed: "Disharmony" },
    { name: "The Chariot", file: "the_chariot.png", upright: "Willpower victory", reversed: "Lack direction" },
    { name: "Strength", file: "strength.png", upright: "Courage compassion", reversed: "Weakness" },
    { name: "The Hermit", file: "the_hermit.png", upright: "Inner wisdom", reversed: "Isolation" },
    { name: "Wheel of Fortune", file: "wheel_of_fortune.png", upright: "Good luck", reversed: "Bad luck" },
    { name: "Justice", file: "justice.png", upright: "Fairness truth", reversed: "Unfairness" },
    { name: "The Hanged Man", file: "the_hanged_man.png", upright: "Surrender perspective", reversed: "Stalling" },
    { name: "Death", file: "death.png", upright: "Transformation endings", reversed: "Resistance change" },
    { name: "Temperance", file: "temperance.png", upright: "Balance moderation", reversed: "Imbalance" },
    { name: "The Devil", file: "the_devil.png", upright: "Bondage addiction", reversed: "Release freedom" },
    { name: "The Tower", file: "the_tower.png", upright: "Sudden change", reversed: "Disaster averted" },
    { name: "The Star", file: "the_star.png", upright: "Hope inspiration", reversed: "Despair" },
    { name: "The Moon", file: "the_moon.png", upright: "Illusion intuition", reversed: "Confusion" },
    { name: "The Sun", file: "the_sun.png", upright: "Joy success", reversed: "Temporary sadness" },
    { name: "Judgement", file: "judgement.png", upright: "Rebirth reflection", reversed: "Self-doubt" },
    { name: "The World", file: "the_world.png", upright: "Completion achievement", reversed: "Incompletion" },
    
    // Wands
    { name: "Ace of Wands", file: "ace_of_wands.png", upright: "Inspiration opportunity", reversed: "Lack direction" },
    { name: "Two of Wands", file: "two_of_wands.png", upright: "Planning progress", reversed: "Fear unknown" },
    { name: "Three of Wands", file: "three_of_wands.png", upright: "Expansion foresight", reversed: "Obstacles delays" },
    { name: "Four of Wands", file: "four_of_wands.png", upright: "Celebration harmony", reversed: "Lack support" },
    { name: "Five of Wands", file: "five_of_wands.png", upright: "Conflict competition", reversed: "Avoiding conflict" },
    { name: "Six of Wands", file: "six_of_wands.png", upright: "Victory recognition", reversed: "Lack recognition" },
    { name: "Seven of Wands", file: "seven_of_wands.png", upright: "Courage perseverance", reversed: "Giving up" },
    { name: "Eight of Wands", file: "eight_of_wands.png", upright: "Swift action", reversed: "Delays frustration" },
    { name: "Nine of Wands", file: "nine_of_wands.png", upright: "Resilience persistence", reversed: "Exhaustion" },
    { name: "Ten of Wands", file: "ten_of_wands.png", upright: "Burden responsibility", reversed: "Delegation release" },
    { name: "Page of Wands", file: "page_of_wands.png", upright: "Enthusiasm exploration", reversed: "Lack direction" },
    { name: "Knight of Wands", file: "knight_of_wands.png", upright: "Energy passion", reversed: "Recklessness" },
    { name: "Queen of Wands", file: "queen_of_wands.png", upright: "Confidence independence", reversed: "Jealousy" },
    { name: "King of Wands", file: "king_of_wands.png", upright: "Leadership vision", reversed: "Impulsiveness" },
    
    // Cups
    { name: "Ace of Cups", file: "ace_of_cups.png", upright: "Love compassion", reversed: "Emotional loss" },
    { name: "Two of Cups", file: "two_of_cups.png", upright: "Partnership unity", reversed: "Imbalance" },
    { name: "Three of Cups", file: "three_of_cups.png", upright: "Celebration friendship", reversed: "Overindulgence" },
    { name: "Four of Cups", file: "four_of_cups.png", upright: "Contemplation apathy", reversed: "Sudden awareness" },
    { name: "Five of Cups", file: "five_of_cups.png", upright: "Loss regret", reversed: "Moving forward" },
    { name: "Six of Cups", file: "six_of_cups.png", upright: "Nostalgia innocence", reversed: "Living past" },
    { name: "Seven of Cups", file: "seven_of_cups.png", upright: "Choices illusion", reversed: "Clarity determination" },
    { name: "Eight of Cups", file: "eight_of_cups.png", upright: "Walking away", reversed: "Fear commitment" },
    { name: "Nine of Cups", file: "nine_of_cups.png", upright: "Contentment satisfaction", reversed: "Greed dissatisfaction" },
    { name: "Ten of Cups", file: "ten_of_cups.png", upright: "Harmony happiness", reversed: "Broken family" },
    { name: "Page of Cups", file: "page_of_cups.png", upright: "Creative opportunity", reversed: "Emotional immaturity" },
    { name: "Knight of Cups", file: "knight_of_cups.png", upright: "Romance charm", reversed: "Moodiness" },
    { name: "Queen of Cups", file: "queen_of_cups.png", upright: "Compassion intuition", reversed: "Insecurity" },
    { name: "King of Cups", file: "king_of_cups.png", upright: "Emotional balance", reversed: "Emotional manipulation" },
    
    // Swords
    { name: "Ace of Swords", file: "ace_of_swords.png", upright: "Clarity breakthrough", reversed: "Confusion" },
    { name: "Two of Swords", file: "two_of_swords.png", upright: "Difficult decision", reversed: "Indecision" },
    { name: "Three of Swords", file: "three_of_swords.png", upright: "Heartbreak sorrow", reversed: "Recovery forgiveness" },
    { name: "Four of Swords", file: "four_of_swords.png", upright: "Rest recovery", reversed: "Restlessness" },
    { name: "Five of Swords", file: "five_of_swords.png", upright: "Conflict defeat", reversed: "Reconciliation" },
    { name: "Six of Swords", file: "six_of_swords.png", upright: "Transition recovery", reversed: "Resistance change" },
    { name: "Seven of Swords", file: "seven_of_swords.png", upright: "Deception strategy", reversed: "Coming clean" },
    { name: "Eight of Swords", file: "eight_of_swords.png", upright: "Trapped powerless", reversed: "Freedom release" },
    { name: "Nine of Swords", file: "nine_of_swords.png", upright: "Anxiety worry", reversed: "Hope recovery" },
    { name: "Ten of Swords", file: "ten_of_swords.png", upright: "Painful ending", reversed: "Recovery regeneration" },
    { name: "Page of Swords", file: "page_of_swords.png", upright: "Curiosity vigilance", reversed: "Deception gossip" },
    { name: "Knight of Swords", file: "knight_of_swords.png", upright: "Action assertiveness", reversed: "Impulsiveness" },
    { name: "Queen of Swords", file: "queen_of_swords.png", upright: "Independent perceptive", reversed: "Cold-hearted" },
    { name: "King of Swords", file: "king_of_swords.png", upright: "Intellectual clarity", reversed: "Manipulative" },
    
    // Pentacles
    { name: "Ace of Pentacles", file: "ace_of_pentacles.png", upright: "Opportunity prosperity", reversed: "Lost opportunity" },
    { name: "Two of Pentacles", file: "two_of_pentacles.png", upright: "Balance flexibility", reversed: "Overwhelmed" },
    { name: "Three of Pentacles", file: "three_of_pentacles.png", upright: "Teamwork collaboration", reversed: "Lack teamwork" },
    { name: "Four of Pentacles", file: "four_of_pentacles.png", upright: "Security control", reversed: "Greed" },
    { name: "Five of Pentacles", file: "five_of_pentacles.png", upright: "Financial loss", reversed: "Recovery" },
    { name: "Six of Pentacles", file: "six_of_pentacles.png", upright: "Generosity charity", reversed: "Selfishness" },
    { name: "Seven of Pentacles", file: "seven_of_pentacles.png", upright: "Investment patience", reversed: "Lack results" },
    { name: "Eight of Pentacles", file: "eight_of_pentacles.png", upright: "Skill development", reversed: "Lack focus" },
    { name: "Nine of Pentacles", file: "nine_of_pentacles.png", upright: "Independence luxury", reversed: "Financial setback" },
    { name: "Ten of Pentacles", file: "ten_of_pentacles.png", upright: "Wealth legacy", reversed: "Financial failure" },
    { name: "Page of Pentacles", file: "page_of_pentacles.png", upright: "Opportunity manifestation", reversed: "Lack progress" },
    { name: "Knight of Pentacles", file: "knight_of_pentacles.png", upright: "Efficiency routine", reversed: "Boredom" },
    { name: "Queen of Pentacles", file: "queen_of_pentacles.png", upright: "Practical nurturing", reversed: "Neglect" },
    { name: "King of Pentacles", file: "king_of_pentacles.png", upright: "Abundance security", reversed: "Greed stubbornness" }
];

// Shuffle function
function shuffleDeck(deck) {
    const shuffled = [...deck];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Initialize cards on page load
let selectedCards = [];

function initializeTarotCards() {
    const shuffledDeck = shuffleDeck(tarotDeck);
    selectedCards = shuffledDeck.slice(0, 6).map(card => ({
        ...card,
        isReversed: Math.random() > 0.5
    }));
}

function revealCard(cardElement, index) {
    if (cardElement.classList.contains('flipped')) return;

    const cardData = selectedCards[index];
    const cardFront = cardElement.querySelector('.card-front');
    const cardImage = cardFront.querySelector('.card-image');
    const cardName = cardElement.querySelector('.card-name');
    const cardMeaning = cardElement.querySelector('.card-meaning');

    cardImage.src = `assets/img/cards/${cardData.file}`;
    cardImage.onerror = function() { this.src = 'assets/img/card_back.png'; };

    if (cardData.isReversed) {
        cardName.textContent = `${cardData.name} (Reversed)`;
        cardFront.classList.add('reversed');
    } else {
        cardName.textContent = cardData.name;
        cardFront.classList.remove('reversed');
    }

    cardMeaning.textContent = cardData.isReversed ? cardData.reversed : cardData.upright;
    cardElement.classList.add('flipped');

    // Check if all cards are now revealed
    setTimeout(checkAllRevealed, 900);
}

// Single delegated listener — survives reshuffles
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cards-container');
    container.addEventListener('click', (e) => {
        const card = e.target.closest('.card');
        if (!card) return;
        const index = parseInt(card.dataset.cardIndex);
        revealCard(card, index);
    });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    initializeTarotCards();
    setMysticalPrompt();
    runLoadSequence();
});

function runLoadSequence() {
    const cards    = Array.from(document.querySelectorAll('.card'));
    const shuffle  = document.getElementById('shuffle-button');
    const prompt   = document.getElementById('mystical-prompt');

    // Cards pop in one by one (80ms stagger)
    cards.forEach((card, i) => {
        setTimeout(() => card.classList.add('popped-in'), 200 + i * 120);
    });

    // Shuffle button fades in after last card
    const afterCards = 200 + cards.length * 120 + 200;
    setTimeout(() => shuffle.classList.add('popped-in'), afterCards);

    // Prompt fades in last
    setTimeout(() => prompt.classList.add('popped-in'), afterCards + 300);
}

const mysticalLines = [
    "Determine your destiny.",
    "Listen to the cards.",
    "The stars have aligned.",
    "What does fate hold for you?",
    "The veil between worlds is thin.",
    "Let the cards speak.",
    "Your path is written in the stars.",
    "Seek what lies beyond.",
    "The universe has a message.",
    "Trust the ancient wisdom.",
    "The cards never lie.",
    "Draw from the infinite.",
];

const secretLines = [
    "Wanna know something?",
    "I've got a secret. Wanna know?",
    "The cards have spoken... but there's more.",
    "Something lingers in the ether.",
    "There's one thing the cards won't show.",
    "Can you handle the truth?",
    "A whisper from beyond. Curious?",
];

function checkAllRevealed() {
    const allCards = document.querySelectorAll('.card');
    const allFlipped = Array.from(allCards).every(c => c.classList.contains('flipped'));
    if (!allFlipped) return;

    // Fade out the normal subtitle, swap in secret line
    const line = document.getElementById('mystical-line');
    const subtitle = document.getElementById('mystical-subtitle');
    const buttons = document.getElementById('secret-buttons');

    line.style.opacity = '0';
    subtitle.style.opacity = '0';

    setTimeout(() => {
        line.textContent = secretLines[Math.floor(Math.random() * secretLines.length)];
        line.style.opacity = '1';
        subtitle.style.opacity = '0';

        // Show buttons with a slight delay so display:flex kicks in before opacity
        buttons.style.display = 'flex';
        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                buttons.style.opacity = '1';
                // Anchor No button now that it's painted and has real dimensions
                if (window.anchorNoButton) window.anchorNoButton();
            });
        });
    }, 550);
}

function resetPrompt() {
    const buttons = document.getElementById('secret-buttons');
    buttons.style.opacity = '0';
    setTimeout(() => { buttons.style.display = 'none'; }, 600);
    setMysticalPrompt();
    document.getElementById('mystical-subtitle').style.opacity = '1';
}

document.addEventListener('DOMContentLoaded', () => {

    // ── YES BUTTON ────────────────────────────────────────────────────
    document.getElementById('btn-yes').addEventListener('click', handleYes);

    function handleYes() {
        // Hide the No button if it's been moved to body
        const btnNo = document.getElementById('btn-no');
        if (btnNo) {
            btnNo.style.opacity = '0';
            btnNo.style.pointerEvents = 'none';
        }

        // Fade out everything
        const fadeTargets = ['cards-container', 'shuffle-button', 'mystical-prompt'];
        fadeTargets.forEach(id => {
            const el = document.getElementById(id);
            el.style.transition = 'opacity 0.8s ease';
            el.style.opacity = '0';
        });

        setTimeout(() => {
            fadeTargets.forEach(id => {
                document.getElementById(id).style.display = 'none';
            });
            showEnvelope();
        }, 850);
    }
});

function setMysticalPrompt() {
    const line = mysticalLines[Math.floor(Math.random() * mysticalLines.length)];
    document.getElementById('mystical-line').textContent = line;
}

// Shuffle button
document.addEventListener('DOMContentLoaded', function() {
    const shuffleButton = document.getElementById('shuffle-button');
    shuffleButton.addEventListener('click', function() {
        const cardElements = Array.from(document.querySelectorAll('.card'));
        const animDuration = 600;
        const stagger = 60;

        // Step 1 — pick new cards immediately so data is ready
        initializeTarotCards();
        setMysticalPrompt();
        document.getElementById('mystical-subtitle').style.opacity = '1';
        const buttons = document.getElementById('secret-buttons');
        buttons.style.opacity = '0';
        buttons.style.display = 'none';

        cardElements.forEach((card, index) => {
            const delay = index * stagger;
            const midpoint = delay + animDuration / 2;

            // Start animation
            setTimeout(() => {
                card.style.animation = `shuffle ${animDuration}ms ease`;
            }, delay);

            // At midpoint: swap content while card is "in the air"
            setTimeout(() => {
                // Unflip
                card.classList.remove('flipped');
                card.querySelector('.card-front').classList.remove('reversed');
                card.querySelector('.card-image').src = '';
                card.querySelector('.card-name').textContent = '';
                card.querySelector('.card-meaning').textContent = '';
            }, midpoint);

            // Clear animation after it finishes
            setTimeout(() => {
                card.style.animation = '';
            }, delay + animDuration);
        });
    });
});

// ── ENVELOPE + LETTER + SPOTIFY ──────────────────────────────────────────────

function showEnvelope() {
    const scene = document.getElementById('envelope-scene');
    scene.style.display = 'flex';
    requestAnimationFrame(() => requestAnimationFrame(() => {
        scene.style.opacity = '1';
    }));
}

document.addEventListener('DOMContentLoaded', () => {
    const envelopeEl = document.getElementById('envelope');
    const letter     = document.getElementById('letter');

    envelopeEl.addEventListener('click', openEnvelope, { once: true });

    function openEnvelope() {
        // Open flap
        envelopeEl.classList.add('opened');

        // After flap opens, show letter, then fade envelope away
        setTimeout(() => {
            letter.classList.add('visible');

            setTimeout(() => {
                envelopeEl.style.opacity = '0';
                setTimeout(() => { envelopeEl.style.display = 'none'; }, 650);
            }, 400);
        }, 500);
    }
});

// ── NO BUTTON runaway ────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
    let noCount = 0;
    const noMessages = [
        "Are you sure?",
        "I'm gonna be really sad. Are you really sure?",
        "Please... reconsider.",
        "The cards went through so much for you.",
        "Last chance. Really.",
        "...okay fine. But you're missing out.",
    ];

    const extraMessages = [
        "please :(",
        "ghe, ganyan ka naman",
        "sige na pleaseeee",
        "pinageffortan ko to tas di mo naman titignan :(",
        "hindi ka na ba curious? :(",
        "alam mo na lahat ng cards, di ka na ba curious sa secret? :(",
        "hindi ka nakakatawa, sige na, just click yes :3",
        "may pagkakamali ba ako,,, click mo na",
        "ghe, ganyanan",
    ];

    const btnNo  = document.getElementById('btn-no');
    const btnYes = document.getElementById('btn-yes');

    // Called by checkAllRevealed after Yes button is painted
    window.anchorNoButton = function() {
        const yesRect = btnYes.getBoundingClientRect();
        btnNo.style.transition = 'none';
        btnNo.style.left = (yesRect.right + 14) + 'px';
        btnNo.style.top  = yesRect.top + 'px';
        requestAnimationFrame(() => {
            btnNo.style.transition = 'left 0.2s cubic-bezier(.25,.46,.45,.94), top 0.2s cubic-bezier(.25,.46,.45,.94), opacity 0.4s ease';
            btnNo.style.opacity = '1';
            btnNo.style.pointerEvents = 'all';
        });
    };

    function placeNoButton() {
        const bw = btnNo.offsetWidth  || 110;
        const bh = btnNo.offsetHeight || 44;
        const x = Math.floor(Math.random() * (window.innerWidth  - bw - 20)) + 10;
        const y = Math.floor(Math.random() * (window.innerHeight - bh - 20)) + 10;
        btnNo.style.left = x + 'px';
        btnNo.style.top  = y + 'px';
    }

    btnNo.addEventListener('mouseenter', () => {
        const line = document.getElementById('mystical-line');
        line.style.opacity = '0';

        let message;
        if (noCount < noMessages.length) {
            message = noMessages[noCount];
        } else {
            // After exhausting main messages, pick randomly from extra lines
            message = extraMessages[Math.floor(Math.random() * extraMessages.length)];
        }

        setTimeout(() => {
            line.textContent = message;
            line.style.opacity = '1';
        }, 200);

        noCount++;
        placeNoButton();

        // Grow Yes, shrink No (cap growth after noMessages is exhausted)
        const scale = Math.min(1 + noCount * 0.3, 3.5);
        btnYes.style.transform  = `scale(${scale})`;
        btnYes.style.transition = 'transform 0.4s ease';

        // Only fully hide No after 3 passes through extra messages
        if (noCount >= noMessages.length + 3) {
            btnNo.style.opacity = '0';
            btnNo.style.pointerEvents = 'none';
        }
    });
});

// Magical Canvas Animation
const canvas = document.getElementById('magic-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Particle class for magical effects
class MagicParticle {
    constructor() {
        this.reset();
        this.y = Math.random() * canvas.height;
        this.opacity = Math.random();
    }

    reset() {
        this.x = Math.random() * canvas.width;
        this.y = -10;
        this.size = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = Math.random() * 0.5 - 0.25;
        this.opacity = Math.random() * 0.5 + 0.3;
        this.hue = Math.random() * 60 + 260; // Purple to blue range
        this.pulseSpeed = Math.random() * 0.05 + 0.02;
        this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update() {
        this.y += this.speedY;
        this.x += this.speedX;
        this.pulsePhase += this.pulseSpeed;
        
        // Reset particle when it goes off screen
        if (this.y > canvas.height + 10 || this.x < -10 || this.x > canvas.width + 10) {
            this.reset();
        }
    }

    draw() {
        const pulse = Math.sin(this.pulsePhase) * 0.5 + 0.5;
        const currentOpacity = this.opacity * pulse;
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 80%, 70%, ${currentOpacity})`;
        ctx.fill();
        
        // Add glow effect
        ctx.shadowBlur = 15;
        ctx.shadowColor = `hsla(${this.hue}, 80%, 70%, ${currentOpacity})`;
        ctx.fill();
        ctx.shadowBlur = 0;
    }
}

// Star/sparkle class for twinkling effect
class Star {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.opacity = Math.random();
        this.fadeSpeed = (Math.random() * 0.02 + 0.01) * (Math.random() > 0.5 ? 1 : -1);
    }

    update() {
        this.opacity += this.fadeSpeed;
        if (this.opacity <= 0 || this.opacity >= 1) {
            this.fadeSpeed *= -1;
        }
    }

    draw() {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
        ctx.fillRect(this.x, this.y, this.size, this.size);
        
        // Draw cross sparkle
        ctx.fillRect(this.x - this.size * 2, this.y, this.size * 5, this.size * 0.5);
        ctx.fillRect(this.x, this.y - this.size * 2, this.size * 0.5, this.size * 5);
    }
}

// Mystic circle/aura class
class MysticCircle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = 0;
        this.maxRadius = Math.random() * 100 + 50;
        this.speed = Math.random() * 0.5 + 0.3;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.hue = Math.random() * 60 + 260;
    }

    update() {
        this.radius += this.speed;
        this.opacity -= 0.002;
        
        if (this.radius >= this.maxRadius || this.opacity <= 0) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.radius = 0;
            this.maxRadius = Math.random() * 100 + 50;
            this.opacity = Math.random() * 0.3 + 0.1;
            this.hue = Math.random() * 60 + 260;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `hsla(${this.hue}, 70%, 60%, ${this.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
}

// Create particles
const particles = [];
const stars = [];
const circles = [];

for (let i = 0; i < 80; i++) {
    particles.push(new MagicParticle());
}

for (let i = 0; i < 30; i++) {
    stars.push(new Star());
}

for (let i = 0; i < 5; i++) {
    circles.push(new MysticCircle());
}

// Animation loop
function animate() {
    // Clear canvas with slight fade for trail effect
    ctx.fillStyle = 'rgba(26, 26, 46, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Update and draw mystic circles
    circles.forEach(circle => {
        circle.update();
        circle.draw();
    });
    
    // Update and draw particles
    particles.forEach(particle => {
        particle.update();
        particle.draw();
    });
    
    // Update and draw stars
    stars.forEach(star => {
        star.update();
        star.draw();
    });
    
    requestAnimationFrame(animate);
}

// Start animation
animate();