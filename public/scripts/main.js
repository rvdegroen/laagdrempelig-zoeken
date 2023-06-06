const searchForm = document.getElementById('searchForm');
searchForm.addEventListener('submit', async (event) => {
    event.preventDefault(); // Prevent default form submission

    const input = document.getElementById('query');

    try {
        const response = await fetch('/api/search', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: input.value }),
        });

        if (response.ok) {
            const responseData = await response.json();
            // console.log(response);
            console.log(responseData.data);
            // PUT FRONTEND JAVASCRIPT CODE HERE
            // Show books in the browser using responseData
            // Clear previous results
            searchResults.innerHTML = '';

            // Display the search results
            responseData.results.forEach((result) => {
                const title = result.titles;
                const author = result.author;

                const resultItem = document.createElement('div');
                resultItem.innerHTML = `<p>Title: ${title}</p><p>Author: ${author}</p>`;

                searchResults.appendChild(resultItem);
            });
        } else {
            const errorMessage = await response.text();
            console.error(errorMessage);
        }
    } catch (error) {
        console.error('Error:', error.message);
    }
});
