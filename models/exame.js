const mongoose = require('mongoose');

const ExameSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    clinica: { type: String, required: true },
    fk_idCliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' }
});

module.exports = mongoose.model('Exame', ExameSchema);