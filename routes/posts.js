const router = require('express').Router();
const auth = require('./verifyToken');

router.get('/', auth,(req, res) => {
    res.json({
        posts: {
            title: 'My First Post',
            description: 'random data you shouldnt access'
        }
    });
});

module.exports = router;