const express = require('express');
const dotenv = require('dotenv');


const app = express();


dotenv.config();

const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Hello world');
})

app.listen(PORT, () => {
    console.log(`app running at port ${PORT}`);
})
