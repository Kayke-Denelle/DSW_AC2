const express = require('express');
const Cliente = require('../models/cliente');
const Exame = require('../models/exame');
const router = express.Router();

router.get('/exame', async (req, res) => {
    try {
        const exame = await Exame.find().populate('idExame');
        res.json(exame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/exame:id', async (req, res) => {
    try {
        const exame = await Exame.findById(req.params.id).populate('idExame');
        if (!exame) return res.status(404).json({ message: 'Exame não encontrado' });
        res.json(exame);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.post('/exame', async (req, res) => {
    const exame = new Exame(req.body);
    try {
        const novoExame = await exame.save();
        res.status(201).json(novoExame);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.patch('/exame:id', async (req, res) => {
    try {
        const exame = await Exame.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!exame) return res.status(404).json({ message: 'Exame não encontrado' });
        res.json(exame);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

router.delete('/exame:id', async (req, res) => {
    try {
        const exame = await Exame.findByIdAndDelete(req.params.id);
        if (!exame) return res.status(404).json({ message: 'Exame não encontrado' });
        res.json({ message: 'Exame removido' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;