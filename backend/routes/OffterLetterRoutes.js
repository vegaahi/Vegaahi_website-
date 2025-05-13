const express = require('express');
const router = express.Router();
const OfferLetter = require('../model/OfferLetter')
// 🔹 Create Offer Letter
router.post('/create', async (req, res) => {
  try {
    const offer = new OfferLetter(req.body);
    await offer.save();
    res.status(201).json(offer);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// 🔹 Get All Offer Letters
router.get('/getall', async (req, res) => {
  try {
    const offers = await OfferLetter.find();
    res.status(200).json(offers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Get Offer Letter by ID
router.get('/get/:id', async (req, res) => {
  try {
    const offer = await OfferLetter.findById(req.params.id);
    if (!offer) return res.status(404).json({ error: 'Offer letter not found' });
    res.json(offer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// 🔹 Update Offer Letter by ID
router.put('/updateByEmployeeId/:employeeId', async (req, res) => {
    try {
      const updated = await OfferLetter.findOneAndUpdate(
        { employeeId: req.params.employeeId },
        req.body,
        { new: true }
      );
      if (!updated) return res.status(404).json({ error: 'Offer letter not found' });
      res.json(updated);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

// 🔹 Delete Offer Letter by ID
router.delete('/delete/:employeeId', async (req, res) => {
  try {
    const deleted = await OfferLetter.findOneAndDelete({employeeId:req.params.employeeId},req.body,{new:true});
    if (!deleted) return res.status(404).json({ error: 'Offer letter not found' });
    res.json({ message: 'Offer letter deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
