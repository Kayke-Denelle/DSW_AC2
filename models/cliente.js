const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    idade: { type: Number, required: true },
    ra: { type: String, required: true, unique: true },
    fk_idExame: { type: mongoose.Schema.Types.ObjectId, ref: 'Exame' }
});

module.exports = mongoose.model('Cliente', ClienteSchema);