let isFlipping = false;

function flipCoin() {
    if (isFlipping) return;
    
    const headsOption = document.getElementById('heads-option').value;
    const tailsOption = document.getElementById('tails-option').value;
    
    if (!headsOption || !tailsOption) {
        alert('Please enter both options!');
        return;
    }

    isFlipping = true;
    const coin = document.getElementById('coin');
    const result = document.getElementById('result');
    
    // Clear previous result
    result.textContent = '';
    
    // Random number of rotations (3-5 full rotations)
    const rotations = 3 + Math.floor(Math.random() * 3);
    const isHeads = Math.random() < 0.5;
    
    // Calculate final rotation
    const degrees = rotations * 360 + (isHeads ? 0 : 180);
    
    // Apply rotation
    coin.style.transform = `rotateY(${degrees}deg)`;
    
    // Show result after animation
    setTimeout(() => {
        const winner = isHeads ? headsOption : tailsOption;
        result.innerHTML = `<p>It's ${isHeads ? 'Heads' : 'Tails'}!</p>
                          <p>The winner is: ${winner}</p>`;
        isFlipping = false;
    }, 3000);
}
