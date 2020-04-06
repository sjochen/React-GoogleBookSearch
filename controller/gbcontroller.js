const db = require("../models");

module.exports = {
    findAll: (req, res) => {
        db.books.find({})
            .then(book => res.json(book))
    },


    saveBook: (req, res) => {
        db.books.create({
            id: req.body.id,

            title: req.body.volumeInfo.title,

            authors: req.body.volumeInfo.authors,

            description: req.body.volumeInfo.description,

            link: req.body.volumeInfo.link
        }).then(res.json("Complete"))
    },

    delete: (req, res) => {
        db.books.deleteOne({ id: req.params.id })
            .then(res.json("Deleted"))
    }

}