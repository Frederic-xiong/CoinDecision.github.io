let isFlipping = false;

function flipCoin() {
    if (isFlipping) return;
    
    isFlipping = true;
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');
    
    // Clear previous result
    result.textContent = '';
    
    // Remove and re-add animation class
    coin.classList.remove('animate-flip');
    void coin.offsetWidth; // Trigger reflow
    coin.classList.add('animate-flip');
    
    // Determine result
    const random = Math.random();
    const outcome = random < 0.5 ? 'Heads' : 'Tails';
    
    // Show result after animation
    setTimeout(() => {
        result.textContent = `It's ${outcome}!`;
        isFlipping = false;
    }, 3000);
}
