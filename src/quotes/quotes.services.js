
const quotesControllers = require('./quotes.controllers')

const getAllQuotes = (req, res) => {
    const data = quotesControllers.findAllQuotes()
    res.status(200).json(data)
}

const getQuoteById = (req, res) => {
    const id = req.params.id

    const data = quotesControllers.findQuoteById(id)

    if(data) {
        //? En caso exitoso
        res.status(200).json(data)
    } else {
        //! En caso de error
        res.status(404).json({message: 'Invalid ID'})
    }
}

const postNewQuote = (req, res) => {
    const {quote, author, year} = req.body

    if(quote) {
        //? En caso exitoso
        const data = quotesControllers.createQuote({quote, author, year})
        res.status(201).json(data)
    } else {
        //! En caso de error
        res.status(400).json({
                message: 'Invalid Data', 
                fields: {
                author: 'string', 
                quote: 'string', 
                year: 'yyyy' 
                }
            });
    }

}

const getRandomQuote = (req, res) => {
    const data = quotesControllers.findRandomQuote()

    if(data) {
        //? En caso exitoso
        res.status(200).json(data)
    } else {
        //! En caso de error
        res.status(400).json({
            message: 'DB is Empty'
        })
    }
}


module.exports = {
    getAllQuotes,
    getQuoteById,
    postNewQuote,
    getRandomQuote
}