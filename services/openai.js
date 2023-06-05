exports.parseQuery = function (query) {
    // query e.g. "I would like a book about cooking"

    // 1. "I would like to find a book about cooking" -> book, cooking

    return {
        type: 'book',
        category: 'cooking',
    };
};
