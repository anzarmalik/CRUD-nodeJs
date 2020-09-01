var quoteTable = require("../entities/quote");
var sequelize = require("sequelize")


module.exports.getQuote = async () => {

    try {
        let getData = await quoteTable.findAll({
            raw: true
        })
        if (getData) {
            return getData
        } else {
            return {}
        }

    } catch (error) {
        console.log(error)
        return {}
    }


}



module.exports.insertQuote = async (data) => {

    try {
        let insertedData = await quoteTable.create(data);
        if (insertedData) {
            return insertedData
        } else {
            return null
        }

    } catch (error) {
        console.log(error)
        return null
    }


}


module.exports.deleteQuote = async (id) => {

    try {

        let deletedData = await quoteTable.destroy({
            where: {
                id
            }
        });
        if (deletedData == 1) {
            return deletedData
        } else {
            return null
        }

    } catch (error) {
        console.log(error)
        return null
    }


}


