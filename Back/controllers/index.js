const { INVALID, OK } = require("../utils/httpCodes.js");
const { getTextInverted } = require("../services");

const echoController = (req, res, next) => {
    try {
        const {text} = req.query;
        const invertedText = getTextInverted(text);
        res.status(OK).json({text:invertedText,palindrome: text === invertedText});
    } catch (error) {
        res.status(INVALID).json(error);
    }
}

module.exports = {
    echoController,
}