exports.search = function (entities) {
    let results = [
        // dummy hard-coded code NORMAL FETCH INSTEAD
        {
            type: 'Book',
            title: 'How to cook for absolute beginners',
            author: 'Adam Adams',
        },
        {
            type: 'Book',
            title: 'How to be the next Masterchef',
            author: 'Gordon Ramsey',
        },
    ];

    // entities:
    /* {
        type: 'book',
        category: 'cooking',
    } */

    // 2. We need to use the OBA API to find results based on the information what we extracted from the user query
    // 3. Provide the results to the frontend so that it can be shown to the user

    return results;
};
