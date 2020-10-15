const users = require('../database/Users');

async function get(req, res, next) {
    try {
        const userId = req.params.userId;

        var result;
        if (userId) {
            result = await users.getUser(userId);
            if (result === null) {
                res.status(404).end("No user found");
            }
            res.status(200).json(result);
        }
        else {
            result = await users.getUsers();
            res.status(200).json(result);
        }

    }
    catch (err) {
        next(err);
    }
}

module.exports.get = get;