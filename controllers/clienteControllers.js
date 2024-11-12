const express = require('express');
const Cliente = require('../models/cliente');
const Exame = require('../models/exame');
const exame = require('../models/exame');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cliente = await Cliente.find().populate('fk_idExame');
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findById(req.params.id).populate('fk_idExame');
        if (!cliente) return res.status(404).json({ message: 'Aluno não encontrado' });

        const exame = await Exame.find({ fk_idExame: exame._id})
        res.json(cliente, exame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const cliente = new Cliente(req.body);
    try {
        const novoCliente = await cliente.save();
        res.status(201).json(novoCliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const cliente = await Cliente.findByIdAndDelete(req.params.id);
        if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
        res.json({ message: 'Cliente removido' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;