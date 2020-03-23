module.exports = function (sequalize, Datatypes) {
    var Books = sequalize.define("Book", {
        bookTitle: {
            type: Datatypes.STRING,
            allowNull: false
        },
        author: {
            type: Datatypes.STRING,
            allowNull: false
        },
        description: {
            type: Datatypes.STRING,
            allowNull: false
        },
        link: {
            type: Datatypes.STRING,
            allowNull: false
        },
    });
    return Books;
};