import express from 'express';


const app = express();

app.use('/', (req, res) => {
    res.send("Welcome to my Test");
})

export default app;