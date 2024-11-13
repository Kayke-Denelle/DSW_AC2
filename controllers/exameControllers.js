const express = require('express');
const Exame = require('../models/exame');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const exame = await Exame.find().populate('fk_idCliente');
        res.json(exame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const exame = await Exame.findById(req.params.id).populate('fk_idCliente');
        if (!exame) return res.status(404).json({ message: 'Exame não encontrado' });

        res.json(exame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/', async (req, res) => {
    const exame = new Exame(req.body);
    try {
        const novoExame = await exame.save();
        res.status(201).json(novoExame);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/:id', async (req, res) => {
    try {
        const exame = await Exame.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!exame) return res.status(404).json({ message: 'Exame não encontrado' });
        res.json(exame);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const exame = await Exame.findByIdAndDelete(req.params.id);
        if (!exame) return res.status(404).json({ message: 'Exame não encontrado' });
        res.json({ message: 'Exame removido' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;