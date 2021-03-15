const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());

app.get('/', (req, res) => {
    fs.readFile('./dados/dados.json', 'utf8',(err, data) => {
        if (err) {
            return console.log(err)
        }
        res.json(JSON.parse(data))
    })
})

app.listen(3001, () => {
    console.log('Listen localhost:3001');
});