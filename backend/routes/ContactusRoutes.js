const express = require("express");
const router = express.Router();
const ContactUs = require("../model/ContactUs");

router.post("/contactus", async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body;

    const contactus = new ContactUs({
      name,
      email,
      phoneNumber,
      message,
    });

    await contactus.save();

    res.status(200).json({ message: "Form submitted successfully", data: contactus });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

router.get("/getallcontactus", async (req, res) => {
  try {
    const contactus = await ContactUs.find();
    res.status(200).json({ message: "All contact us details", data: contactus });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

router.get("/contactus/:id", async (req, res) => {
  try {
    const contactus = await ContactUs.findById(req.params.id);
    res.status(200).json({ message: "Contact us details", data: contactus });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

router.put("/contactus/:id", async (req, res) => {
  try {
    const { name, email, phoneNumber, message } = req.body;
    const contactus = await ContactUs.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber, message },
      { new: true }
    );
    res.status(200).json({ message: "Contact us updated successfully", data: contactus });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

router.delete("/contactus/:id", async (req, res) => {
  try {
    const contactus = await ContactUs.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Contact us deleted successfully", data: contactus });
  } catch (err) {
    res.status(500).json({ message: "An error occurred", error: err.message });
  }
});

module.exports = router;
