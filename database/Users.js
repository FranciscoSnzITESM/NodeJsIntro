const db = require('../database.json');

async function getUsers() {
    return db.users;
}

async function getUser(email) {
    for (let i = 0; i < db.users.length; i++) {
        if (db.users[i].email === email)
            return db.users[i];
    }
    return null;
}

module.exports.getUsers = getUsers;
module.exports.getUser = getUser;
