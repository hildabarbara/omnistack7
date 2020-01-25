const express = require('express');

const server = express();

server.get('/users/:id',(req, res) => {
    //return res.send('Hildinha!');

    const nome = req.query.nome;

    const id = req.params.id;

    return res.json({ message: 'Olá ${nome}' });
})

server.listen(3000);