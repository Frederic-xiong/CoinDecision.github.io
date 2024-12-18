function flipCoin() {
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;
    
    if (!option1 || !option2) {
        alert('Please enter both options!');
        return;
    }

    const coin = document.getElementById('coin');
    const result = document.getElementById('result');
    
    // Animation effect
    coin.style.animation = 'none';
    coin.offsetHeight; // Trigger reflow
    coin.style.animation = 'flip 1s';
    
    // Random selection
    setTimeout(() => {
        const random = Math.random();
        const winner = random < 0.5 ? option1 : option2;
        result.innerHTML = `<h2>The result is: ${winner}!</h2>`;
    }, 1000);
}
