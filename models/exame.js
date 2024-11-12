const mongoose = require('mongoose');

const ExameSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    clinica: { type: Number, required: true },
    idCliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }
});

module.exports = mongoose.model('Exame', ExameSchema);