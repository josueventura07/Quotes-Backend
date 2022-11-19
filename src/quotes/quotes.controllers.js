
const quotesDB = []

let id = 1

//* 

const findAllQuotes = () => {
    return quotesDB
}

const findQuoteById = (id) => {
    const data = quotesDB.find( quote => quote.id == id)
    return data
}

const createQuote = (obj) => {
    const newQuote = {
        id: id++,
        author: obj.author ? obj.author : 'Anonymous', //? campo opcional
        quote: obj.quote,
        year: obj.year || 'Year Unknown'  //? campo opcional
    }

    quotesDB.push(newQuote)
    return newQuote
}

const findRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesDB.length)
    return quotesDB[randomIndex]
}

module.exports = {
    findAllQuotes,
    findQuoteById,
    createQuote,
    findRandomQuote
}

