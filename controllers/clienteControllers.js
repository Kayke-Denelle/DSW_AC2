const express = require('express');
const Cliente = require('../models/cliente');
const Exame = require('../models/exame');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const cliente = await Exame.find().populate('fk_idCliente');
        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const cliente = await Exame.findById(req.params.id).populate('fk_idCliente');
        if (!cliente) return res.status(404).json({ message: 'Aluno não encontrado' });
        res.json(cliente);
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