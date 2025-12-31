(function() {
    const frames = [
        'favicon-frame-0.png',
        'favicon-frame-1.png',
        'favicon-frame-2.png'
    ];

    let currentFrame = 0;
    let link = document.querySelector("link[rel*='icon']");

    // If no favicon link exists, create one
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        link.type = 'image/png';
        document.head.appendChild(link);
    }

    // Animate favicon by cycling through frames
    function animateFavicon() {
        link.href = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }

    // Set initial frame
    link.href = frames[0];

    // Animate every 200ms
    setInterval(animateFavicon, 200);
})();
