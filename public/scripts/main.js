const searchButton = document.getElementById('searchButton');
searchButton.addEventListener('click', async () => {
    const input = document.getElementById('query');

    const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input.value }),
    });

    if (response.ok) {
        const responseData = await response.json();
        // PUT FRONTEND JAVASCRIPT CODE HERE
        // Show books in browser
    } else {
        const errorMessage = await response.text();
        console.error(errorMessage);
    }
});
