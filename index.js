const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cliente = require('./controllers/clienteControllers');
const exame = require('./controllers/exameControllers');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://Volans:volans@cluster0.nynbs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch((error) => {
    console.log('Erro ao conectar ao MongoDB:', error);
});

app.use('/cliente', cliente);
app.use('/exame', exame);


const PORT = 3000; 
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

