const users = require('../database/Users');

async function get(req, res, next) {
    try {
        const userId = req.params.userId;

        var result;
        // Checa los parametros para decidir que funcion llamar en '../database/Users.js'


        // Glosario:
        // - res.status(404).end("No user found");
        // - res.status(200).json(result);
    }
    catch (err) {
        next(err);
    }
}

module.exports.get = get;