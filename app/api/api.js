import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/thumbnail', (req, res) => {
    let thumbnail = req.body.image_url;

    if (thumbnail === 'undefined' || thumbnail !== ''){
        res.sendStatus(403);
        return;
    }

    res.download(thumbnail, (err) => {
        if (err) {
            return;
        } 
    })
});

router.post('/patch', (req, res) => {

    let obj = req.body.opdata;
    let patch = req.body.patch;
    
    res.send("Testing patch route route");
});

export default router;

