const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    ra: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('Cliente', ClienteSchema);