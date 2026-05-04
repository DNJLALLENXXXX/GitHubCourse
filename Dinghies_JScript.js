document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight active navigation link based on current page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // 2. Update copyright year dynamically
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // 3. Interactive Dinghy Fact Generator
    const factBtn = document.getElementById('fact-btn');
    const factDisplay = document.getElementById('fact-display');
    
    if (factBtn && factDisplay) {
        const facts = [
            "The Optimist dinghy is the world's most popular youth sailing dinghy, used in over 120 countries.",
            "Dinghies under 12ft are often called 'puddle jumpers' and are perfect for learning wind awareness.",
            "Many racing dinghies use a trapeze wire to help sailors balance the boat against wind pressure.",
            "The ILCA Dinghy (formerly Laser) is one of the most sailed dinghies in Olympic history.",
            "Daggerboards and centerboards allow dinghies to sail upwind efficiently by preventing sideways drift.",
            "The Wayfarer dinghy has sailed across the North Sea and completed coastal expeditions.",
            "Self-bailing cockpits in modern dinghies automatically drain water through one-way valves."
        ];

        factBtn.addEventListener('click', () => {
            // Fade out, change text, fade in
            factDisplay.style.opacity = 0;
            setTimeout(() => {
                const randomFact = facts[Math.floor(Math.random() * facts.length)];
                factDisplay.textContent = randomFact;
                factDisplay.style.opacity = 1;
            }, 300);
        });
    }
});