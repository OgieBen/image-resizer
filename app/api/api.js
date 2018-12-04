import express from 'express';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.get('/thumbnail', (req, res) => {
    
    res.send("Testing thumbnail route");
});

router.patch('/patch', (req, res) => {
    res.send("Testing patch route route");
});

export default router;

