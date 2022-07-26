const { INVALID } = require("../utils/httpCodes.js");

const validText = (req, res, next) => {
    const { text } = req.query;
    if(!text  || text.match(/[^A-Za-z]/gi) !== null) return res.status(INVALID).json({ text: "no text" });
    next();  
}

module.exports = {
    validText,
}