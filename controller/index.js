var { getQuote, insertQuote, deleteQuote, updateQuote } = require("../model/use-cases");

var {errorObj} = require("../config/errors.json");

module.exports.get = async (req, res) => {
    try {
        let getData = await getQuote();
        if (getData.length > 0) {
            res.status(200);
            res.send(getData)
        } else {
            res.status(404);
            res.send(errorObj)
        }
    } catch (error) {
        console.log(error)
        res.status(404);
        res.send(error)
    }
}




module.exports.insert = async (req, res) => {
    try {
        let data = {
            quote: req.body.quote || " qoute missing! ",
            author: req.body.author || " author missing! ",
            tag: req.body.tag || " tag missing! "
        }
        let insertData = await insertQuote(data);

        if (insertData) {
            res.status(200);
            res.send(insertData)
        } else {
            res.status(404);
            res.send(errorObj)
        }
    } catch (error) {
        console.log(error)
        res.status(404);
        res.send(error)
    }
}



module.exports.delete = async (req, res) => {
    try {
        let id = req.query.id;
        let deleteData = await deleteQuote(id);

        if (deleteData) {
            res.status(200);
            res.send("Quote deleted successfully")
        } else {
            res.status(404);
            res.send(errorObj)
        }
    } catch (error) {
        console.log(error)
        res.status(404);
        res.send(error)
    }
}


module.exports.update = async (req, res) => {
    try {
        let id = req.body.id;
        let data = {};
        req.body.hasOwnProperty("author") ? data.author = req.body.author : "";
        req.body.hasOwnProperty("quote") ? data.quote = req.body.quote : "";
        req.body.hasOwnProperty("tag") ? data.tag = req.body.tag : "";

        let updateData = await updateQuote(data, id);

        if (updateData) {
            res.status(200);
            res.send(updateData[0] + "  Quote Updated successfully")
        } else {
            res.status(404);
            res.send(errorObj)
        }
    } catch (error) {
        console.log(error)
        res.status(404);
        res.send(error)
    }
}
