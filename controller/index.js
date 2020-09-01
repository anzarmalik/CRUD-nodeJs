var { getQuote, insertQuote ,deleteQuote} = require("../model/use-cases");

var errorObj = {
    httpCode: 404,
    message: 'NOT_FOUND',
    description: 'The resource referenced by request does not exists.',
    details: 'Something went wrong!'
}

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
        let id = req.query.id ;
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