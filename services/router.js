const router = require('express').Router();
const users = require('../controllers/Users');

router.route('/users/:userId?')
    .get(users.get)
//.put(users.put)
//.del(users.del) ...

module.exports = router;