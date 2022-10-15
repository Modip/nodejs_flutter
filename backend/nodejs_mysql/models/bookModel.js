const { Sequelize } = require("sequelize")
const { sequelize } = require("../database")

    const Book = sequelize.define("book", {
        title: {
            type: Sequelize.STRING,
        },
        category: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        }
    })

sequelize.sync()

module.exports = Book