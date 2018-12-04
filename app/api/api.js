import express from 'express';

const router = express.Router();

router.get('/login', (req, res) => {
   
    /* 
     * let userName = req.body.userName;
     * let password = req.body.password;
     * Todo: return signed JWT 
     */

    res.send("Tesing login route");
});

export default router;

